import { TProduct } from 'src/lib/types/graphql/Product';

type TUseAddToCart = {
    handleAddToCart: () => void;
    isAddToCartDisabled: boolean;
};

type TUseAddToCartProps = {
    getCartDetailsQuery: string | DocumentNode;
    createCartMutation: string | DocumentNode;
    addSimpleProductToCartMutation: string | DocumentNode;
    product: TProduct;
};

export function useAddToCart(props: TUseAddToCartProps): TUseAddToCart;
