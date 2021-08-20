import { MutationFunction } from '@apollo/react-hooks';

import { TCart } from 'src/lib/types/graphql/Cart';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TProduct } from 'src/lib/types/graphql/Product';

interface ICreateCartPayload {
    fetchCartId: MutationFunction;
}

interface IAddItemToCartPayload {
    addItemMutation: MutationFunction;
    fetchCartDetails: Promise<TCart>;
    fetchCartId: MutationFunction;
    item: TProduct;
    quantity: number;
    parentSku?: string;
    addItemSuccessCallback: () => void;
    addItemErrorCallback: (errorMessage: string) => void;
}

interface IUpdateItemInCartPayload {
    cartItemId: string;
    fetchCartDetails: Promise<TCart>;
    fetchCartId: MutationFunction;
    item: TCartItem;
    productType: string;
    quantity: number;
    removeItem: Promise<void>;
    updateItem: Promise<void>;
}

interface IRemoveItemFromCartPayload {
    item: TCartItem;
    fetchCartDetails: MutationFunction;
    fetchCartId: MutationFunction;
    removeItem: MutationFunction;
}

interface IMergeCartsPayload {
    mergeCartsRequest: Promise<TCart>;
    fetchCustomerCart: Promise<TCart>;
}

interface IGetCartDetailsPayload {
    fetchCartDetails: Promise<TCart>;
    fetchCartId: MutationFunction;
}

export type TCartAsyncActions = {
    createCart(payload: ICreateCartPayload): Promise<void>;
    addItemToCart(payload: IAddItemToCartPayload): Promise<void>;
    updateItemInCart(payload: IUpdateItemInCartPayload): Promise<void>;
    removeItemFromCart(payload: IRemoveItemFromCartPayload): Promise<void>;
    mergeCarts(payload: IMergeCartsPayload): Promise<void>;
    getCartDetails(payload: IGetCartDetailsPayload): Promise<void>;
    removeCart(): Promise<void>;
    retrieveCartId(): Promise<void>;
    saveCartId(id: string): Promise<void>;
    clearCartId(): Promise<void>;
    writeImageToCache(item: TCartItem): Promise<void>;
};
