import React, { useCallback, useMemo, FunctionComponent } from 'react';

interface ITileProps {
    isActive: boolean;
    number: number;
    onClick: (page: number) => void;
    getPageUrl: (page: number) => string;
}

const Tile: FunctionComponent<ITileProps> = props => {
    const { isActive, number, onClick, getPageUrl } = props;

    const handleClick = useCallback(
        event => {
            event.preventDefault();
            onClick(number);
        },
        [onClick, number]
    );

    const pageUrl = useMemo(() => getPageUrl(number), [getPageUrl, number]);

    return (
        <li className={`page-item ${isActive ? 'active' : ''}`}>
            <a className="page-link" href={pageUrl} onClick={handleClick}>
                {number}
                {isActive && <span className="sr-only">(current)</span>}
            </a>
        </li>
    );
};

export default Tile;
