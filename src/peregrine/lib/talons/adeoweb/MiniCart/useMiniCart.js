import { useCallback, useState } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';

export const useMiniCart = () => {
    const [{ drawer }, { closeDrawer, toggleDrawer }] = useAppContext();
    const [cartState] = useCartContext();
    const [, { cancelCheckout }] = useCheckoutContext();

    const [isEditingItem, setIsEditingItem] = useState(false);
    const [step, setStep] = useState('cart');

    const { derivedDetails, details, isLoading, isUpdatingItem } = cartState;
    const { items } = details;
    const { currencyCode, numItems = 0, subtotal = 0 } = derivedDetails;

    const shouldShowFooter =
        step === 'receipt' ||
        step === 'form' ||
        !((cartState.isEmpty && step === 'cart') || isLoading || isEditingItem);

    const isMiniCartMaskOpen = step === 'form';
    const isOpen = drawer === 'cart';

    const handleClose = useCallback(() => {
        setStep('cart');
        setIsEditingItem(false);
        closeDrawer();
    }, [closeDrawer, setStep]);

    const handleBeginEditItem = useCallback(() => {
        setIsEditingItem(true);
    }, []);

    const handleEndEditItem = useCallback(() => {
        setIsEditingItem(false);
    }, []);

    const handleDismiss = useCallback(() => {
        setStep('cart');
        cancelCheckout();
    }, [cancelCheckout]);

    const handleToggleCart = useCallback(() => {
        if (isOpen) {
            closeDrawer();
            return;
        }

        toggleDrawer({ name: 'cart' });
    }, [isOpen, closeDrawer, toggleDrawer]);

    return {
        cartItems: items,
        cartState,
        currencyCode,
        handleBeginEditItem,
        handleDismiss,
        handleEndEditItem,
        handleClose,
        handleToggleCart,
        isEditingItem,
        isLoading,
        isMiniCartMaskOpen,
        isOpen,
        isUpdatingItem,
        numItems,
        setStep,
        shouldShowFooter,
        step,
        subtotal
    };
};
