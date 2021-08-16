import { useCallback } from 'react';

import {
    LAYOUT_MODE_GRID,
    LAYOUT_MODE_LIST
} from 'src/lib/constants/layoutModes';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

export type TUseLayoutModes = {
    layoutMode: string | null;
    setGrid: () => void;
    setList: () => void;
};

export const useLayoutModes = (): TUseLayoutModes => {
    const [{ layoutMode }, { setLayoutMode }] = useAppContext();

    const setGrid = useCallback(
        () => setLayoutMode(LAYOUT_MODE_GRID),
        [setLayoutMode]
    );

    const setList = useCallback(
        () => setLayoutMode(LAYOUT_MODE_LIST),
        [setLayoutMode]
    );

    return {
        layoutMode,
        setGrid,
        setList
    };
};
