import { useMemo } from 'react';

import { getPageCountInfo } from 'src/lib/util/pageCountHelper';

type TUseProductResultsProps = {
    totalProducts: number;
    pageSize: number;
    currentPage: number;
};

type TUseProductResults = {
    fromProducts: number;
    toProducts: number;
};

export const useProductResults = ({
    totalProducts,
    pageSize,
    currentPage
}: TUseProductResultsProps): TUseProductResults => {
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
