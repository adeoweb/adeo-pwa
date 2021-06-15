import React, {
    FunctionComponent,
    Fragment,
    useEffect,
    useCallback
} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CheckoutRoutes } from 'src/lib/components/Checkout';
import GuestForm from 'src/lib/components/Checkout/Shipping/GuestForm';
import LoggedInUserForm from 'src/lib/components/Checkout/Shipping/LoggedInUserForm';
import { ProductsSummary } from 'src/lib/components/Checkout/Summary';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import ShippingMethods from 'src/lib/components/ShippingMethods';
import { useHistory } from 'src/lib/drivers';
import SET_GUEST_EMAIL_MUTATION from 'src/lib/queries/setGuestEmailOnCart.graphql';
import SET_SHIPPING_ADDRESSES_MUTATION from 'src/lib/queries/setShippingAddresses.graphql';
import SET_SHIPPING_METHOD_MUTATION from 'src/lib/queries/setShippingMethod.graphql';
import { useShippingStep } from 'src/peregrine/lib/talons/adeoweb/Checkout/useShippingStep';

const Shipping: FunctionComponent = () => {
    const NEXT_STEP_URL = CheckoutRoutes.payment.url;
    const { t } = useTranslation(['address', 'common']);
    const history = useHistory();

    const redirectToNext = useCallback(() => {
        history.push(NEXT_STEP_URL);
    }, [history, NEXT_STEP_URL]);

    const {
        submitAddress,
        submitCustomerAddress,
        isNextEnabled,
        isSignedIn,
        isSigningIn,
        isSubmitting,
        availableShippingMethods,
        selectedShippingMethod,
        handleShippingMethodSelect
    } = useShippingStep({
        setGuestEmailMutation: SET_GUEST_EMAIL_MUTATION,
        setShippingAddressesOnCartMutation: SET_SHIPPING_ADDRESSES_MUTATION,
        setShippingMethodOnCartMutation: SET_SHIPPING_METHOD_MUTATION
    });

    const handleNext = useCallback(() => {
        if (isNextEnabled) {
            redirectToNext();
        }
    }, [isNextEnabled, redirectToNext]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            {(isSubmitting || isSigningIn) && <LoadingIndicator />}
            <div className="mb-6" />
            <Row>
                <Col lg={8}>
                    <ul className="checkout-steps">
                        <li>
                            <h2 className="step-title">
                                {t('address:Shipping Address')}
                            </h2>
                            {isSignedIn ? (
                                <LoggedInUserForm
                                    submitAddress={submitCustomerAddress}
                                />
                            ) : (
                                <GuestForm onSubmit={submitAddress} />
                            )}
                        </li>
                        {availableShippingMethods.length > 0 && (
                            <li>
                                <div className="checkout-step-shipping">
                                    <h2 className="step-title">
                                        {t('address:Shipping Methods')}
                                    </h2>
                                    <ShippingMethods
                                        items={availableShippingMethods}
                                        selected={selectedShippingMethod}
                                        onSelect={handleShippingMethodSelect}
                                    />
                                </div>
                            </li>
                        )}
                    </ul>
                </Col>
                <Col lg={4}>
                    <ProductsSummary />
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <div className="checkout-steps-action">
                        <Button
                            className="btn btn-primary float-right"
                            disabled={!isNextEnabled}
                            onClick={handleNext}
                        >
                            {t('common:Next')}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Shipping;
