import { useCallback, useEffect, useState } from 'react';

import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { ICartState } from 'src/peregrine/lib/store/reducers/adeoweb/cart';

export type TUseCart = {
    items: TCartItem[];
    cartState: ICartState;
    currencyCode: string;
    handleBeginEditItem: () => void;
    handleEndEditItem: () => void;
    isEditingItem: boolean;
    isLoading: boolean;
    isUpdatingItem: boolean;
    isSubmitting: boolean;
    numItems: number;
    subtotal: number;
};

export const useCart = (): TUseCart => {
    const [{ isSubmitting }] = useCheckoutContext();
    const [cartState] = useCartContext();
    const { derivedDetails, details, isLoading, isUpdatingItem } = cartState;
    const { items } = details;
    const { currencyCode, numItems, subtotal } = derivedDetails;
    const [cartItems, setCartItems] = useState(items);
    const [isEditingItem, setIsEditingItem] = useState(false);

    useEffect(() => {
        setCartItems(items);
    }, [items]);

    const handleBeginEditItem = useCallback(() => {
        setIsEditingItem(true);
    }, []);

    const handleEndEditItem = useCallback(() => {
        setIsEditingItem(false);
    }, []);

    return {
        items: cartItems ?? [],
        cartState,
        currencyCode,
        handleBeginEditItem,
        handleEndEditItem,
        isEditingItem,
        isLoading,
        isUpdatingItem,
        isSubmitting,
        numItems,
        subtotal
    };
};
