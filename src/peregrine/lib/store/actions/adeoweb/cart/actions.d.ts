import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TCartActions = {
    addItem: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    getCart: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    getDetails: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    removeItem: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    updateItem: {
        request: TActionFunctionAny;
        receive: TActionFunctionAny;
    };
    beginEditItem: TActionFunctionAny;
    endEditItem: TActionFunctionAny;
    reset: TActionFunctionAny;
};
