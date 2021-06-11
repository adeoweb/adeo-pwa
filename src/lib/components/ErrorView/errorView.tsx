import React, { FunctionComponent, useMemo } from 'react';

import { IErrorViewProps } from 'src/lib/types/ErrorView';

import { FullPageLoadingIndicator } from '../LoadingIndicator';

const messages = new Map()
    .set('loading', FullPageLoadingIndicator)
    .set('notFound', 'That page could not be found. Please try again.')
    .set('internalError', 'Something went wrong. Please try again.')
    .set(
        'outOfStock',
        'This Product is currently out of stock. Please try again later.'
    );

const ErrorView: FunctionComponent<IErrorViewProps> = ({
    loading,
    notFound,
    outOfStock
}) => {
    const message = useMemo(() => {
        return loading
            ? messages.get('loading')
            : notFound
            ? messages.get('notFound')
            : outOfStock
            ? messages.get('outOfStock')
            : messages.get('internalError');
    }, [loading, notFound, outOfStock]);

    return <h1>{message}</h1>;
};

export default ErrorView;
