import { useCallback } from 'react';
import { useSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

/**
 * Returns props necessary to render a SearchField component.
 *
 * @param {Object} props
 * @param {Object} props.location
 * @param {Function} props.onChange
 */
export const useSearchField = props => {
    const { location, setFieldValue } = props;

    const setValue = useCallback(
        nextValue => {
            // update the search field
            if (nextValue) {
                setFieldValue('search_query', nextValue);
            }
        },
        [setFieldValue]
    );

    useSearchParam({ location, parameter: 'query', setValue });
};
