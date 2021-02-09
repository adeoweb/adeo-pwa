import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export const useCompare = () => {
    const [{ productData }] = useProductCompareContext();

    return {
        productData
    };
};
