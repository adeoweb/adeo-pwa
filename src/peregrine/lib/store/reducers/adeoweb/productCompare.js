import { handleActions } from 'redux-actions';
import actions from '../../actions/adeoweb/productCompare';
import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence';
import { COMPARE_STORAGE_NAME } from 'src/lib/constants/productCompare';

export const name = 'productCompare';
const storage = new BrowserPersistence();

const initialState = {
    productData: storage.getItem(COMPARE_STORAGE_NAME) || {},
    compareDropdownOpen: false
};

const reducerMap = {
    [actions.setProduct]: (state, { payload }) => {
        return {
            ...state,
            productData: payload
        };
    },
    [actions.removeProduct]: (state, { payload }) => {
        return {
            ...state,
            productData: payload
        };
    },
    [actions.removeAllProducts]: state => {
        return {
            ...state,
            productData: {}
        };
    },
    [actions.toggleCompareDropdown]: (state, { payload }) => {
        return {
            ...state,
            compareDropdownOpen: payload
        };
    }
};

export default handleActions(reducerMap, initialState);
