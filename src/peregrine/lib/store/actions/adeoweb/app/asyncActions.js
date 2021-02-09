import actions from './actions';
import { removeCart } from '../cart/asyncActions';
import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence';

const storage = new BrowserPersistence();

export const toggleDrawer = payload => async dispatch =>
    dispatch(actions.toggleDrawer(payload));

export const closeDrawer = () => async dispatch =>
    dispatch(actions.toggleDrawer({ name: null }));

export const toggleSearch = () => async dispatch =>
    dispatch(actions.toggleSearch());

export const executeSearch = (query, history) =>
    async function thunk(dispatch) {
        history.push(`/search.html?query=${query}`);
        dispatch(actions.executeSearch(query));
    };

export const setActiveStore = store => async dispatch => {
    dispatch(removeCart());
    dispatch(actions.setActiveStore(store));
    await saveActiveStore(store);
    window.location.reload();
};

export const setLayoutMode = mode => async dispatch => {
    dispatch(actions.setLayoutMode(mode));
    await saveLayoutMode(mode);
};

export const setCustomerModal = type => async dispatch =>
    dispatch(actions.setCustomerModal(type));

export const hideCustomerModal = () => async dispatch =>
    dispatch(actions.hideCustomerModal());

async function saveActiveStore(store) {
    return storage.setItem('activeStore', store);
}

async function saveLayoutMode(mode) {
    return storage.setItem('layoutMode', mode);
}
