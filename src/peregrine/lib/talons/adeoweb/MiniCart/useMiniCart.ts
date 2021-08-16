import { useCallback, useState } from 'react';

import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { ICartState } from 'src/peregrine/lib/store/reducers/adeoweb/cart';

export type TUseMiniCart = {
    cartItems: TCartItem[];
    cartState: ICartState;
    currencyCode: string;
    handleBeginEditItem: () => void;
    handleEndEditItem: () => void;
    handleClose: () => void;
    handleToggleCart: () => void;
    isEditingItem: boolean;
    isLoading: boolean;
    isMiniCartMaskOpen: boolean;
    isOpen: boolean;
    isUpdatingItem: boolean;
    numItems: number;
    setStep: (step: string) => void;
    shouldShowFooter: boolean;
    step: string;
    subtotal: number;
};

export const useMiniCart = (): TUseMiniCart => {
    const [{ drawer }, { closeDrawer, toggleDrawer }] = useAppContext();
    const [cartState] = useCartContext();

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

    const handleToggleCart = useCallback(() => {
        if (isOpen) {
            closeDrawer();
            return;
        }

        toggleDrawer({ name: 'cart' });
    }, [isOpen, closeDrawer, toggleDrawer]);

    return {
        cartItems: items ?? [],
        cartState,
        currencyCode,
        handleBeginEditItem,
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
