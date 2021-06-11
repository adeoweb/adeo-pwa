import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export const useProductCompare = () => {
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
