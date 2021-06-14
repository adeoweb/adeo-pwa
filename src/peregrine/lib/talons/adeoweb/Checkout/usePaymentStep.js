import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useBillingAddressForm } from 'src/peregrine/lib/talons/adeoweb/Checkout/useBillingAddressForm';
import {
    getTransformedAddress,
    isBillingAndShippingEqual
} from 'src/peregrine/lib/talons/adeoweb/Checkout/utils';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const usePaymentStep = props => {
    const {
        countriesQuery,
        setBillingAddressOnCartMutation,
        handleSubmitCallback
    } = props;
    const [setBillingAddressOnCart] = useMutation(
        setBillingAddressOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [
        { isSubmitting, shippingAddressError, shippingMethodError },
        { submitBillingAddress }
    ] = useCheckoutContext();

    const [
        {
            details: {
                available_payment_methods: availablePaymentMethods = [],
                billing_address: billingAddress,
                selected_payment_method: selectedPaymentMethodOnCart,
                shipping_addresses: [shippingAddress]
            }
        }
    ] = useCartContext();
    const [
        {
            isSignedIn,
            currentUser: { addresses = [] }
        }
    ] = useUserContext();
    const [isSameAsShipping, setIsSameAsShipping] = useState(
        isBillingAndShippingEqual(shippingAddress, billingAddress)
    );
    const defaultBillingAddress = addresses.find(
        ({ default_billing: defaultBilling }) => defaultBilling
    );

    const customerAddressIdOnCart =
        billingAddress && billingAddress.customer_address_id;

    const [selectedAddressId, setSelectedAddressId] = useState(
        customerAddressIdOnCart ||
            (defaultBillingAddress && defaultBillingAddress.id) ||
            null
    );

    const { selected_shipping_method: selectedShippingMethod } =
        shippingAddress || {};

    const initialValues = getTransformedAddress(billingAddress || {});

    const {
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid
    } = useBillingAddressForm({
        countriesQuery,
        initialValues
    });

    const handleSameAsShippingChange = e => {
        setIsSameAsShipping(Boolean(e.target.checked));
    };

    const handleSubmit = useCallback(() => {
        const billingAddress = {};
        if (isSameAsShipping) {
            billingAddress.address = getTransformedAddress(shippingAddress);
        } else {
            if (isSignedIn) {
                billingAddress.customer_address_id = selectedAddressId;
            } else {
                billingAddress.address = values;
            }
        }

        submitBillingAddress({
            billingAddress,
            setBillingAddressOnCart
        }).then(handleSubmitCallback);
    }, [
        values,
        isSameAsShipping,
        shippingAddress,
        submitBillingAddress,
        setBillingAddressOnCart,
        handleSubmitCallback,
        selectedAddressId,
        isSignedIn
    ]);

    const onCustomerAddressSelect = useCallback(
        id => {
            if (id) {
                setSelectedAddressId(id);
            }
        },
        [setSelectedAddressId]
    );

    const { code: selectedPaymentMethodCode } =
        selectedPaymentMethodOnCart || {};

    const isSubmitEnabled =
        (isSameAsShipping
            ? Boolean(shippingAddress)
            : isSignedIn
            ? Boolean(selectedAddressId)
            : isValid) && Boolean(selectedPaymentMethodCode);

    const isRedirectToPrev =
        !availablePaymentMethods.length ||
        !shippingAddress ||
        shippingAddressError ||
        !selectedShippingMethod ||
        shippingMethodError;

    return {
        handleChange,
        handleBlur,
        handleSameAsShippingChange,
        handleSubmit,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid,
        isSubmitting,
        isSameAsShipping,
        isSubmitEnabled,
        isRedirectToPrev,
        isSignedIn,
        shippingAddress,
        selectedShippingMethod,
        selectedCustomerAddressId: selectedAddressId,
        onCustomerAddressSelect
    };
};
