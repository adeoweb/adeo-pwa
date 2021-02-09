import { TProduct } from 'src/lib/types/graphql/Product';

export type TUseProductCompare = {
    productData: {
        [productId: string]: TProduct;
    };
    setProductHandler: (product: TProduct) => Promise<void>;
    removeProductHandler: (product: TProduct) => Promise<void>;
    removeAllProductsHandler: () => Promise<void>;
    isProductBeingCompared: (product: TProduct) => boolean;
};

export function useProductCompare(): TUseProductCompare;
