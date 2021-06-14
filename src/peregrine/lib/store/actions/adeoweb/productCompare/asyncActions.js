import BrowserPersistence from '@magento/peregrine/lib/util/simplePersistence';

import scrollTo from 'src//lib/util/scrollTo';
import { COMPARE_STORAGE_NAME } from 'src/lib/constants/productCompare';

import { name as reducerName } from '../../../reducers/adeoweb/productCompare';
import actions from './actions';

const storage = new BrowserPersistence();

export const setProduct = product => async (dispatch, getState) => {
    const state = getCurrentState(getState);
    const productData = state.productData;
    const productId = product.id;

    if (!state) {
        return;
    }

    if (Object.hasOwnProperty.call(productData, productId)) {
        await removeProductHandler({ product, dispatch, productData });

        return;
    }

    const productItem = {};
    productItem[product.id] = product;
    const newProductData = Object.assign(productData, productItem);

    dispatch(actions.setProduct(newProductData));
    await saveProduct(product);

    scrollTo();
    dispatch(actions.toggleCompareDropdown(true));
};

export const removeProduct = product => async (dispatch, getState) => {
    const state = getCurrentState(getState);

    if (!state) {
        return;
    }

    await removeProductHandler({
        product,
        dispatch,
        productData: state.productData
    });
};

export const removeAllProducts = () => async dispatch => {
    dispatch(actions.removeAllProducts());
    await deleteAllProducts();
};

export const toggleCompareDropdown = newDropdownState => async dispatch => {
    dispatch(actions.toggleCompareDropdown(newDropdownState));
};

const removeProductHandler = async ({ product, dispatch, productData }) => {
    const storedProducts = productData;
    const productKey = product.id;

    delete storedProducts[productKey];

    dispatch(actions.removeProduct(storedProducts));
    await deleteProduct(product);
};

const getCurrentState = callback => {
    const allStates = callback() || {};

    return allStates[reducerName];
};

async function deleteProduct(product) {
    const storedProducts = storage.getItem(COMPARE_STORAGE_NAME);
    const productKey = product.id;

    if (!storedProducts) {
        return;
    }

    delete storedProducts[productKey];

    return storage.setItem(COMPARE_STORAGE_NAME, storedProducts);
}

async function saveProduct(product) {
    let dataForStore;
    const storedProducts = storage.getItem(COMPARE_STORAGE_NAME);
    const newProduct = {};
    newProduct[product.id] = product;

    if (storedProducts) {
        dataForStore = Object.assign(storedProducts, newProduct);
    } else {
        dataForStore = newProduct;
    }

    return storage.setItem(COMPARE_STORAGE_NAME, dataForStore);
}

async function deleteAllProducts() {
    return storage.removeItem(COMPARE_STORAGE_NAME);
}
