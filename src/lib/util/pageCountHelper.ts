interface IGetPageCountInfoArgs {
    totalProducts: number;
    pageSize: number;
    currentPage: number;
}

interface IGetPageCountInfo {
    fromProducts: number;
    toProducts: number;
}

type TGetPageCountInfo = (args: IGetPageCountInfoArgs) => IGetPageCountInfo;

export const getPageCountInfo: TGetPageCountInfo = ({
    totalProducts,
    pageSize,
    currentPage
}) => {
    const totalPages = Math.ceil(totalProducts / pageSize);

    let fromProducts = 0;

    if (currentPage <= 1 || totalPages <= 1) {
        fromProducts = 1;
    } else {
        fromProducts = (currentPage - 1) * pageSize + 1;
    }

    let toProducts = 0;

    if (currentPage <= 1 && totalPages <= 1) {
        toProducts = totalProducts;
    } else if (currentPage >= totalPages) {
        toProducts = totalProducts;
    } else {
        toProducts = currentPage * pageSize;
    }

    return {
        fromProducts,
        toProducts
    };
};
