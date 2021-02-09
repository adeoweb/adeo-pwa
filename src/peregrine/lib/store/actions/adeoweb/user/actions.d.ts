import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TUserActions = {
    reset: TActionFunctionAny;
    setToken: TActionFunctionAny;
    clearToken: TActionFunctionAny;
    setTimer: TActionFunctionAny;
    clearTimer: TActionFunctionAny;
    signIn: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    getDetails: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    createAddress: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    updateAddress: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    deleteAddress: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    createAccount: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    changePassword: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    updateCustomer: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    resetPassword: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    addToWishlist: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    removeFromWishlist: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
};
