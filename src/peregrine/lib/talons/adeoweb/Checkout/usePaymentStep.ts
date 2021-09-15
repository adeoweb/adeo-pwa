import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { TBillingAddressInput } from 'src/lib/types/graphql/Cart';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useBillingAddressForm } from 'src/peregrine/lib/talons/adeoweb/Checkout/useBillingAddressForm';
import {
    getTransformedAddress,
    isBillingAndShippingEqual
} from 'src/peregrine/lib/talons/adeoweb/Checkout/utils';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

import { TUsePaymentStep, TUsePaymentStepProps } from './usePaymentStepTypes';

export const usePaymentStep = (
    props: TUsePaymentStepProps
): TUsePaymentStep => {
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
        address => address?.default_billing
    );

    const customerAddressIdOnCart =
        billingAddress && billingAddress.customer_address_id;

    const [selectedAddressId, setSelectedAddressId] = useState(
        customerAddressIdOnCart ||
            (defaultBillingAddress && defaultBillingAddress.id) ||
            null
    );

    const selectedShippingMethod = shippingAddress?.selected_shipping_method;

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
        const billingAddress: TBillingAddressInput = {};
        if (isSameAsShipping) {
            billingAddress.address = getTransformedAddress(shippingAddress);
        } else {
            if (isSignedIn) {
                billingAddress.customer_address_id =
                    selectedAddressId ?? undefined;
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
        Boolean(shippingAddressError) ||
        !selectedShippingMethod ||
        Boolean(shippingMethodError);

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
