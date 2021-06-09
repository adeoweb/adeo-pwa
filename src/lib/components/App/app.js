require('../../styles/styles.scss');
import React, { useCallback, useEffect } from 'react';
import { array, func, shape, string } from 'prop-types';
import { useToasts } from '@magento/peregrine';
import AlertCircleIcon from 'react-feather/alert-circle';
import CloudOffIcon from 'react-feather/cloud-off';
import WifiIcon from 'react-feather/wifi';
import RefreshIcon from 'react-feather/refresh-ccw';

import { useApp } from 'src/peregrine/lib/talons/adeoweb/App/useApp';
import { useLoadConfig } from 'src/peregrine/lib/talons/adeoweb/App/useLoadConfig';
import { useLoadUser } from 'src/peregrine/lib/talons/adeoweb/User/useLoadUser';
import { useUserSession } from 'src/peregrine/lib/talons/adeoweb/User/useUserSession';
import LoadingOverlay from 'src/lib/components/LoadingOverlay';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import { Route, Switch, useHistory } from 'src/lib/drivers';
import CustomerModal from 'src/lib/components/CustomerModal';
import scrollTo from 'src/lib/util/scrollTo';

import GET_STORE_CONFIG_DATA from '../../queries/getStoreConfigData.graphql';
import GET_CUSTOMER_QUERY from '../../queries/getCustomer.graphql';
import { HTML_UPDATE_AVAILABLE } from '../../constants/swMessageTypes';
import { registerMessageHandler } from '../../util/swUtils';
import Checkout, { rootCheckoutRoute } from '../Checkout';
import ToastContainer from '../ToastContainer';
import { HeadProvider, Title } from '../Head';
import CookieWarning from '../CookieWarning';
import MobileMenu from '../MobileMenu';
import Routes from '../Routes';
import Icon from '../Icon';
import Main from '../Main';
import Mask from '../Mask';

const OnlineIcon = <Icon src={WifiIcon} attrs={{ width: 18 }} />;
const OfflineIcon = <Icon src={CloudOffIcon} attrs={{ width: 18 }} />;
const ErrorIcon = <Icon src={AlertCircleIcon} attrs={{ width: 18 }} />;
const UpdateIcon = <Icon src={RefreshIcon} attrs={{ width: 18 }} />;

const ERROR_MESSAGE = 'Sorry! An unexpected error occurred.';

const App = props => {
    const { markErrorHandled, renderError, unhandledErrors } = props;
    const [, { addToast }] = useToasts();

    const handleIsOffline = useCallback(() => {
        addToast({
            type: 'error',
            icon: OfflineIcon,
            message: 'You are offline. Some features may be unavailable.',
            timeout: 3000
        });
    }, [addToast]);

    const handleIsOnline = useCallback(() => {
        addToast({
            type: 'info',
            icon: OnlineIcon,
            message: 'You are online.',
            timeout: 3000
        });
    }, [addToast]);

    const handleHTMLUpdate = useCallback(
        resetHTMLUpdateAvaiableFlag => {
            addToast({
                type: 'warning',
                icon: UpdateIcon,
                message: 'Update available. Please refresh.',
                actionText: 'Refresh',
                timeout: 0,
                onAction: () => {
                    location.reload();
                },
                onDismiss: removeToast => {
                    resetHTMLUpdateAvaiableFlag();
                    removeToast();
                }
            });
        },
        [addToast]
    );

    const handleError = useCallback(
        (error, id, loc, handleDismissError) => {
            const errorToastProps = {
                icon: ErrorIcon,
                message: `${ERROR_MESSAGE}\nDebug: ${id} ${loc}`,
                onDismiss: remove => {
                    handleDismissError();
                    remove();
                },
                timeout: 15000,
                type: 'error'
            };

            addToast(errorToastProps);
        },
        [addToast]
    );

    const talonProps = useApp({
        handleError,
        handleIsOffline,
        handleIsOnline,
        handleHTMLUpdate,
        markErrorHandled,
        renderError,
        unhandledErrors
    });

    const {
        hasOverlay,
        handleCloseDrawer,
        setHTMLUpdateAvailable,
        hideCustomerModal,
        customerModalType
    } = talonProps;

    const { error: configError, loaded } = useLoadConfig({
        getConfigQuery: GET_STORE_CONFIG_DATA
    });

    const { error: userDetailsError } = useLoadUser({
        getUserDetailsQuery: GET_CUSTOMER_QUERY
    });

    useUserSession({ signOutMutation: SIGN_OUT_MUTATION });

    useEffect(() => {
        const unregisterHandler = registerMessageHandler(
            HTML_UPDATE_AVAILABLE,
            () => {
                setHTMLUpdateAvailable(true);
            }
        );
        return unregisterHandler;
    }, [setHTMLUpdateAvailable]);

    useEffect(() => {
        document.body.classList.add('loaded');
    }, [loaded]);

    const { listen: addHistoryListener } = useHistory();

    useEffect(() => {
        const handleHistoryChange = () => scrollTo();
        const removeHistoryListener = addHistoryListener(handleHistoryChange);

        return () => removeHistoryListener();
    }, [addHistoryListener]);

    if (renderError || configError || userDetailsError) {
        return (
            <HeadProvider>
                <Title>{`Home Page - ${STORE_NAME}`}</Title>
                <Main isMasked={true} />
                <Mask isActive={true} />
                <ToastContainer />
                <LoadingOverlay />
            </HeadProvider>
        );
    }

    if (!loaded) {
        return <LoadingOverlay />;
    }

    return (
        <HeadProvider>
            <Title>{`Home Page - ${STORE_NAME}`}</Title>
            <Switch>
                <Route path={rootCheckoutRoute} component={Checkout} />
                <Main isMasked={hasOverlay}>
                    <Routes />
                </Main>
            </Switch>
            <Mask isActive={hasOverlay} dismiss={handleCloseDrawer} />
            <CustomerModal
                handleClose={hideCustomerModal}
                modalType={customerModalType}
            />
            <MobileMenu />
            <ToastContainer />
            <LoadingOverlay />
            <CookieWarning />
        </HeadProvider>
    );
};

App.propTypes = {
    markErrorHandled: func,
    renderError: shape({
        stack: string
    }),
    unhandledErrors: array
};

export default App;
