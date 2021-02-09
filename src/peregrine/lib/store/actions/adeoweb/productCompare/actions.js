import { createActions } from 'redux-actions';

const prefix = 'PRODUCT_COMPARE';
const actionTypes = [
    'SET_PRODUCT',
    'REMOVE_PRODUCT',
    'REMOVE_ALL_PRODUCTS',
    'TOGGLE_COMPARE_DROPDOWN'
];

export default createActions(...actionTypes, { prefix });
