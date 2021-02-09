import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TAppActions = {
    toggleDrawer: TActionFunctionAny;
    setOnline: TActionFunctionAny;
    setOffline: TActionFunctionAny;
    toggleSearch: TActionFunctionAny;
    executeSearch: TActionFunctionAny;
    markErrorHandled: TActionFunctionAny;
    setActiveStore: TActionFunctionAny;
    setLayoutMode: TActionFunctionAny;
    setCustomerModal: TActionFunctionAny;
    hideCustomerModal: TActionFunctionAny;
};
