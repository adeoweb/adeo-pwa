import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

export const useNavigationTrigger = () => {
    const [, { toggleDrawer }] = useAppContext();

    const handleOpenNavigation = useCallback(() => {
        toggleDrawer({ name: 'nav' });
    }, [toggleDrawer]);

    return {
        handleOpenNavigation
    };
};
