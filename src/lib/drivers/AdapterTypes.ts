import { ApolloCache } from 'apollo-cache';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { Store } from 'redux';

import { ApolloClient } from '@apollo/client';

import { PersistedData, PersistentStorage } from 'apollo-cache-persist/types';
import { ApolloLink } from 'apollo-link/lib/link';

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
