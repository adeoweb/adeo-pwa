import { TProduct } from 'src/lib/types/graphql/Product';

type TUseRemoveProduct = {
    removeProduct: (product: TProduct) => Promise<void>;
};

export function useRemoveProduct(): TUseRemoveProduct;
