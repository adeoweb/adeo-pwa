import { createActions } from 'redux-actions';

const prefix = 'MENU';

const actionMap = {
    GET_MENU: {
        REQUEST: null,
        RECEIVE: null
    }
};

export default createActions(actionMap, { prefix });
