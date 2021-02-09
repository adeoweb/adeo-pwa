type TUseHeader = {
    handleSearchTriggerClick: () => void;
    hasBeenOffline: boolean;
    isOnline: boolean;
    searchOpen: boolean;
};

export function useHeader(): TUseHeader;
