import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useReviewStep = props => {
    const {
        placeOrderMutation,
        createCartMutation,
        getCartDetailsQuery
    } = props;
    const [
        {
            details: {
                shipping_addresses: shippingAddresses,
                billing_address: billingAddress,
                selected_payment_method: selectedPaymentMethod,
                items = [],
                prices
            },
            derivedDetails: { currencyCode }
        }
    ] = useCartContext();
    const shippingAddress =
        shippingAddresses && shippingAddresses.length > 0
            ? shippingAddresses[0]
            : undefined;
    const { selected_shipping_method: selectedShippingMethod } =
        shippingAddress || {};
    const [
        {
            isSubmitting,
            orderError,
            shippingAddressError,
            shippingMethodError,
            paymentMethodError,
            billingAddressError,
            receipt: {
                order: { order_number: orderNumber }
            }
        },
        { submitOrder, resetReceipt }
    ] = useCheckoutContext();
    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);
    const [placeOrder] = useMutation(placeOrderMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    const handlePlaceOrder = useCallback(() => {
        submitOrder({
            fetchCartId,
            fetchCartDetails,
            placeOrder
        });
    }, [submitOrder, fetchCartId, fetchCartDetails, placeOrder]);

    const isSubmitEnabled = !isSubmitting;

    const isRedirectToFirst = Boolean(
        !shippingAddress ||
            shippingAddressError ||
            !selectedShippingMethod ||
            shippingMethodError ||
            !selectedPaymentMethod ||
            !selectedPaymentMethod.code ||
            paymentMethodError ||
            !billingAddress ||
            billingAddressError
    );

    return {
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
        isRedirectToFirst,
        resetReceipt
    };
};
