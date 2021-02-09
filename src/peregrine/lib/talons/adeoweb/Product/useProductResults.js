import { useMemo } from 'react';
import { getPageCountInfo } from 'src/lib/util/pageCountHelper';

export const useProductResults = ({ totalProducts, pageSize, currentPage }) => {
    const getPageCountInfoArgs = {
        totalProducts,
        pageSize,
        currentPage
    };

    const { fromProducts, toProducts } = useMemo(
        () => getPageCountInfo(getPageCountInfoArgs),
        [getPageCountInfoArgs]
    );

    return {
        fromProducts,
        toProducts
    };
};
