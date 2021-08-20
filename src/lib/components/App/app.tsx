import React, { useCallback, useEffect, Suspense } from 'react';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import CloudOff from 'react-feather/dist/icons/cloud-off';
import RefreshCcw from 'react-feather/dist/icons/refresh-ccw';
import Wifi from 'react-feather/dist/icons/wifi';

import { useToasts } from '@magento/peregrine';

import CustomerModal from 'src/lib/components/CustomerModal';
import LoadingOverlay from 'src/lib/components/LoadingOverlay';
import { Route, Switch, useHistory } from 'src/lib/drivers';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import scrollTo from 'src/lib/util/scrollTo';
import { useApp } from 'src/peregrine/lib/talons/adeoweb/App/useApp';
import { useLoadConfig } from 'src/peregrine/lib/talons/adeoweb/App/useLoadConfig';
import { useLoadUser } from 'src/peregrine/lib/talons/adeoweb/User/useLoadUser';
import { useUserSession } from 'src/peregrine/lib/talons/adeoweb/User/useUserSession';

import { HTML_UPDATE_AVAILABLE } from '../../constants/swMessageTypes';
import GET_CUSTOMER_QUERY from '../../queries/getCustomer.graphql';
import GET_STORE_CONFIG_DATA from '../../queries/getStoreConfigData.graphql';
import { registerMessageHandler } from '../../util/swUtils';
import Checkout, { rootCheckoutRoute } from '../Checkout';
import CookieWarning from '../CookieWarning';
import { HeadProvider, Title } from '../Head';
import Icon from '../Icon';
import Main from '../Main';
import Mask from '../Mask';
import MobileMenu from '../MobileMenu';
import Routes from '../Routes';
import ToastContainer from '../ToastContainer';

require('../../styles/styles.scss');

const OnlineIcon = <Icon src={Wifi} attrs={{ width: 18 }} />;
const OfflineIcon = <Icon src={CloudOff} attrs={{ width: 18 }} />;
const ErrorIcon = <Icon src={AlertCircle} attrs={{ width: 18 }} />;
const UpdateIcon = <Icon src={RefreshCcw} attrs={{ width: 18 }} />;

const ERROR_MESSAGE = 'Sorry! An unexpected error occurred.';

interface IAppProps {
    markErrorHandled: () => void;
    renderError: {
        stack: string;
    };
    unhandledErrors: string[];
}

const App = (props: IAppProps): JSX.Element => {
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
        resetHTMLUpdateAvailableFlag => {
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
                    resetHTMLUpdateAvailableFlag();
                    removeToast();
                }
            });
        },
        [addToast]
    );

    const handleError = useCallback(
        (_error, id, loc, handleDismissError) => {
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

    useEffect((): any => {
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
                <Suspense fallback={<LoadingOverlay />}>
                    <Title>{`Home Page - ${STORE_NAME}`}</Title>
                    <Main isMasked={true} />
                    <Mask isActive={true} />
                    <ToastContainer />
                    <LoadingOverlay />
                </Suspense>
            </HeadProvider>
        );
    }

    if (!loaded) {
        return <LoadingOverlay />;
    }

    return (
        <HeadProvider>
            <Suspense fallback={<LoadingOverlay />}>
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
            </Suspense>
        </HeadProvider>
    );
};

export default App;
