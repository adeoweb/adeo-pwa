import { PAGER_TILE_TYPE_ELLIPSIS } from 'src/lib/constants/pagination';

type TUsePaginationProps = {
    currentPage: number;
    setPage: (page: number) => void;
    totalPages: number;
};

export type TUsePagination = {
    handleNavBack: () => void;
    handleNavForward: () => void;
    isActiveLeft: boolean;
    isActiveRight: boolean;
    navBackUrl: string;
    navForwardUrl: string;
    tiles: (number | typeof PAGER_TILE_TYPE_ELLIPSIS)[];
    getPageUrl: (page: number) => string;
};

export function usePagination(props: TUsePaginationProps): TUsePagination;
