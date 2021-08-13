import { useCallback } from 'react';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';

type TUseHeader = {
    handleSearchTriggerClick: () => void;
    hasBeenOffline: boolean;
    isOnline: boolean;
    searchOpen: boolean;
};

export const useHeader = (): TUseHeader => {
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
