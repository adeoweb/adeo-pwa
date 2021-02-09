import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TCatalogActions = {
    setCurrentPage: TActionFunctionAny;
    setPrevPageTotal: TActionFunctionAny;
};
