import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

export const useMobileMenu = () => {
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
