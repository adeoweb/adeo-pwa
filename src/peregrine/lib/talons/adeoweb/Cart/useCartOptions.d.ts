import { DocumentNode } from 'graphql';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseCartOptionsProps = {
    addConfigurableProductToCartMutation: DocumentNode;
    addSimpleProductToCartMutation: DocumentNode;
    cartItem: TCartItem;
    configItem: TProduct;
    createCartMutation: DocumentNode;
    endEditItem: () => void;
    getCartDetailsQuery: DocumentNode;
    removeItemMutation: DocumentNode;
    updateItemMutation: DocumentNode;
};

export type TUseCartOptions = {
    initialQuantity: number;
    quantity: number;
    handleCancel: () => void;
    handleSelectionChange: (optionId: string, selection: number) => void;
    handleUpdate: () => Promise<void>;
    handleUpdateQuantity: (quantity: number) => Promise<void>;
    handleValueChange: (value: number | string) => Promise<void>;
    updateQuantity: (value: number) => void;
    isUpdateDisabled: boolean;
};

export function useCartOptions(props: TUseCartOptionsProps): TUseCartOptions;
