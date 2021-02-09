import { createActions } from 'redux-actions';

const prefix = 'APP';
const actionTypes = [
    'TOGGLE_DRAWER',
    'SET_ONLINE',
    'SET_OFFLINE',
    'TOGGLE_SEARCH',
    'EXECUTE_SEARCH',
    'MARK_ERROR_HANDLED',
    'SET_ACTIVE_STORE',
    'SET_LAYOUT_MODE',
    'SET_CUSTOMER_MODAL',
    'HIDE_CUSTOMER_MODAL'
];

export default createActions(...actionTypes, { prefix });
