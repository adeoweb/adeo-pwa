import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

export const useHeader = () => {
    const [{ hasBeenOffline, isOnline, searchOpen }, { toggleSearch }] =
        useAppContext();

    const handleSearchTriggerClick = useCallback(() => {
        toggleSearch();
    }, [toggleSearch]);

    return {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        searchOpen
    };
};
