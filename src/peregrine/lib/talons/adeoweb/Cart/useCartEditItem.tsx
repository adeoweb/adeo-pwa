import { DocumentNode } from 'graphql';

import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import {
    ProductDetailBySkuQuery,
    ProductDetailBySkuQueryVariables
} from 'src/lib/queries/getProductDetailBySku.generated';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TProduct } from 'src/lib/types/graphql/Product';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseCartEditItemProps = {
    item: TCartItem;
    query: DocumentNode;
};

export type TUseCartEditItem = {
    configItem?: Partial<TProduct>;
    hasError: boolean;
    isLoading: boolean;
    itemHasOptions: boolean;
};

export const useCartEditItem = (
    props: TUseCartEditItemProps
): TUseCartEditItem => {
    const { item, query } = props;

    const [runQuery, queryResult] = useLazyQuery<
        ProductDetailBySkuQuery,
        ProductDetailBySkuQueryVariables
    >(query, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const { data, error, loading } = queryResult;

    const itemHasOptions = item?.configurable_options?.length > 0;

    // Run the query once on mount and again whenever the
    // item being edited changes.
    useEffect(() => {
        // Only fetch item variants if it can have them.
        if (itemHasOptions) {
            runQuery({
                variables: {
                    sku: item.product.sku
                }
            });
        }
    }, [item, itemHasOptions, runQuery]);

    // If we don't have possible options for the item just use an empty object
    const configItem = data?.products?.items?.[0] ?? {};

    return {
        configItem,
        hasError: !!error,
        isLoading: !!loading,
        itemHasOptions
    };
};
