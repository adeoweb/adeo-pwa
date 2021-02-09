import { RefObject } from 'react';

export type TUseCompareDropdown = {
    compareDropdownOpen: boolean;
    openCompareDropdown: () => void;
    compareDropdownRef: RefObject<HTMLDivElement>;
};

export function useCompareDropdown(): TUseCompareDropdown;
