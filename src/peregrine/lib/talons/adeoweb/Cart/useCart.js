import { useCallback, useEffect, useState } from 'react';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';

export const useCart = () => {
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
        items: cartItems,
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
