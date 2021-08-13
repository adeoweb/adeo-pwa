import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { Store } from 'redux';

import { ApolloCache, ApolloClient, ApolloLink } from '@apollo/client';

import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';

export type TStorage = PersistentStorage<PersistedData<NormalizedCacheObject>>;

export type TAdapterProps<TCacheShape> = {
    apiBase: string;
    apollo: {
        client?: ApolloClient<TCacheShape>;
        link?: ApolloLink;
        cache?: ApolloCache<TCacheShape>;
    };
    store: Store;
    apolloLink?: () => ApolloLink;
    storeLink?: () => Record<any, unknown>;
    children(apolloClient: ApolloClient<unknown>): JSX.Element;
};
