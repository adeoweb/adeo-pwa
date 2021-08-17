import React, { Fragment, FunctionComponent } from 'react';

import { Redirect } from 'src/lib/drivers';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

const AuthUserToRoot: FunctionComponent = ({ children }) => {
    const [{ isSignedIn }] = useUserContext();

    if (isSignedIn) {
        return <Redirect to="/" />;
    }

    return <Fragment>{children}</Fragment>;
};

export default AuthUserToRoot;
