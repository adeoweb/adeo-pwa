import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TMessageCardActions = {
    addMessage: TActionFunctionAny;
    clearBlock: TActionFunctionAny;
    clearAllMessages: TActionFunctionAny;
    addMultipleMessages: TActionFunctionAny;
};
