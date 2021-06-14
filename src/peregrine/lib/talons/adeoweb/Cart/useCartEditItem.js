import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCartEditItem = props => {
    const { item, query } = props;

    const [runQuery, queryResult] = useLazyQuery(query, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const { data, error, loading } = queryResult;

    const itemHasOptions =
        item.configurable_options && item.configurable_options.length > 0;

    // Run the query once on mount and again whenever the
    // item being edited changes.
    useEffect(() => {
        // Only fetch item variants if it can have them.
        if (itemHasOptions) {
            runQuery({
                variables: {
                    sku: item.product.sku,
                    onServer: false
                }
            });
        }
    }, [item, itemHasOptions, runQuery]);

    // If we don't have possible options for the item just use an empty object
    const configItem = data && data.products && data.products.items[0];

    return {
        configItem,
        hasError: !!error,
        isLoading: !!loading,
        itemHasOptions
    };
};
