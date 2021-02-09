import { TCart } from 'src/lib/types/graphql/Cart';
import { TCartItem } from 'src/lib/types/graphql/CartItem';

export type TFetchCartId = () => {
    data: {
        cartId: string;
    };
};

interface IAddItemToCartPayload {
    addItemMutation: Promise<void>;
    fetchCartDetails: Promise<TCart>;
    fetchCartId: Promise<TFetchCartId>;
    item: TCartItem;
    quantity: number;
    parentSku: string;
    addItemSuccessCallback: () => void;
    addItemErrorCallback: (errorMessage: string) => void;
}

interface IUpdateItemInCartPayload {
    cartItemId: string;
    fetchCartDetails: Promise<TCart>;
    fetchCartId: Promise<TFetchCartId>;
    item: TCartItem;
    productType: string;
    quantity: number;
    removeItem: Promise<void>;
    updateItem: Promise<void>;
}

interface IRemoveItemFromCartPayload {
    item: TCartItem;
    fetchCartDetails: Promise<TCart>;
    fetchCartId: Promise<TFetchCartId>;
    removeItem: Promise<void>;
}

interface IMergeCartsPayload {
    mergeCartsRequest: Promise<TCart>;
    fetchCustomerCart: Promise<TCart>;
}

interface IGetCartDetailsPayload {
    fetchCartDetails: Promise<TCart>;
    fetchCartId: Promise<TFetchCartId>;
}

export type TCartAsyncActions = {
    createCart(payload: TFetchCartId): Promise<void>;
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
