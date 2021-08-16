import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

type TUseMobileMenu = {
    isOpen: boolean;
    handleClose: () => void;
};

export const useMobileMenu = (): TUseMobileMenu => {
    const [appState, { closeDrawer }] = useAppContext();
    const { drawer } = appState;
    const isOpen = drawer === 'nav';
    const handleClose = useCallback(() => {
        closeDrawer();
    }, [closeDrawer]);

    return {
        isOpen,
        handleClose
    };
};
