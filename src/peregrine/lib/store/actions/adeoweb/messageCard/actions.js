import { createActions } from 'redux-actions';

const prefix = 'MESSAGE_CARD';
const actionTypes = [
    'ADD_MESSAGE',
    'CLEAR_BLOCK',
    'CLEAR_ALL_MESSAGES',
    'ADD_MULTIPLE_MESSAGES'
];

export default createActions(...actionTypes, { prefix });
