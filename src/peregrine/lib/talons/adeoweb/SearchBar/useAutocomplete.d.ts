import { DocumentNode } from 'graphql';
import { TProductsSearch } from 'src/lib/types/ProductSearch';

type TUseAutocompleteProps = {
    query: DocumentNode;
    visible: boolean;
    value: string;
};

type TQueryResult = import('@apollo/react-common').QueryResult<{
    products: TProductsSearch;
}>;

type TUseAutocomplete = {
    messageType:
        | ''
        | 'ERROR'
        | 'LOADING'
        | 'PROMPT'
        | 'EMPTY_RESULT'
        | 'RESULT_SUMMARY';
    products?: TProductsSearch;
    queryResult: TQueryResult;
    resultCount?: number;
};

export function useAutocomplete(props: TUseAutocompleteProps): TUseAutocomplete;
