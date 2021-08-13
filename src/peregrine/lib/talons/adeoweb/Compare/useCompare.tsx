import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';
import { TProductData } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';

type TUseCompare = {
    productData: TProductData;
};

export const useCompare = (): TUseCompare => {
    const [{ productData }] = useProductCompareContext();

    return {
        productData
    };
};
