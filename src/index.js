import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { Util } from '@magento/peregrine';
import app from '@magento/peregrine/lib/store/actions/app';

import ContextProvider from 'src/lib/components/App/contextProvider';
import { translate } from 'src/lib/drivers/i18n';
import { registerSW } from 'src/registerSW';
import App from 'src/lib/components/App';

import Adapter from './lib/drivers/Adapter';
import store from './store';

const { BrowserPersistence } = Util;
const apiBase = new URL('/graphql', location.origin).toString();
translate();

/**
 * The Venia adapter provides basic context objects: a router, a store, a
 * GraphQL client, and some common functions.
 */

// The Venia adapter is not opinionated about auth.
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists.
    const storage = new BrowserPersistence();
    const token = storage.getItem('signin_token');

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

// @see https://www.apollographql.com/docs/link/composition/.
const apolloLink = ApolloLink.from([
    new RetryLink(),
    authLink,
    Adapter.storeLink,
    Adapter.apolloLink(apiBase)
]);

const AppRender = () => (
    <Adapter apiBase={apiBase} apollo={{ link: apolloLink }} store={store}>
        {apolloClient => (
            <ContextProvider>
                <App apolloClient={apolloClient} />
            </ContextProvider>
        )}
    </Adapter>
);

// For testing purposes.
// const dummyRoot = document.createElement('div');
// dummyRoot.setAttribute('id', 'root');
// ReactDOM.render(<AppRender />, document.getElementById('root') ?? dummyRoot);

ReactDOM.render(<AppRender />, document.getElementById('root'));

const enableServiceWorker = false;
if (enableServiceWorker) {
    registerSW();
}

window.addEventListener('online', () => {
    store.dispatch(app.setOnline());
});
window.addEventListener('offline', () => {
    store.dispatch(app.setOffline());
});

if (module.hot) {
    // When any of the dependencies to this entry file change we should hot reload.
    module.hot.accept();
}
