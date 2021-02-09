import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TCheckoutActions = {
    init: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    estimateAddress: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    shippingAddress: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    shippingMethod: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    billingAddress: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    paymentMethod: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    order: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    receipt: {
        setOrder: TActionFunctionAny;
        reset: TActionFunctionAny;
    };
    applyCoupon: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
    removeCoupon: {
        submit: TActionFunctionAny;
        accept: TActionFunctionAny;
        reject: TActionFunctionAny;
    };
};
