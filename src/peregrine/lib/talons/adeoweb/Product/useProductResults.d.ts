type TUseProductResultsProps = {
    totalProducts: number;
    pageSize: number;
    currentPage: number;
};

type TUseProductResults = {
    fromProducts: number;
    toProducts: number;
};

export function useProductResults(
    props: TUseProductResultsProps
): TUseProductResults;
