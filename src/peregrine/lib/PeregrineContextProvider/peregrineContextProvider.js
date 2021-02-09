import React from 'react';

import adeowebContextProviders from '../context/adeoweb';

const PeregrineContextProvider = ({ children }) => {
    return adeowebContextProviders.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>;
    }, children);
};

export default PeregrineContextProvider;
