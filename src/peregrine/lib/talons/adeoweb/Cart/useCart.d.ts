import { TCartItem } from 'src/lib/types/graphql/CartItem';
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

export function useCart(): TUseCart;
