import React, { FunctionComponent } from 'react';
import { Link } from 'src/lib/drivers';
import RouterRoutes from 'src/lib/RouterRoutes';
import { useIsSignedIn } from 'src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn';
import { useSignOut } from 'src/peregrine/lib/talons/adeoweb/SignOut/useSignOut';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import { useTranslation } from 'react-i18next';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';

const LinkList: FunctionComponent = () => {
    const { t } = useTranslation();

    const { isSignedIn } = useIsSignedIn();

    const { handleSignOut } = useSignOut({
        signOutMutation: SIGN_OUT_MUTATION,
        createCartMutation: CREATE_CART_MUTATION
    });

    return (
        <div className="header-menu">
            {!isSignedIn ? (
                <ul>
                    <li>
                        <Link to={RouterRoutes.contact.url}>
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <Link to={RouterRoutes.loginPage.url}>
                            {t('Login')}
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
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
                        <Link to={RouterRoutes.contact.url}>
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <button
                            className="btn btn-link top-bar-button-link"
                            onClick={handleSignOut}
                        >
                            {t('Log out')}
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LinkList;
