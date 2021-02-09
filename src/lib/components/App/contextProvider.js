import React from 'react';
import {
    ToastContextProvider,
    WindowSizeContextProvider
} from '@magento/peregrine';

import { PeregrineContextProvider } from 'src/peregrine/lib';
/**
 * List of context providers that are required to run Venia
 *
 * @property {React.Component[]} contextProviders
 */
const contextProviders = [
    PeregrineContextProvider,
    WindowSizeContextProvider,
    ToastContextProvider
];

const ContextProvider = ({ children }) => {
    return contextProviders.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>;
    }, children);
};

export default ContextProvider;
