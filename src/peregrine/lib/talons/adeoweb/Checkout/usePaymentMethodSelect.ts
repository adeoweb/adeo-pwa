import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

import {
    TUsePaymentMethodSelect,
    TUsePaymentMethodSelectProps
} from './usePaymentMethodSelectTypes';

export const usePaymentMethodSelect = (
    props: TUsePaymentMethodSelectProps
): TUsePaymentMethodSelect => {
    const { setPaymentMethodOnCartMutation } = props;
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [setPaymentMethodOnCart] = useMutation(
        setPaymentMethodOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [{ isSubmitting }, { submitPaymentMethod }] = useCheckoutContext();

    const [
        {
            details: {
                available_payment_methods,
                selected_payment_method: selectedPaymentMethodOnCart
            }
        }
    ] = useCartContext();

    const availablePaymentMethods = filterOutNullableValues(
        available_payment_methods
    );

    const handlePaymentMethodSelect = useCallback(
        data => {
            if (
                data &&
                (selectedPaymentMethodOnCart || {}).code !== data.code
            ) {
                setSelectedPaymentMethod(data);
                submitPaymentMethod({
                    paymentMethod: data,
                    setPaymentMethodOnCart
                });
            }
        },
        [
            setSelectedPaymentMethod,
            selectedPaymentMethodOnCart,
            submitPaymentMethod,
            setPaymentMethodOnCart
        ]
    );

    const { code: selectedPaymentMethodCode } =
        selectedPaymentMethod || selectedPaymentMethodOnCart || {};

    return {
        isDisabled: isSubmitting,
        handlePaymentMethodSelect,
        availablePaymentMethods,
        selectedPaymentMethodCode
    };
};
