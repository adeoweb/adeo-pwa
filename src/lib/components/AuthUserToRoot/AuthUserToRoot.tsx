import React, { Fragment, FunctionComponent } from 'react';
import { Redirect } from 'src/lib/drivers';
import { useIsSignedIn } from 'src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn';

const AuthUserToRoot: FunctionComponent = ({ children }) => {
    const { isSignedIn } = useIsSignedIn();

    if (isSignedIn) {
        return <Redirect to="/" />;
    }

    return <Fragment>{children}</Fragment>;
};

export default AuthUserToRoot;
