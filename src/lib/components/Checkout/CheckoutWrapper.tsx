import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import CheckoutProgressBar from '../CheckoutProgressBar';
import { CheckoutRoutes } from './CheckoutRoutes';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import { useCheckout } from 'src/peregrine/lib/talons/adeoweb/Checkout/useCheckout';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import SET_SHIPPING_ADDRESSES_MUTATION from 'src/lib/queries/setShippingAddresses.graphql';

const CheckoutWrapper: FunctionComponent = ({ children }) => {
    const { t } = useTranslation();
    const steps = [
        {
            title: t('Shipping'),
            route: CheckoutRoutes.shipping
        },
        {
            title: t('Payment'),
            route: CheckoutRoutes.payment
        },
        {
            title: t('Review'),
            route: CheckoutRoutes.review
        }
    ];

    const { isLoading, isLoaded, error } = useCheckout({
        createCartMutation: CREATE_CART_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        setShippingAddressesOnCartMutation: SET_SHIPPING_ADDRESSES_MUTATION
    });

    let content: ReactNode = <LoadingIndicator />;
    if (error) {
        content = <div>{error.message || 'An unknown error occurred'}</div>;
    } else if (!isLoading && isLoaded) {
        content = children;
    }

    return (
        <Container className="checkout-wrapper">
            <div className="mb-4" />
            <CheckoutProgressBar steps={steps} />
            {content}
            <div className="mb-6" />
        </Container>
    );
};

export default CheckoutWrapper;
