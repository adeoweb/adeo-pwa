import { useEffect } from 'react';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

/**
 * Returns props necessary to render a SearchField component.
 *
 * @param {Object} props
 * @param {Object} props.location
 * @param {Function} props.onChange
 */
export const useSearchField = props => {
    const { setFieldValue } = props;

    // Pre-populate the search field with the search term from the URL.
    // We purposefully only ever run this effect on initial mount.
    useEffect(
        () => {
            const urlTerm = getSearchParam('query');

            if (!urlTerm) {
                return;
            }

            setFieldValue('search_query', urlTerm);
        },
        [] // eslint-disable-line react-hooks/exhaustive-deps
    );
};
