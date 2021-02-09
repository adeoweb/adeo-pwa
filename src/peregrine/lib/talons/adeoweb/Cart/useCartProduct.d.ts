import { DocumentNode } from 'graphql';
import {
    TCartItem,
    TSelectedConfigurableOption,
    TSelectedCustomizableOption
} from 'src/lib/types/graphql/CartItem';

type TUseCartProductProps = {
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    item: TCartItem;
    removeItemMutation: DocumentNode;
};

export type TUseCartProduct = {
    handleRemoveItem: () => void;
    isLoading: boolean;
    image: string;
    name: string;
    options: TSelectedConfigurableOption[];
    customOptions: TSelectedCustomizableOption[];
    price: number;
    subtotal: number;
    quantity: number;
    urlKey: string;
};

export function useCartProduct(props: TUseCartProductProps): TUseCartProduct;
