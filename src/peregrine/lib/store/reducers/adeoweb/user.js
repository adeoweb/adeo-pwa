import { handleActions } from 'redux-actions';

import { Util } from '@magento/peregrine';

import actions from '../../actions/adeoweb/user';

const { BrowserPersistence } = Util;

const storage = new BrowserPersistence();

export const name = 'user';

const isSignedIn = () => !!storage.getItem('signin_token');

const initialState = {
    currentUser: {
        addresses: [],
        email: '',
        firstname: '',
        lastname: '',
        is_subscribed: false,
        wishlist: {
            items: []
        }
    },
    getDetailsError: null,
    isGettingDetails: false,
    createAddressError: null,
    isCreatingAddress: false,
    updateAddressError: null,
    isUpdatingAddress: false,
    deleteAddressError: null,
    isDeletingAddress: false,
    changePasswordError: null,
    isChangingPassword: false,
    updateCustomerError: null,
    isUpdatingCustomer: false,
    isResettingPassword: false,
    isAddingToWishlist: false,
    addToWishlistError: null,
    isRemovingFromWishlist: false,
    removeFromWishlistError: null,
    isSignedIn: isSignedIn(),
    isSigningIn: false,
    signInError: null,
    resetPasswordError: null,
    token: storage.getItem('signin_token'),
    sessionTimer: null
};

const reducerMap = {
    [actions.signIn.request]: state => {
        return {
            ...state,
            isSigningIn: true
        };
    },
    [actions.signIn.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                signInError: payload.toString(),
                isSigningIn: false
            };
        }

        return {
            ...state,
            isSigningIn: false
        };
    },
    [actions.setToken]: (state, { payload }) => {
        return {
            ...state,
            isSignedIn: true,
            token: payload
        };
    },
    [actions.clearToken]: state => {
        return {
            ...state,
            isSignedIn: false,
            token: null
        };
    },
    [actions.setTimer]: (state, { payload }) => {
        return {
            ...state,
            sessionTimer: payload
        };
    },
    [actions.clearTimer]: state => {
        return {
            ...state,
            sessionTimer: null
        };
    },
    [actions.getDetails.request]: state => {
        return {
            ...state,
            getDetailsError: null,
            isGettingDetails: true
        };
    },
    [actions.getDetails.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                getDetailsError: payload.toString(),
                isGettingDetails: false
            };
        }

        return {
            ...state,
            currentUser: payload,
            getDetailsError: null,
            isGettingDetails: false
        };
    },
    [actions.createAddress.request]: state => {
        return {
            ...state,
            createAddressError: null,
            isCreatingAddress: true
        };
    },
    [actions.createAddress.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                createAddressError: payload.toString(),
                isCreatingAddress: false
            };
        }

        return {
            ...state,
            createAddressError: null,
            isCreatingAddress: false
        };
    },
    [actions.updateAddress.request]: state => {
        return {
            ...state,
            updateAddressError: null,
            isUpdatingAddress: true
        };
    },
    [actions.updateAddress.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                updateAddressError: payload.toString(),
                isUpdatingAddress: false
            };
        }

        return {
            ...state,
            updateAddressError: null,
            isUpdatingAddress: false
        };
    },
    [actions.deleteAddress.request]: state => {
        return {
            ...state,
            deleteAddressError: null,
            isDeletingAddress: true
        };
    },
    [actions.deleteAddress.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                deleteAddressError: payload.toString(),
                isDeletingAddress: false
            };
        }

        const { currentUser } = state;
        const { addresses } = currentUser;
        const deletedAddress = addresses.find(
            address => address.id === payload
        );
        const index = addresses.indexOf(deletedAddress);
        if (index !== -1) {
            addresses.splice(index, 1);
        }

        return {
            ...state,
            currentUser: {
                ...currentUser,
                addresses
            },
            deleteAddressError: null,
            isDeletingAddress: false
        };
    },
    [actions.changePassword.request]: state => {
        return {
            ...state,
            changePasswordError: null,
            isChangingPassword: true
        };
    },
    [actions.changePassword.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                changePasswordError: payload.toString(),
                isChangingPassword: false
            };
        }

        return {
            ...state,
            changePasswordError: null,
            isChangingPassword: false
        };
    },
    [actions.updateCustomer.request]: state => {
        return {
            ...state,
            updateCustomerError: null,
            isUpdatingCustomer: true
        };
    },
    [actions.updateCustomer.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                updateCustomerError: payload.toString(),
                isUpdatingCustomer: false
            };
        }

        return {
            ...state,
            currentUser: payload,
            updateCustomerError: null,
            isUpdatingCustomer: false
        };
    },
    [actions.resetPassword.request]: state => ({
        ...state,
        isResettingPassword: true
    }),
    // TODO: handle the reset password response from the API.
    [actions.resetPassword.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                isResettingPassword: false,
                resetPasswordError: payload.toString()
            };
        }

        return {
            ...state,
            isResettingPassword: false,
            resetPasswordError: null
        };
    },
    [actions.reset]: () => {
        return {
            ...initialState,
            isSignedIn: false,
            token: null
        };
    },
    [actions.addToWishlist.request]: state => {
        return {
            ...state,
            addToWishlistError: null,
            isAddingToWishlist: true
        };
    },
    [actions.addToWishlist.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                addToWishlistError: payload.toString(),
                isAddingToWishlist: false
            };
        }

        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                wishlist: payload
            },
            addToWishlistError: null,
            isAddingToWishlist: false
        };
    },
    [actions.removeFromWishlist.request]: state => {
        return {
            ...state,
            removeFromWishlistError: null,
            isRemovingFromWishlist: true
        };
    },
    [actions.removeFromWishlist.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...state,
                removeFromWishlistError: payload.toString(),
                isRemovingFromWishlist: false
            };
        }

        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                wishlist: payload
            },
            removeFromWishlistError: null,
            isRemovingFromWishlist: false
        };
    }
};

export default handleActions(reducerMap, initialState);
