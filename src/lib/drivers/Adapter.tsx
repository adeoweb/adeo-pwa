import {
    InMemoryCache,
    IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

import React, { useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';

import {
    ApolloProvider,
    createHttpLink,
    ApolloClient,
    ApolloLink,
    ApolloCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserPersistence } from '@magento/peregrine/lib/util';

import { TAdapterProps, TStorage } from 'src/lib/drivers/AdapterTypes';
import customFetch from 'src/lib/drivers/customFetch';
import { cacheKeyFromType } from 'src/lib/util/apolloCache';

import { history } from './history';

const storage = new BrowserPersistence();

/**
 * To improve initial load time, create an apollo cache object as soon as
 * this module is executed, since it doesn't depend on any component props.
 * The tradeoff is that we may be creating an instance we don't end up needing.
 */
const fragmentMatcher = new IntrospectionFragmentMatcher({
    // UNION_AND_INTERFACE_TYPES is injected into the bundle by webpack at build time.
    // @ts-ignore
    introspectionQueryResultData: UNION_AND_INTERFACE_TYPES
});

const preInstantiatedCache = new InMemoryCache({
    dataIdFromObject: cacheKeyFromType,
    fragmentMatcher
});

/**
 * We intentionally do not wait for the async function persistCache to complete
 * because that would negatively affect the initial page load.
 *
 * The tradeoff is that any queries that run before the cache is persisted may not be persisted.
 */
persistCache({
    cache: preInstantiatedCache,
    storage: window.localStorage as TStorage
});

export const createApolloLink = (apiBase: string): ApolloLink => {
    return createHttpLink({
        uri: apiBase,
        fetch: customFetch,
        useGETForQueries: true
    });
};

/**
 * The counterpart to `@magento/adeopwa-drivers` is an adapter that provides
 * context objects to the driver dependencies. The default implementation in
 * `@magento/adeopwa-drivers` uses modules such as `react-redux`, which
 * have implicit external dependencies. This adapter provides all of them at
 * once.
 *
 * Consumers of Venia components can either implement a similar adapter and
 * wrap their Venia component trees with it, or they can override `src/drivers`
 * so its components don't depend on context and IO.
 */

const Adapter = (props: TAdapterProps<unknown>): JSX.Element => {
    const { apiBase, apollo, children, store } = props;

    const apolloClient = useMemo(() => {
        // If we already have a client instance, use that.
        if (apollo.client) {
            return apollo.client;
        }

        // We need to instantiate an ApolloClient.
        const link = apollo.link || createApolloLink(apiBase);

        const cache = (apollo.cache ||
            preInstantiatedCache) as ApolloCache<unknown>;

        const client = new ApolloClient({ cache, link });

        // @ts-ignore
        client.apiBase = apiBase;

        return client;
    }, [apiBase, apollo]);

    return (
        <ApolloProvider client={apolloClient}>
            <ReduxProvider store={store}>
                <Router history={history}>{children(apolloClient)}</Router>
            </ReduxProvider>
        </ApolloProvider>
    );
};

Adapter.apolloLink = apiBase => {
    return createHttpLink({
        uri: apiBase,
        fetch: customFetch,
        useGETForQueries: false
    });
};

Adapter.storeLink = setContext((_, { headers }) => {
    const storeCurrency = storage.getItem('store_view_currency') || null;
    const storeCode =
        storage.getItem('store_view_code') || process.env.STORE_VIEW_CODE;

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            store: storeCode,
            ...(storeCurrency && { 'Content-Currency': storeCurrency })
        }
    };
});

export default Adapter;
