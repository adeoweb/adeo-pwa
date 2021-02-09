import { createActions } from 'redux-actions';

const prefix = 'CHECKOUT';
const actionTypes = ['RESET'];

// classify action creators by domain
// e.g., `actions.order.submit` => CHECKOUT/ORDER/SUBMIT
// a `null` value corresponds to the default creator function
const actionMap = {
    INIT: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    ESTIMATE_ADDRESS: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    SHIPPING_ADDRESS: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    SHIPPING_METHOD: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    BILLING_ADDRESS: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    PAYMENT_METHOD: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    ORDER: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    RECEIPT: {
        SET_ORDER: null,
        RESET: null
    },
    APPLY_COUPON: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    },
    REMOVE_COUPON: {
        SUBMIT: null,
        ACCEPT: null,
        REJECT: null
    }
};

export default createActions(actionMap, ...actionTypes, { prefix });
