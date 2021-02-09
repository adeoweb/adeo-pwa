import { TCart } from 'src//lib/types/graphql/Cart';

export interface ICartState {
    addItemError: Error | null;
    cartId: string;
    details: TCart;
    detailsError: Error | null;
    isLoading: boolean;
    isLoaded: boolean;
    isUpdatingItem: boolean;
    isAddingItem: boolean;
    removeItemError: Error | null;
    updateItemError: Error | null;
    isEmpty: false;
    derivedDetails: {
        currencyCode: string;
        numItems: number;
        subtotal: number;
    };
}
