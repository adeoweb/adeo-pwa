import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export const useRemoveProduct = () => {
    const [, { removeProduct }] = useProductCompareContext();

    return {
        removeProduct
    };
};
