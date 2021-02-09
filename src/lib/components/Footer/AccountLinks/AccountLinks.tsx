import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsSignedIn } from 'src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn';
import RouterRoutes from 'src/lib/RouterRoutes';
import { Link } from 'src/lib/drivers';
import { useSignOut } from 'src/peregrine/lib/talons/adeoweb/SignOut/useSignOut';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';

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
