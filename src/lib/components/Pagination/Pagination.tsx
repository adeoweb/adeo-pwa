import React, { useMemo, FunctionComponent } from 'react';
import { usePagination } from 'src/peregrine/lib/talons/adeoweb/Pagination/usePagination';
import Tile from './Tile';
import TileEllipsis from './TileEllipsis';
import NavButton from './NavButton';
import { navButtons } from './buttonVariables';
import { PAGER_TILE_TYPE_ELLIPSIS } from '../../constants/pagination';
import { IPaginationProps } from 'src/lib/components/Pagination/PaginationTypes';

const Pagination: FunctionComponent<IPaginationProps> = ({
    currentPage,
    setPage,
    totalPages
}) => {
    const {
        handleNavBack,
        handleNavForward,
        isActiveLeft,
        isActiveRight,
        tiles,
        getPageUrl,
        navBackUrl,
        navForwardUrl
    } = usePagination({
        currentPage,
        setPage,
        totalPages
    });

    const navigationTiles = useMemo(
        () =>
            tiles.map((tileNumber, index) =>
                tileNumber === PAGER_TILE_TYPE_ELLIPSIS ? (
                    <TileEllipsis key={`ellipsis-${index}`} />
                ) : (
                    <Tile
                        isActive={tileNumber === currentPage}
                        key={`tile-${tileNumber}`}
                        number={tileNumber}
                        onClick={setPage}
                        getPageUrl={getPageUrl}
                    />
                )
            ),
        [currentPage, tiles, setPage, getPageUrl]
    );

    if (totalPages === 1) {
        return null;
    }

    return (
        <div className="pagination">
            <NavButton
                name={navButtons.prevPage.name}
                label={navButtons.prevPage.buttonLabel}
                active={isActiveLeft}
                onClick={handleNavBack}
                url={navBackUrl}
            />
            {navigationTiles}
            <NavButton
                name={navButtons.nextPage.name}
                label={navButtons.nextPage.buttonLabel}
                active={isActiveRight}
                onClick={handleNavForward}
                url={navForwardUrl}
            />
        </div>
    );
};

export default Pagination;
