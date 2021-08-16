import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

type TUseNavigationTrigger = {
    handleOpenNavigation: () => void;
};

export const useNavigationTrigger = (): TUseNavigationTrigger => {
    const [, { toggleDrawer }] = useAppContext();

    const handleOpenNavigation = useCallback(() => {
        toggleDrawer({ name: 'nav' });
    }, [toggleDrawer]);

    return {
        handleOpenNavigation
    };
};
