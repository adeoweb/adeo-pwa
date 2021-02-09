import React, { FunctionComponent } from 'react';
import { useLayoutModes } from 'src/peregrine/lib/talons/adeoweb/LayoutModes/useLayoutModes';
import {
    LAYOUT_MODE_GRID,
    LAYOUT_MODE_LIST
} from 'src/lib/constants/layoutModes';

const LayoutModes: FunctionComponent = () => {
    const { layoutMode, setGrid, setList } = useLayoutModes();

    return (
        <div className="layout-modes">
            <button
                className={`layout-btn btn-grid btn btn-link p-0 ${
                    layoutMode === LAYOUT_MODE_GRID ? 'active' : ''
                }`}
                title="Grid"
                onClick={setGrid}
            >
                <i className="icon-mode-grid" />
            </button>
            <button
                className={`layout-btn btn-grid btn btn-link p-0 ${
                    layoutMode === LAYOUT_MODE_LIST ? 'active' : ''
                }`}
                title="List"
                onClick={setList}
            >
                <i className="icon-mode-list" />
            </button>
        </div>
    );
};

export default LayoutModes;
