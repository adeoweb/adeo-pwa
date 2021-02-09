import { WatchQueryFetchPolicy } from '@apollo/client';

type TQueriesVariants = 'default';
type TQueriesFetchPolicy = {
    [index in TQueriesVariants]: WatchQueryFetchPolicy
};

type TMutationsVariants = 'default';
type TMutationsFetchPolicy = {
    [index in TMutationsVariants]: WatchQueryFetchPolicy
};

type TFetchPolicy = {
    queries: TQueriesFetchPolicy;
    mutations: TMutationsFetchPolicy;
};

export const fetchPolicy: TFetchPolicy;
