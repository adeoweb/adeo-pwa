import { useCallback } from 'react';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { useFormik } from 'src/lib/drivers';
import { history } from '../../../../../lib/drivers/history';

const initialValues = { search_query: '' };

export const useSearchBar = () => {
    const { push } = history;
    const { elementRef, expanded, setExpanded } = useDropdown();

    // navigate on submit
    const handleSubmit = useCallback(
        ({ search_query }) => {
            if (search_query != null && search_query.trim().length > 0) {
                push(`/search.html?query=${search_query}`);
            }
        },
        [push]
    );

    const form = useFormik({
        initialValues,
        onSubmit: handleSubmit
    });

    // expand on focus
    const handleFocus = useCallback(() => {
        setExpanded(true);
    }, [setExpanded]);

    return {
        containerRef: elementRef,
        expanded,
        setExpanded,
        handleFocus,
        form
    };
};
