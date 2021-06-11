import React, { Suspense, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import RouterRoutes from 'src/lib/RouterRoutes';

import { FullPageLoadingIndicator } from '../LoadingIndicator';
import MagentoRoute from '../MagentoRoute';

const Routes: FunctionComponent = () => {
    const RouterRoutesArray = Object.values(RouterRoutes);
    return (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <Switch>
                {RouterRoutesArray.map(routerRoute => (
                    <Route
                        key={routerRoute.url}
                        exact={Boolean(routerRoute.exact)}
                        path={routerRoute.url}
                        component={routerRoute.component}
                    />
                ))}
                <Route>
                    <MagentoRoute />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
