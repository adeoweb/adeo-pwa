import React, { FunctionComponent } from 'react';

import ErrorPage from 'src/lib/components/ErrorPage';
import {
    INTERNAL_ERROR,
    NOT_FOUND,
    useMagentoRoute
} from 'src/peregrine/lib/talons/MagentoRoute';

import { FullPageLoadingIndicator } from '../LoadingIndicator';

const MagentoRoute: FunctionComponent = () => {
    const talonProps = useMagentoRoute();
    const { component: RootComponent, id, isLoading, routeError } = talonProps;

    if (isLoading) {
        return <FullPageLoadingIndicator />;
    } else if (RootComponent) {
        return <RootComponent id={id} />;
    } else if (routeError === NOT_FOUND) {
        return <ErrorPage type={NOT_FOUND} />;
    }

    return <ErrorPage type={INTERNAL_ERROR} />;
};

export default MagentoRoute;
