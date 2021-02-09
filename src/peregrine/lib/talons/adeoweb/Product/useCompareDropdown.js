import { useRef, useEffect } from 'react';
import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

export const useCompareDropdown = () => {
    const [
        { compareDropdownOpen },
        { toggleCompareDropdown }
    ] = useProductCompareContext();

    const compareDropdownRef = useRef(null);

    useEffect(() => {
        const handleCloseCompareDropdown = ({ target }) => {
            if (
                compareDropdownOpen &&
                compareDropdownRef.current &&
                !compareDropdownRef.current.contains(target)
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
    }, [compareDropdownOpen]);

    return {
        compareDropdownOpen,
        compareDropdownRef
    };
};
