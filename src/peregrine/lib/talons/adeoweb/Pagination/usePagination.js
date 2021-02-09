import { useCallback, useMemo } from 'react';
import queryString from 'query-string';
import { PAGER_TILE_TYPE_ELLIPSIS } from 'src/lib/constants/pagination';

export const usePagination = props => {
    const { currentPage, setPage, totalPages } = props;

    const handleNavBack = useCallback(() => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    }, [currentPage, setPage]);

    const handleNavForward = useCallback(() => {
        if (currentPage < totalPages) {
            setPage(currentPage + 1);
        }
    }, [currentPage, setPage, totalPages]);

    const isActiveLeft = currentPage !== 1;
    const isActiveRight = currentPage !== totalPages;

    const tiles = useMemo(() => {
        const delta = 1;
        const left = currentPage - delta;
        const right = currentPage + delta + 1;
        const range = [];
        const rangeWithDots = [];

        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
                range.push(i);
            }
        }

        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push(PAGER_TILE_TYPE_ELLIPSIS);
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }, [currentPage, totalPages]);

    const getPageUrl = useCallback(
        page =>
            (page => {
                const urlQuery = window.location.search;
                const parsedUrl = queryString.parse(urlQuery);
                parsedUrl['page'] = page;
                return `/${window.location.pathname}?${queryString.stringify(
                    parsedUrl
                )}`;
            })(page),
        []
    );

    const navBackUrl = useMemo(
        () => (isActiveLeft ? getPageUrl(currentPage - 1) : '#'),
        [getPageUrl, currentPage, isActiveLeft]
    );

    const navForwardUrl = useMemo(
        () => (isActiveRight ? getPageUrl(currentPage + 1) : '#'),
        [getPageUrl, currentPage, isActiveRight]
    );

    return {
        handleNavBack,
        handleNavForward,
        navBackUrl,
        navForwardUrl,
        isActiveLeft,
        isActiveRight,
        tiles,
        getPageUrl
    };
};
