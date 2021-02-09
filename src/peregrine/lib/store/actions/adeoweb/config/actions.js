import { createActions } from 'redux-actions';

const prefix = 'CONFIG';

const actionMap = {
    GET_CONFIG: {
        REQUEST: null,
        RECEIVE: null
    }
};

export default createActions(actionMap, { prefix });
