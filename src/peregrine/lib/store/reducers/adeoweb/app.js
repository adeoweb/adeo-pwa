import { handleActions } from 'redux-actions';

import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence';

import { DEFAULT_LAYOUT_MODE } from 'src/lib/constants/layoutModes';

import actions from '../../actions/adeoweb/app';

export const name = 'app';
const storage = new BrowserPersistence();

const initialState = {
    drawer: null,
    hasBeenOffline: !navigator.onLine,
    isOnline: navigator.onLine,
    overlay: false,
    searchOpen: false,
    query: '',
    activeStore: storage.getItem('activeStore') || null,
    layoutMode: storage.getItem('layoutMode') || DEFAULT_LAYOUT_MODE,
    pending: {},
    customerModalType: null
};

const reducerMap = {
    [actions.toggleDrawer]: (state, { payload }) => {
        const { name, useOverlay } = payload;

        return {
            ...state,
            drawer: name,
            overlay: useOverlay && !!payload
        };
    },
    [actions.toggleSearch]: state => {
        return {
            ...state,
            searchOpen: !state.searchOpen
        };
    },
    [actions.executeSearch]: (state, { payload }) => {
        return {
            ...state,
            query: payload
        };
    },
    [actions.setOnline]: state => {
        return {
            ...state,
            isOnline: true
        };
    },
    [actions.setOffline]: state => {
        return {
            ...state,
            isOnline: false,
            hasBeenOffline: true
        };
    },
    [actions.setActiveStore]: (state, { payload }) => {
        return {
            ...state,
            activeStore: payload
        };
    },
    [actions.setLayoutMode]: (state, { payload }) => {
        return {
            ...state,
            layoutMode: payload
        };
    },
    [actions.setCustomerModal]: (state, { payload: type }) => {
        return {
            ...state,
            customerModalType: type
        };
    },
    [actions.hideCustomerModal]: state => {
        return {
            ...state,
            customerModalType: null
        };
    }
};

export default handleActions(reducerMap, initialState);
