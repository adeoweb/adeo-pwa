import { WatchQueryFetchPolicy } from '@apollo/react-hooks';

interface IFetchPolicy {
    queries: {
        default: WatchQueryFetchPolicy;
    };
    mutations: {
        default: Extract<WatchQueryFetchPolicy, 'no-cache'>;
    };
}

export const fetchPolicy: IFetchPolicy = {
    queries: {
        default: 'network-only'
    },
    mutations: {
        default: 'no-cache'
    }
};
