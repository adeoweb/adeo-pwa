import { ApolloClient } from '@apollo/client';
import { ApolloLink } from 'apollo-link/lib/link';
import { ApolloCache } from 'apollo-cache';
import { Store } from 'redux';
import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

export type TStorage = PersistentStorage<PersistedData<NormalizedCacheObject>>;

export type TAdapterProps<TCacheShape> = {
    apiBase: string;
    apollo: {
        client?: ApolloClient<TCacheShape>;
        link?: ApolloLink;
        cache: ApolloCache<TCacheShape>;
    };
    store: Store;
    apolloLink: () => ApolloLink;
    storeLink: () => Record<any, unknown>;
};
