import { Action, ActionFunctionAny } from 'redux-actions';

type TActionFunctionAny = ActionFunctionAny<Action<any>>;

export type TProductCompareActions = {
    setProduct: TActionFunctionAny;
    removeProduct: TActionFunctionAny;
    removeAllProducts: TActionFunctionAny;
    removeAllProducts: TActionFunctionAny;
    toggleCompareDropdown: TActionFunctionAny;
};
