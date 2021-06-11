import React from 'react';

import bannerConfigAggregator from './ContentTypes/Banner/configAggregator';
import blockConfigAggregator from './ContentTypes/Block/configAggregator';
import ButtonItem from './ContentTypes/ButtonItem';
import buttonItemConfigAggregator from './ContentTypes/ButtonItem/configAggregator';
import buttonsConfigAggregator from './ContentTypes/Buttons/configAggregator';
import Column from './ContentTypes/Column';
import columnConfigAggregator from './ContentTypes/Column/configAggregator';
import ColumnGroup from './ContentTypes/ColumnGroup';
import columnGroupConfigAggregator from './ContentTypes/ColumnGroup/configAggregator';
import dividerConfigAggregator from './ContentTypes/Divider/configAggregator';
import Heading from './ContentTypes/Heading';
import headingConfigAggregator from './ContentTypes/Heading/configAggregator';
import htmlConfigAggregator from './ContentTypes/Html/configAggregator';
import Image from './ContentTypes/Image';
import imageConfigAggregator from './ContentTypes/Image/configAggregator';
import mapConfigAggregator from './ContentTypes/Map/configAggregator';
import productsConfigAggregator from './ContentTypes/Products/configAggregator';
import Row from './ContentTypes/Row';
import rowConfigAggregator from './ContentTypes/Row/configAggregator';
import sliderConfigAggregator from './ContentTypes/Slider/configAggregator';
import tabItemConfigAggregator from './ContentTypes/TabItem/configAggregator';
import tabsConfigAggregator from './ContentTypes/Tabs/configAggregator';
import Text from './ContentTypes/Text';
import textConfigAggregator from './ContentTypes/Text/configAggregator';
import videoConfigAggregator from './ContentTypes/Video/configAggregator';

/* istanbul ignore next */
const contentTypesConfig = {
    row: {
        configAggregator: rowConfigAggregator,
        component: Row
    },
    column: {
        configAggregator: columnConfigAggregator,
        component: Column
    },
    'column-group': {
        configAggregator: columnGroupConfigAggregator,
        component: ColumnGroup
    },
    image: {
        configAggregator: imageConfigAggregator,
        component: Image
    },
    heading: {
        configAggregator: headingConfigAggregator,
        component: Heading
    },
    text: {
        configAggregator: textConfigAggregator,
        component: Text
    },
    tabs: {
        configAggregator: tabsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Tabs'))
    },
    'tab-item': {
        configAggregator: tabItemConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/TabItem'))
    },
    buttons: {
        configAggregator: buttonsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Buttons'))
    },
    'button-item': {
        configAggregator: buttonItemConfigAggregator,
        component: ButtonItem
    },
    block: {
        configAggregator: blockConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Block'))
    },
    products: {
        configAggregator: productsConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Products'))
    },
    html: {
        configAggregator: htmlConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Html'))
    },
    divider: {
        configAggregator: dividerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Divider'))
    },
    video: {
        configAggregator: videoConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Video'))
    },
    map: {
        configAggregator: mapConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Map'))
    },
    banner: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Banner'))
    },
    slider: {
        configAggregator: sliderConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Slider'))
    },
    // Slide is just a banner wrapped inside a slider
    slide: {
        configAggregator: bannerConfigAggregator,
        component: React.lazy(() => import('./ContentTypes/Banner'))
    }
};

/**
 * Retrieve a content types configuration
 *
 * @param {string} contentType
 * @returns {*}
 */
export default function getContentTypeConfig(contentType) {
    if (contentTypesConfig[contentType]) {
        return contentTypesConfig[contentType];
    }
}
