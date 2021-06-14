import { handleActions } from 'redux-actions';

import actions from '../../actions/adeoweb/checkout';

export const name = 'checkout';

const initialState = {
    isLoading: false,
    isLoaded: false,
    isSubmitting: false,
    initError: null,
    billingAddressError: null,
    orderError: null,
    paymentMethodError: null,
    shippingAddressError: null,
    estimateAddressError: null,
    shippingMethodError: null,
    applyCouponError: null,
    removeCouponError: null,
    receipt: {
        order: {}
    }
};

const reducerMap = {
    [actions.init.submit]: () => ({
        ...initialState,
        isLoading: true,
        initError: null
    }),
    [actions.init.accept]: state => {
        return {
            ...state,
            isLoading: false,
            isLoaded: true
        };
    },
    [actions.init.reject]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            isLoaded: true,
            initError: payload
        };
    },
    [actions.shippingAddress.submit]: state => ({
        ...state,
        isSubmitting: true,
        shippingAddressError: null
    }),
    [actions.shippingAddress.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.shippingAddress.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            shippingAddressError: payload
        };
    },
    [actions.estimateAddress.submit]: state => ({
        ...state,
        isSubmitting: true,
        estimateAddressError: null
    }),
    [actions.estimateAddress.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.estimateAddress.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            estimateAddressError: payload
        };
    },
    [actions.shippingMethod.submit]: state => ({
        ...state,
        isSubmitting: true,
        shippingMethodError: null
    }),
    [actions.shippingMethod.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.shippingMethod.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            shippingMethodError: payload
        };
    },
    [actions.billingAddress.submit]: state => ({
        ...state,
        isSubmitting: true,
        billingAddressError: null
    }),
    [actions.billingAddress.accept]: state => ({
        ...state,
        isSubmitting: false
    }),
    [actions.billingAddress.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            billingAddressError: payload
        };
    },
    [actions.paymentMethod.submit]: state => ({
        ...state,
        isSubmitting: true,
        paymentMethodError: null
    }),
    [actions.paymentMethod.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.paymentMethod.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            paymentMethodError: payload
        };
    },
    [actions.applyCoupon.submit]: state => ({
        ...state,
        isSubmitting: true,
        applyCouponError: null
    }),
    [actions.applyCoupon.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.applyCoupon.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            applyCouponError: payload
        };
    },
    [actions.removeCoupon.submit]: state => ({
        ...state,
        isSubmitting: true,
        removeCouponError: null
    }),
    [actions.removeCoupon.accept]: state => {
        return {
            ...state,
            isSubmitting: false
        };
    },
    [actions.removeCoupon.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            removeCouponError: payload
        };
    },
    [actions.order.submit]: state => ({
        ...state,
        isSubmitting: true,
        orderError: null
    }),
    [actions.order.accept]: state => ({
        ...state,
        isSubmitting: false
    }),
    [actions.order.reject]: (state, { payload }) => {
        return {
            ...state,
            isSubmitting: false,
            orderError: payload
        };
    },
    [actions.receipt.setOrder]: (state, { payload }) => ({
        ...state,
        receipt: {
            order: payload
        }
    }),
    [actions.receipt.reset]: state => ({
        ...state,
        receipt: {
            ...initialState.receipt
        }
    }),
    [actions.reset]: () => initialState
};

export default handleActions(reducerMap, initialState);
