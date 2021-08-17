import { TProduct } from 'src/lib/types/graphql/Product';
import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export type TUseProductCompare = {
    productData: {
        [productId: string]: TProduct;
    };
    setProductHandler: (product: TProduct) => Promise<void>;
    removeProductHandler: (product: TProduct) => Promise<void>;
    removeAllProductsHandler: () => Promise<void>;
    isProductBeingCompared: (product: TProduct) => boolean;
};

export const useProductCompare = (): TUseProductCompare => {
    const [{ productData }, { setProduct, removeProduct, removeAllProducts }] =
        useProductCompareContext();

    const isProductBeingCompared = product => Boolean(productData[product.id]);

    return {
        productData,
        setProductHandler: setProduct,
        removeProductHandler: removeProduct,
        removeAllProductsHandler: removeAllProducts,
        isProductBeingCompared
    };
};
