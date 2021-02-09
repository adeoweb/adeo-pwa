import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TConfigurableProductOption } from 'src/lib/types/graphql/Product';

type TUseProductProps = {
    beginEditItem: () => void;
    createCartMutation: string | DocumentNode;
    getCartDetailsQuery: string | DocumentNode;
    item: TCartItem;
    removeItemMutation: string | DocumentNode;
};

export type TUseProduct = {
    handleEditItem: () => void;
    handleFavoriteItem: () => void;
    handleRemoveItem: () => void;
    isFavorite: boolean;
    isLoading: boolean;
    productImage: string;
    productName: string;
    productOptions: TConfigurableProductOption | null;
    productPrice: number;
    productQuantity: number;
    productUrlKey: string;
};

export function useProduct(props: TUseProductProps): TUseProduct;
