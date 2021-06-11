import React, {
    FunctionComponent,
    Fragment,
    useEffect,
    useCallback
} from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { useReviewStep } from 'src/peregrine/lib/talons/adeoweb/Checkout/useReviewStep';
import InfoBox from 'src/lib/components/Checkout/InfoBox';
import { CheckoutRoutes } from 'src/lib/components/Checkout';
import AddressBlock from 'src/lib/components/Checkout/Address';
import { PricingSummary } from 'src/lib/components/Checkout/Summary';
import { useHistory } from 'src/lib/drivers';
import ProductsTable from 'src/lib/components/Checkout/Review/ProductsTable';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import PLACE_ORDER_MUTATION from 'src/lib/queries/placeOrder.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import ApplyPromoWidget from 'src/lib/components/ApplyPromoWidget';

const Review: FunctionComponent = () => {
    const FIRST_STEP = CheckoutRoutes.shipping.url;
    const SUCCESS_PAGE_URL = CheckoutRoutes.success.url;
    const ERROR_PAGE_URL = CheckoutRoutes.failure.url;
    const { t } = useTranslation();
    const history = useHistory();

    const redirectToFirst = useCallback(() => {
        history.push(FIRST_STEP);
    }, [history, FIRST_STEP]);

    const redirectToSuccess = useCallback(() => {
        history.push(SUCCESS_PAGE_URL);
    }, [history, SUCCESS_PAGE_URL]);

    const redirectToFailure = useCallback(() => {
        history.push(ERROR_PAGE_URL);
    }, [history, ERROR_PAGE_URL]);

    const {
        handlePlaceOrder,
        shippingAddress,
        selectedShippingMethod,
        billingAddress,
        selectedPaymentMethod,
        items,
        prices,
        currencyCode,
        orderError,
        orderNumber,
        isSubmitEnabled,
        isRedirectToFirst
    } = useReviewStep({
        createCartMutation: CREATE_CART_MUTATION,
        placeOrderMutation: PLACE_ORDER_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (isRedirectToFirst) {
            redirectToFirst();
        }
    }, [isRedirectToFirst, redirectToFirst]);

    useEffect(() => {
        if (orderError) {
            redirectToFailure();
        }
    }, [orderError, redirectToFailure]);

    useEffect(() => {
        if (orderNumber) {
            redirectToSuccess();
        }
    }, [orderNumber, redirectToSuccess]);

    return (
        <Fragment>
            <Row>
                <Col lg={4}>
                    {prices && selectedShippingMethod && (
                        <PricingSummary
                            prices={prices}
                            shippingMethod={selectedShippingMethod}
                            currencyCode={currencyCode}
                            isPlaceOrderEnabled={isSubmitEnabled}
                            onPlaceOrder={handlePlaceOrder}
                        />
                    )}
                </Col>
                <Col lg={8} className="order-lg-first">
                    <Row>
                        <Col lg={6}>
                            {shippingAddress && (
                                <InfoBox
                                    title={t('Ship To:')}
                                    editRoute={CheckoutRoutes.shipping.url}
                                >
                                    <AddressBlock address={shippingAddress} />
                                </InfoBox>
                            )}
                            {selectedShippingMethod &&
                                selectedShippingMethod.carrier_title &&
                                selectedShippingMethod.method_title && (
                                    <InfoBox
                                        title={t('Shipping Method:')}
                                        editRoute={CheckoutRoutes.shipping.url}
                                    >
                                        <p>
                                            {t(
                                                `${selectedShippingMethod.carrier_title} - ${selectedShippingMethod.method_title}`
                                            )}
                                        </p>
                                    </InfoBox>
                                )}
                        </Col>
                        <Col lg={6}>
                            {billingAddress && (
                                <InfoBox
                                    title={t('Bill To:')}
                                    editRoute={CheckoutRoutes.payment.url}
                                >
                                    <AddressBlock address={billingAddress} />
                                </InfoBox>
                            )}
                            {selectedPaymentMethod &&
                                selectedPaymentMethod.title && (
                                    <InfoBox
                                        title={t('Payment Method:')}
                                        editRoute={CheckoutRoutes.payment.url}
                                    >
                                        <p>{t(selectedPaymentMethod.title)}</p>
                                    </InfoBox>
                                )}
                        </Col>
                    </Row>
                    {items && Boolean(items.length) && (
                        <ProductsTable
                            items={items}
                            currencyCode={currencyCode}
                        />
                    )}
                    <ApplyPromoWidget />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Review;
