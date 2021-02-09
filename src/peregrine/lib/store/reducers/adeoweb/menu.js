import { handleActions } from 'redux-actions';

import actions from '../../actions/adeoweb/menu';

export const name = 'menu';

const initialState = {
    children: []
};

const reducerMap = {
    [actions.getMenu.receive]: (state, { payload, error }) => {
        if (error) {
            return {
                ...initialState,
                loadingError: error
            };
        }

        return {
            ...state,
            ...payload,
            loadingError: null
        };
    }
};

export default handleActions(reducerMap, initialState);
