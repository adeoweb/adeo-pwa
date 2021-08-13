import {
    ApolloProvider as ApolloHooksProvider,
    ApolloClient
} from '@apollo/react-hooks';
import React from 'react';
import { IntlProvider } from 'react-intl';

import { useErrorContext } from 'src/peregrine/lib/context/adeoweb/unhandledErrors';

import App from './app';
import { useErrorBoundary } from './useErrorBoundary';

interface IAppContainerProps {
    apolloClient: ApolloClient<unknown>;
}

const AppContainer = ({ apolloClient }: IAppContainerProps): JSX.Element => {
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
