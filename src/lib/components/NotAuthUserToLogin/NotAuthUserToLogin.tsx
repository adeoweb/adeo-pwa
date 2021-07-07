import React, { Fragment, FunctionComponent } from 'react';

import RouterRoutes from 'src/lib/RouterRoutes/RouterRoutes';
import { Redirect } from 'src/lib/drivers';
import { useIsSignedIn } from 'src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn';

const NotAuthUserToLogin: FunctionComponent = ({ children }) => {
    const { isSignedIn } = useIsSignedIn();

    if (!isSignedIn) {
        return <Redirect to={RouterRoutes.loginPage.url} />;
    }

    return <Fragment>{children}</Fragment>;
};

export default NotAuthUserToLogin;
