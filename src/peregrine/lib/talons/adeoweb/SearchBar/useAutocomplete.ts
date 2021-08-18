import { DocumentNode } from 'graphql';
import debounce from 'lodash.debounce';

import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useMemo } from 'react';

import { TProductsSearch } from 'src/lib/types/ProductSearch';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseAutocompleteProps = {
    query: DocumentNode;
    visible: boolean;
    value: string;
};

export type MessageType =
    | ''
    | 'ERROR'
    | 'LOADING'
    | 'PROMPT'
    | 'EMPTY_RESULT'
    | 'RESULT_SUMMARY';

type TUseAutocomplete = {
    messageType: MessageType;
    products?: TProductsSearch;
};

export const useAutocomplete = (
    props: TUseAutocompleteProps
): TUseAutocomplete => {
    const { query, visible, value } = props;

    // prepare to run query
    const [runQuery, queryResult] = useLazyQuery(query, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const { data, error, loading } = queryResult;

    // retrieve value from another field
    const valid = value && value.length > 2;

    // Create a debounced function so we only search some delay after the last
    // keypress.
    const debouncedRunQuery = useMemo(
        () => debounce(runQuery, 500),
        [runQuery]
    );

    // run the query once on mount, and again whenever state changes
    useEffect(() => {
        if (visible && valid) {
            debouncedRunQuery({ variables: { inputText: value } });
        }
    }, [debouncedRunQuery, valid, value, visible]);

    // Handle results.
    const products = data && data.products;
    const hasResult = products && products.items;
    const resultCount = hasResult && products.items.length;
    let messageType: MessageType = '';

    if (error) {
        messageType = 'ERROR';
    } else if (loading) {
        messageType = 'LOADING';
    } else if (!hasResult) {
        messageType = 'PROMPT';
    } else if (!resultCount) {
        messageType = 'EMPTY_RESULT';
    } else {
        messageType = 'RESULT_SUMMARY';
    }

    return {
        messageType,
        products
    };
};
