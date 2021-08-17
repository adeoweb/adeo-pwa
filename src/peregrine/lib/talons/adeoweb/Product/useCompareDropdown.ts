import { useRef, useEffect, RefObject } from 'react';

import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export type TUseCompareDropdown = {
    compareDropdownOpen: boolean;
    compareDropdownRef: RefObject<HTMLDivElement>;
};

export const useCompareDropdown = (): TUseCompareDropdown => {
    const [{ compareDropdownOpen }, { toggleCompareDropdown }] =
        useProductCompareContext();

    const compareDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleCloseCompareDropdown = ({ target }) => {
            if (
                compareDropdownOpen &&
                compareDropdownRef.current &&
                !compareDropdownRef.current?.contains(target)
            ) {
                toggleCompareDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleCloseCompareDropdown);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleCloseCompareDropdown
            );
        };
    }, [compareDropdownOpen, toggleCompareDropdown]);

    return {
        compareDropdownOpen,
        compareDropdownRef
    };
};
