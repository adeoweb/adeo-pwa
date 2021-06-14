import { configure, addDecorator } from '@storybook/react';
import React from 'react';

import '@magento/venia-ui/lib/index.css';

import { AppContextProvider } from '../lib/components/App';
import { Adapter } from '../lib/drivers';
import store from '../store';

const loadStories = () => {
    // Load all stories from venia-ui
    const context = require.context('../lib', true, /__stories__\/.+\.js$/);
    context.keys().forEach(context);

    // // Load all custom defined stories in src
    // const customContext = require.context('..', true, /__stories__\/.+\.js$/);
    // customContext.keys().forEach(customContext);
};

const backendUrl = process.env.MAGENTO_BACKEND_URL;
const apiBase = new URL('/graphql', backendUrl).toString();

addDecorator(storyFn => {
    return (
        <Adapter
            apiBase={apiBase}
            apollo={{ link: Adapter.apolloLink(apiBase) }}
            store={store}
        >
            <AppContextProvider>{storyFn()}</AppContextProvider>
        </Adapter>
    );
});

configure(loadStories, module);
