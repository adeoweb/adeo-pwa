import actions from './actions';
import cartActions from '../cart/actions';
import { createCart, removeCart, getCartDetails } from '../cart';
import { ESTIMATE_ADDRESS_FIRSTNAME } from 'src/lib/constants/cart';

export const initCheckout = payload =>
    async function thunk(dispatch) {
        dispatch(actions.init.submit());

        const {
            fetchCartId,
            fetchCartDetails,
            setShippingAddressesOnCart
        } = payload;

        try {
            await dispatch(
                getCartDetails({
                    fetchCartId,
                    fetchCartDetails
                })
            );

            await dispatch(
                clearEstimateAddress({
                    setShippingAddressesOnCart
                })
            );

            dispatch(actions.init.accept());
        } catch (error) {
            dispatch(actions.init.reject(error));
        }
    };

export const clearEstimateAddress = payload =>
    async function thunk(dispatch, getState) {
        const { setShippingAddressesOnCart } = payload;

        const { cart } = getState();
        const {
            cartId,
            details: { shipping_addresses: shippingAddresses }
        } = cart;
        const estimateAddress =
            shippingAddresses &&
            shippingAddresses.length > 0 &&
            shippingAddresses[0].firstname === ESTIMATE_ADDRESS_FIRSTNAME
                ? shippingAddresses[0]
                : null;

        if (estimateAddress) {
            await setShippingAddressesOnCart({
                variables: {
                    cartId,
                    addresses: null
                }
            });

            const {
                setShippingAddressesOnCart: { cart: details }
            } = data;

            dispatch(cartActions.getDetails.receive({ details }));
        }
    };

export const submitShippingAddress = (payload = {}) =>
    async function thunk(dispatch, getState) {
        dispatch(actions.shippingAddress.submit());

        const {
            customerAddressId,
            formValues,
            setGuestEmail,
            setShippingAddressesOnCart
        } = payload;

        const { cart, user } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            if (!user.isSignedIn) {
                if (!formValues.email) {
                    throw new Error('Missing required information: email');
                }
                await setGuestEmail({
                    variables: {
                        cartId,
                        email: formValues.email
                    }
                });
            }

            const variables = {
                cartId,
                addresses: []
            };
            if (customerAddressId) {
                variables.addresses.push({
                    customer_address_id: customerAddressId
                });
            } else {
                const {
                    firstname,
                    lastname,
                    company,
                    street,
                    city,
                    region,
                    postcode,
                    telephone,
                    country_code
                } = formValues;

                variables.addresses.push({
                    address: {
                        firstname,
                        lastname,
                        company,
                        street,
                        city,
                        region,
                        postcode,
                        telephone,
                        country_code
                    }
                });
            }

            const { errors, data } = await setShippingAddressesOnCart({
                variables
            });

            if (errors) {
                dispatch(actions.shippingAddress.reject(errors));
            } else {
                const {
                    setShippingAddressesOnCart: { cart: details }
                } = data;

                dispatch(cartActions.getDetails.receive({ details }));
                dispatch(actions.shippingAddress.accept());
            }
        } catch (error) {
            dispatch(actions.shippingAddress.reject(error));
            throw error;
        }
    };

export const submitEstimateAddress = (payload = {}) =>
    async function thunk(dispatch, getState) {
        dispatch(actions.estimateAddress.submit());

        const { formValues, setShippingAddressesOnCart } = payload;

        const { cart } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const variables = {
                cartId,
                addresses: [
                    {
                        address: formValues
                    }
                ]
            };

            const { errors, data } = await setShippingAddressesOnCart({
                variables
            });

            if (errors) {
                dispatch(actions.estimateAddress.reject(errors));
            } else {
                const {
                    setShippingAddressesOnCart: { cart: details }
                } = data;

                dispatch(cartActions.getDetails.receive({ details }));
                dispatch(actions.estimateAddress.accept());
            }
        } catch (error) {
            dispatch(actions.estimateAddress.reject(error));
            throw error;
        }
    };

export const submitShippingMethod = payload =>
    async function thunk(dispatch, getState) {
        dispatch(actions.shippingMethod.submit());

        const { shippingMethod, setShippingMethodOnCart } = payload;

        const { cart } = getState();
        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { errors, data } = await setShippingMethodOnCart({
                variables: {
                    cartId,
                    carrierCode: shippingMethod.carrier_code,
                    methodCode: shippingMethod.method_code
                }
            });

            if (errors) {
                dispatch(actions.shippingMethod.reject(errors));
            } else {
                const {
                    setShippingMethodsOnCart: { cart: details }
                } = data;

                dispatch(cartActions.getDetails.receive({ details }));
                dispatch(actions.shippingMethod.accept());
            }
        } catch (error) {
            dispatch(actions.shippingMethod.reject(error));
            throw error;
        }
    };

export const submitBillingAddress = payload =>
    async function thunk(dispatch, getState) {
        dispatch(actions.billingAddress.submit());

        const { cart } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { billingAddress, setBillingAddressOnCart } = payload;
            const { errors, data } = await setBillingAddressOnCart({
                variables: {
                    cartId,
                    billingAddress
                }
            });

            if (errors) {
                dispatch(actions.billingAddress.reject(errors));
            } else {
                const {
                    setBillingAddressOnCart: { cart: details }
                } = data;

                dispatch(cartActions.getDetails.receive({ details }));
                dispatch(actions.billingAddress.accept());
            }
        } catch (error) {
            dispatch(actions.billingAddress.reject(error));
            throw error;
        }
    };

export const submitPaymentMethod = payload =>
    async function thunk(dispatch, getState) {
        dispatch(actions.paymentMethod.submit());

        const { cart } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { paymentMethod, setPaymentMethodOnCart } = payload;

            const { errors, data } = await setPaymentMethodOnCart({
                variables: {
                    cartId,
                    paymentMethod
                }
            });

            if (errors) {
                dispatch(actions.paymentMethod.reject(errors));
            } else {
                const {
                    setPaymentMethodOnCart: { cart: details }
                } = data;

                dispatch(cartActions.getDetails.receive({ details }));
                dispatch(actions.paymentMethod.accept());
            }
        } catch (error) {
            dispatch(actions.paymentMethod.reject(error));
            throw error;
        }
    };

export const applyCoupon = payload =>
    async function thunk(dispatch, getState) {
        dispatch(actions.applyCoupon.submit());

        const { cart } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { couponCode, applyCouponToCart } = payload;

            const { data } = await applyCouponToCart({
                variables: {
                    cartId,
                    couponCode
                }
            });

            const {
                applyCouponToCart: { cart: details }
            } = data;

            dispatch(cartActions.getDetails.receive({ details }));
            dispatch(actions.applyCoupon.accept());
        } catch (error) {
            dispatch(actions.applyCoupon.reject(error));
            throw error;
        }
    };

export const removeCoupon = payload =>
    async function thunk(dispatch, getState) {
        dispatch(actions.removeCoupon.submit());

        const { cart } = getState();

        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { removeCouponFromCart } = payload;

            const { data } = await removeCouponFromCart({
                variables: {
                    cartId
                }
            });

            const {
                removeCouponFromCart: { cart: details }
            } = data;

            dispatch(cartActions.getDetails.receive({ details }));
            dispatch(actions.removeCoupon.accept());
        } catch (error) {
            dispatch(actions.removeCoupon.reject(error));
            throw error;
        }
    };

export const submitOrder = ({ fetchCartId, fetchCartDetails, placeOrder }) =>
    async function thunk(dispatch, getState) {
        dispatch(actions.order.submit());

        const { cart } = getState();
        const { cartId } = cart;
        if (!cartId) {
            throw new Error('Missing required information: cartId');
        }

        try {
            const { data, errors } = await placeOrder({
                variables: {
                    cartId
                }
            });

            if (errors) {
                dispatch(actions.order.reject(errors));
            } else {
                const {
                    placeOrder: { order }
                } = data;

                await dispatch(actions.receipt.setOrder(order));
                await dispatch(removeCart());
                await dispatch(
                    createCart({
                        fetchCartId
                    })
                );
                await dispatch(
                    getCartDetails({
                        fetchCartId,
                        fetchCartDetails
                    })
                );
                await dispatch(actions.order.accept());
            }
        } catch (error) {
            dispatch(actions.order.reject(error));
            throw error;
        }
    };

export const resetReceipt = () =>
    async function thunk(dispatch) {
        await dispatch(actions.receipt.reset());
    };
