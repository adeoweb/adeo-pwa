import React from 'react';
import { usePagination } from '../usePagination';
import { createTestInstance } from '@magento/peregrine';

const PAGER_TILE_TYPE_ELLIPSIS = 'PAGER_TILE_TYPE_ELLIPSIS';

jest.mock('src/lib/constants/pagination', () => {
    return {
        PAGER_TILE_TYPE_ELLIPSIS: 'PAGER_TILE_TYPE_ELLIPSIS'
    };
});

window.location = {
    pathname: 'pathname',
    search: 'search'
};

global.window = Object.create(window);
const pathname = 'pathname';
const origin = 'origin';
const search = 'search';
Object.defineProperty(window, 'location', {
    value: {
        pathname,
        search
    }
});

const mockSetPage = jest.fn();

beforeEach(() => {
    mockSetPage.mockReset();
});

describe('usePagination', () => {
    test('setPage is not called when clicking left arrow on first page', () => {
        const Component = () => {
            const { handleNavBack } = usePagination({
                currentPage: 1,
                setPage: mockSetPage,
                totalPages: 3
            });
            handleNavBack();
            return null;
        };

        createTestInstance(<Component />);

        expect(mockSetPage).not.toBeCalled();
    });

    test('setPage is called when clicking left arrow on non last page', () => {
        const Component = () => {
            const { handleNavBack } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 3
            });
            handleNavBack();
            return null;
        };

        createTestInstance(<Component />);

        expect(mockSetPage).toBeCalled();
    });

    test('setPage is not called when clicking right arrow on last page', () => {
        const Component = () => {
            const { handleNavForward } = usePagination({
                currentPage: 3,
                setPage: mockSetPage,
                totalPages: 3
            });
            handleNavForward();
            return null;
        };

        createTestInstance(<Component />);

        expect(mockSetPage).not.toBeCalled();
    });

    test('setPage is called when clicking left arrow on non last page', () => {
        const Component = () => {
            const { handleNavForward } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 3
            });
            handleNavForward();
            return null;
        };

        createTestInstance(<Component />);

        expect(mockSetPage).toBeCalled();
    });

    test('left navigation inactive with current page - one', () => {
        let testIsActiveLeft;

        const Component = () => {
            const { isActiveLeft } = usePagination({
                currentPage: 1,
                setPage: mockSetPage,
                totalPages: 10
            });
            testIsActiveLeft = isActiveLeft;
            return null;
        };

        createTestInstance(<Component />);

        expect(testIsActiveLeft).toBe(false);
    });

    test('left navigation active with current page - above one', () => {
        let testIsActiveLeft;

        const Component = () => {
            const { isActiveLeft } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 10
            });
            testIsActiveLeft = isActiveLeft;
            return null;
        };

        createTestInstance(<Component />);

        expect(testIsActiveLeft).toBe(true);
    });

    test('right navigation inactive with current page - last', () => {
        let testIsActiveRight;

        const Component = () => {
            const { isActiveRight } = usePagination({
                currentPage: 10,
                setPage: mockSetPage,
                totalPages: 10
            });
            testIsActiveRight = isActiveRight;
            return null;
        };

        createTestInstance(<Component />);

        expect(testIsActiveRight).toBe(false);
    });

    test('left navigation active with current page - below last', () => {
        let testIsActiveRight;

        const Component = () => {
            const { isActiveRight } = usePagination({
                currentPage: 5,
                setPage: mockSetPage,
                totalPages: 10
            });
            testIsActiveRight = isActiveRight;
            return null;
        };

        createTestInstance(<Component />);

        expect(testIsActiveRight).toEqual(true);
    });

    test('tiles match expected array with 3 pages, on page 1', () => {
        let testTiles;
        const expectedTiles = [1, 2, 3];

        const Component = () => {
            const { tiles } = usePagination({
                currentPage: 1,
                setPage: mockSetPage,
                totalPages: 3
            });
            testTiles = tiles;
            return null;
        };

        createTestInstance(<Component />);

        expect(testTiles).toEqual(expectedTiles);
    });

    test('tiles match expected array with 5 pages, on page 1', () => {
        let testTiles;
        const expectedTiles = [1, 2, PAGER_TILE_TYPE_ELLIPSIS, 5];

        const Component = () => {
            const { tiles } = usePagination({
                currentPage: 1,
                setPage: mockSetPage,
                totalPages: 5
            });
            testTiles = tiles;
            return null;
        };

        createTestInstance(<Component />);

        expect(testTiles).toEqual(expectedTiles);
    });

    test('tiles match expected array with 9 pages, on page 5', () => {
        let testTiles;
        const expectedTiles = [
            1,
            PAGER_TILE_TYPE_ELLIPSIS,
            4,
            5,
            6,
            PAGER_TILE_TYPE_ELLIPSIS,
            9
        ];

        const Component = () => {
            const { tiles } = usePagination({
                currentPage: 5,
                setPage: mockSetPage,
                totalPages: 9
            });
            testTiles = tiles;
            return null;
        };

        createTestInstance(<Component />);

        expect(testTiles).toEqual(expectedTiles);
    });

    test('correct url is produced for page 1', () => {
        let testUrl;
        const expectedUrl = `/${pathname}?page=1&${search}`;

        const Component = () => {
            const { getPageUrl } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 3
            });
            testUrl = getPageUrl(1);
            return null;
        };

        createTestInstance(<Component />);

        expect(testUrl).toEqual(expectedUrl);
    });

    test('correct url is produced for left arrow on page 2', () => {
        let testNavBackUrl;
        const expectedUrl = `/${pathname}?page=1&${search}`;

        const Component = () => {
            const { navBackUrl } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 3
            });
            testNavBackUrl = navBackUrl;
            return null;
        };

        createTestInstance(<Component />);

        expect(testNavBackUrl).toEqual(expectedUrl);
    });

    test('correct url is produced for left arrow on page 1', () => {
        let testNavBackUrl;
        const expectedUrl = `#`;

        const Component = () => {
            const { navBackUrl } = usePagination({
                currentPage: 1,
                setPage: mockSetPage,
                totalPages: 3
            });
            testNavBackUrl = navBackUrl;
            return null;
        };

        createTestInstance(<Component />);

        expect(testNavBackUrl).toEqual(expectedUrl);
    });

    test('correct url is produced for right arrow on page 2', () => {
        let testNavForwardUrl;
        const expectedUrl = `/${pathname}?page=3&${search}`;

        const Component = () => {
            const { navForwardUrl } = usePagination({
                currentPage: 2,
                setPage: mockSetPage,
                totalPages: 3
            });
            testNavForwardUrl = navForwardUrl;
            return null;
        };

        createTestInstance(<Component />);

        expect(testNavForwardUrl).toEqual(expectedUrl);
    });

    test('correct url is produced for right arrow on page 3', () => {
        let testNavForwardUrl;
        const expectedUrl = `#`;

        const Component = () => {
            const { navForwardUrl } = usePagination({
                currentPage: 3,
                setPage: mockSetPage,
                totalPages: 3
            });
            testNavForwardUrl = navForwardUrl;
            return null;
        };

        createTestInstance(<Component />);

        expect(testNavForwardUrl).toEqual(expectedUrl);
    });
});
