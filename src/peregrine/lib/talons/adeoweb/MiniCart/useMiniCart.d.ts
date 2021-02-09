import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { ICartState } from 'src/peregrine/lib/store/reducers/adeoweb/cart';

export type TUseMiniCart = {
    cartItems: TCartItem[];
    cartState: ICartState;
    currencyCode: string;
    handleBeginEditItem: () => void;
    handleDismiss: () => void;
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

export function useMiniCart(): TUseMiniCart;
