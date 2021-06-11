import { FetchPolicy } from '@apollo/client';

type TQueriesVariants = 'default';
type TQueriesFetchPolicy = { [index in TQueriesVariants]: FetchPolicy };

type TMutationsVariants = 'default';
type TMutationsFetchPolicy = {
    [index in TMutationsVariants]: 'no-cache' | undefined;
};

type TFetchPolicy = {
    queries: TQueriesFetchPolicy;
    mutations: TMutationsFetchPolicy;
};

export const fetchPolicy: TFetchPolicy;
