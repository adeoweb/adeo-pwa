import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'src/lib/drivers';
import {
    CheckoutRoutes,
    defaultCheckoutRoute,
    rootCheckoutRoute
} from './CheckoutRoutes';
import CheckoutWrapper from './CheckoutWrapper';
import CheckoutHeader from './CheckoutHeader';
import { FullPageLoadingIndicator } from 'src/lib/components/LoadingIndicator';

const Checkout: FunctionComponent = () => {
    const RoutesArray = Object.values(CheckoutRoutes);

    return (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <CheckoutHeader />
            <CheckoutWrapper>
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
                        from={rootCheckoutRoute}
                        to={defaultCheckoutRoute.url}
                    />
                </Switch>
            </CheckoutWrapper>
        </Suspense>
    );
};

export default Checkout;
