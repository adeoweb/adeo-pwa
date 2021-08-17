import { useCallback, useState } from 'react';

import { IProductsSortControl } from 'src/lib/components/ProductsSort';
import {
    DEFAULT_PRODUCT_SORT_DIR,
    DEFAULT_PRODUCT_SORT_FIELD
} from 'src/lib/constants/product';

export const useProductsSort = (): IProductsSortControl => {
    const [field, setField] = useState(DEFAULT_PRODUCT_SORT_FIELD);
    const [dir, setDir] = useState(DEFAULT_PRODUCT_SORT_DIR);

    const setSort = useCallback(
        ({ field: newField, dir: newDir }) => {
            setField(newField || field);
            setDir(newDir || dir);
        },
        [field, dir]
    );

    return {
        field,
        dir,
        setSort
    };
};
