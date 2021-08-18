import React, { Fragment, FunctionComponent } from 'react';

import RouterRoutes from 'src/lib/RouterRoutes/RouterRoutes';
import { Redirect } from 'src/lib/drivers';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

const NotAuthUserToLogin: FunctionComponent = ({ children }) => {
    const [{ isSignedIn }] = useUserContext();

    if (!isSignedIn) {
        return <Redirect to={RouterRoutes.loginPage.url} />;
    }

    return <Fragment>{children}</Fragment>;
};

export default NotAuthUserToLogin;
