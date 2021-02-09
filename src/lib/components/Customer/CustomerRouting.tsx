import React, { FunctionComponent, Suspense } from 'react';
import { FullPageLoadingIndicator } from 'src/lib/components/LoadingIndicator';
import { Route, Switch } from 'react-router-dom';
import {
    CustomerRoutes,
    defaultCustomerRoute,
    rootCustomerRoute
} from 'src/lib/components/Customer/CustomerRoutes';
import { Redirect } from 'src/lib/drivers';

const CustomerRouting: FunctionComponent = () => {
    const RoutesArray = Object.values(CustomerRoutes);

    return (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <Switch>
                {RoutesArray.map(route => (
                    <Route
                        key={route.url}
                        exact
                        path={route.url}
                        component={route.component}
                    />
                ))}
                <Redirect
                    from={rootCustomerRoute}
                    to={defaultCustomerRoute.url}
                />
            </Switch>
        </Suspense>
    );
};

export default CustomerRouting;
