import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const usePaymentMethodSelect = props => {
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
                available_payment_methods: availablePaymentMethods = [],
                selected_payment_method: selectedPaymentMethodOnCart
            }
        }
    ] = useCartContext();

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
