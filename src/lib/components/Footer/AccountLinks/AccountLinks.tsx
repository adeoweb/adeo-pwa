import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import RouterRoutes from 'src/lib/RouterRoutes';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import { Link } from 'src/lib/drivers';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import { useIsSignedIn } from 'src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn';
import { useSignOut } from 'src/peregrine/lib/talons/adeoweb/SignOut/useSignOut';

const AccountLinks: FunctionComponent = () => {
    const { t } = useTranslation();
    const { isSignedIn } = useIsSignedIn();

    const { handleSignOut } = useSignOut({
        signOutMutation: SIGN_OUT_MUTATION,
        createCartMutation: CREATE_CART_MUTATION
    });

    return (
        <div className="widget">
            <h4 className="widget-title">{t('My Account')}</h4>
            <ul className="links">
                {isSignedIn ? (
                    <Fragment>
                        <li>
                            <Link to={RouterRoutes.customer.url}>
                                {t('My account')}
                            </Link>
                        </li>
                        <li>
                            <Link to={CustomerRoutes.wishlist.url}>
                                {t('My wishlist')}
                            </Link>
                        </li>
                        <li>
                            <button
                                className="btn btn-link px-0"
                                onClick={handleSignOut}
                            >
                                {t('Log out')}
                            </button>
                        </li>
                    </Fragment>
                ) : (
                    <li>
                        <Link
                            to={RouterRoutes.loginPage.url}
                            className="login-link"
                        >
                            {t('Login')}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AccountLinks;
