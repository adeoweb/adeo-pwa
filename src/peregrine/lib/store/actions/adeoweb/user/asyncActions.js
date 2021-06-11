import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence';
import { mergeCarts, removeCart } from '../cart';

import actions from './actions';
import remapToCustomerAddressFormValues from '../../../../util/adeoweb/remapToCustomerAddressFormValues';
import { fetchPolicy } from '../../../../util/adeoweb/fetchPolicy';

const storage = new BrowserPersistence();

export const signIn =
    ({
        email,
        password,
        signIn,
        fetchUserDetails,
        fetchCustomerCart,
        mergeCartsRequest,
        revokeToken
    }) =>
    async dispatch => {
        try {
            await dispatch(actions.signIn.request());
            // Sign in and save the token
            const { data: signInData, errors } = await signIn({
                variables: { email, password }
            });

            if (errors) {
                dispatch(actions.signIn.receive(new Error(errors)));
            } else {
                const token =
                    signInData && signInData.generateCustomerToken.token;

                await dispatch(setToken(token));
                await dispatch(setUserSession({ revokeToken }));
                await dispatch(getUserDetails({ fetchUserDetails }));

                await dispatch(
                    mergeCarts({
                        fetchCustomerCart,
                        mergeCartsRequest
                    })
                );

                await dispatch(actions.signIn.receive());
            }
        } catch (error) {
            dispatch(actions.signIn.receive(error));
            if (process.env.NODE_ENV === 'development') {
                console.error(error);
            }
        }
    };

export const signOut =
    ({ revokeToken }) =>
    async dispatch => {
        // Send mutation to revoke token.
        try {
            await revokeToken();
        } catch (error) {
            console.error('Error Revoking Token', error);
        }

        // Remove token from local storage and Redux.
        await dispatch(clearToken());
        await dispatch(clearUserSessionTimer());
        await dispatch(removeCart());

        await dispatch(actions.reset());
    };

export const setUserSession = ({ revokeToken }) => {
    return async function thunk(dispatch, getState) {
        const { user } = getState();
        const { sessionTimer, isSignedIn } = user;
        const oneMinuteInMs = 60 * 1000;

        if (!sessionTimer && isSignedIn) {
            const timer = setInterval(
                () => dispatch(checkUserSessionTimeout({ revokeToken })),
                oneMinuteInMs
            );
            dispatch(actions.setTimer(timer));
        }
    };
};

export const checkUserSessionTimeout = ({ revokeToken }) => {
    return async function thunk(dispatch) {
        const token = storage.getItem('signin_token');
        if (!token) {
            dispatch(signOut({ revokeToken }));
        }
    };
};

export const clearUserSessionTimer = () => {
    return async function thunk(dispatch, getState) {
        const { user } = getState();
        const { sessionTimer } = user;

        if (sessionTimer) {
            clearTimeout(sessionTimer);
        }

        dispatch(actions.clearTimer());
    };
};

export const getUserDetails = ({ fetchUserDetails }) =>
    async function thunk(...args) {
        const [dispatch, getState] = args;
        const { user } = getState();

        if (user.isSignedIn) {
            dispatch(actions.getDetails.request());

            try {
                const { data } = await fetchUserDetails({
                    fetchPolicy: fetchPolicy.queries.default
                });

                dispatch(actions.getDetails.receive(data.customer));
            } catch (error) {
                dispatch(actions.getDetails.receive(error));
            }
        }
    };

export const createCustomerAddress = ({
    createCustomerAddress,
    fetchUserDetails,
    address
}) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.createAddress.request());

        try {
            const remappedAddress = {
                ...address,
                region: {
                    region: address.region || null
                },
                // TODO: remove when backend fixed
                address_name: Array.isArray(address.street)
                    ? address.street.join(' ')
                    : ' '
            };

            const { errors } = await createCustomerAddress({
                variables: {
                    address: remappedAddress
                }
            });

            if (errors) {
                dispatch(actions.createAddress.receive(errors));
            } else {
                await dispatch(getUserDetails({ fetchUserDetails }));
                await dispatch(actions.createAddress.receive());
            }
        } catch (error) {
            dispatch(actions.createAddress.receive(error));
        }
    };

export const updateCustomerAddress = ({
    updateCustomerAddress,
    fetchUserDetails,
    id,
    address
}) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.updateAddress.request());

        try {
            const remappedAddress = {
                ...address,
                region: {
                    region: address.region || null
                },
                // TODO: remove when backend fixed
                address_name: Array.isArray(address.street)
                    ? address.street.join(' ')
                    : ' '
            };
            const { errors } = await updateCustomerAddress({
                variables: {
                    id,
                    address: remappedAddress
                }
            });

            if (errors) {
                dispatch(actions.updateAddress.receive(errors));
            } else {
                await dispatch(getUserDetails({ fetchUserDetails }));
                dispatch(actions.updateAddress.receive());
            }
        } catch (error) {
            dispatch(actions.updateAddress.receive(error));
        }
    };

export const setDefaultAddress = ({
    id,
    updateCustomerAddressQuery,
    fetchUserDetails,
    shipping,
    billing
}) =>
    async function thunk(...args) {
        const [dispatch, getState] = args;
        const {
            user: {
                currentUser: { addresses = [] }
            }
        } = getState();
        const address = addresses.find(address => address.id === id) || {};

        if (address) {
            const remappedAddress = remapToCustomerAddressFormValues(address);

            if (shipping) {
                remappedAddress.default_shipping = true;
            }

            if (billing) {
                remappedAddress.default_billing = true;
            }

            dispatch(
                updateCustomerAddress({
                    updateCustomerAddress: updateCustomerAddressQuery,
                    fetchUserDetails,
                    id,
                    address: remappedAddress
                })
            );
        }
    };

export const deleteCustomerAddress = ({ id, deleteCustomerAddress }) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.deleteAddress.request());

        try {
            await deleteCustomerAddress({
                variables: {
                    id
                }
            });

            dispatch(actions.deleteAddress.receive(id));
        } catch (error) {
            dispatch(actions.deleteAddress.receive(error));
        }
    };

export const resetPassword = ({ email }) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.resetPassword.request());

        // TODO: actually make the call to the API.
        // For now, just return a resolved promise.
        await Promise.resolve(email);

        dispatch(actions.resetPassword.receive());
    };

export const setToken = token =>
    async function thunk(...args) {
        const [dispatch] = args;

        // Store token in local storage.
        // TODO: Get correct token expire time from API
        storage.setItem('signin_token', token, 3600);

        // Persist in store
        dispatch(actions.setToken(token));
    };

export const clearToken = () =>
    async function thunk(...args) {
        const [dispatch] = args;

        // Clear token from local storage
        storage.removeItem('signin_token');

        // Remove from store
        dispatch(actions.clearToken());
    };

export const changePassword = ({ values, changePassword }) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.changePassword.request());

        try {
            await changePassword({
                variables: {
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword
                }
            });

            dispatch(actions.changePassword.receive());
        } catch (error) {
            dispatch(actions.changePassword.receive(error));
        }
    };

export const updateCustomer = ({ values, updateCustomer }) =>
    async function thunk(...args) {
        const [dispatch] = args;

        dispatch(actions.updateCustomer.request());

        try {
            const { data } = await updateCustomer({
                variables: {
                    input: values
                }
            });

            dispatch(
                actions.updateCustomer.receive(data.updateCustomer.customer)
            );
        } catch (error) {
            dispatch(actions.updateCustomer.receive(error));
        }
    };

export const addToWishlist = ({
    productId,
    addToWishlistQuery,
    successCallback,
    errorCallback
}) =>
    async function thunk(dispatch, getState) {
        const {
            user: {
                currentUser: { wishlist = {} }
            }
        } = getState();
        const { id: wishlistId } = wishlist;
        dispatch(actions.addToWishlist.request());

        if (!wishlistId) {
            dispatch(
                actions.addToWishlist.receive(new Error('No wishlist id'))
            );
            return;
        }

        try {
            const { data } = await addToWishlistQuery({
                variables: {
                    productId,
                    wishlistId
                }
            });

            if (typeof successCallback === 'function') {
                successCallback();
            }

            dispatch(actions.addToWishlist.receive(data.wishlistAddItem));
        } catch (error) {
            if (typeof errorCallback === 'function') {
                errorCallback(String(error));
            }

            dispatch(actions.addToWishlist.receive(error));
        }
    };

export const removeFromWishlist = ({
    productId,
    removeFromWishlistQuery,
    successCallback,
    errorCallback
}) =>
    async function thunk(dispatch, getState) {
        const {
            user: {
                currentUser: { wishlist = {} }
            }
        } = getState();
        const { id: wishlistId } = wishlist;
        dispatch(actions.removeFromWishlist.request());

        if (!wishlistId) {
            dispatch(
                actions.removeFromWishlist.receive(new Error('No wishlist id'))
            );
            return;
        }

        try {
            const { data } = await removeFromWishlistQuery({
                variables: {
                    productId,
                    wishlistId
                }
            });

            if (typeof successCallback === 'function') {
                successCallback();
            }

            dispatch(
                actions.removeFromWishlist.receive(data.wishlistRemoveItem)
            );
        } catch (error) {
            if (typeof errorCallback === 'function') {
                errorCallback(String(error));
            }

            dispatch(actions.removeFromWishlist.receive(error));
        }
    };
