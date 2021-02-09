import React from 'react';
import { IntlProvider } from 'react-intl';

import { useErrorContext } from 'src/peregrine/lib/context/adeoweb/unhandledErrors';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

import App from './app';
import { useErrorBoundary } from './useErrorBoundary';

const AppContainer = ({ apolloClient }) => {
    const ErrorBoundary = useErrorBoundary(App);
    const [unhandledErrors, errorApi] = useErrorContext();

    return (
        <ApolloHooksProvider client={apolloClient}>
            <IntlProvider locale="en">
                <ErrorBoundary
                    unhandledErrors={unhandledErrors}
                    {...errorApi}
                />
            </IntlProvider>
        </ApolloHooksProvider>
    );
};

export default AppContainer;
