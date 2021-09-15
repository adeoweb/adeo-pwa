import isEmpty from 'lodash.isempty';

import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

import {
    TUseShippingStep,
    TUseShippingStepProps
} from './useShippingStepTypes';

export const useShippingStep = (
    props: TUseShippingStepProps
): TUseShippingStep => {
    const {
        setGuestEmailMutation,
        setShippingAddressesOnCartMutation,
        setShippingMethodOnCartMutation
    } = props;

    const [setShippingMethodOnCart] = useMutation(
        setShippingMethodOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [setGuestEmail] = useMutation(setGuestEmailMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [setShippingAddressesOnCart] = useMutation(
        setShippingAddressesOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [{ isSignedIn, isSigningIn }] = useUserContext();
    const [
        {
            details: { shipping_addresses: shippingAddresses, items = [] }
        }
    ] = useCartContext();

    const shippingAddress =
        shippingAddresses && shippingAddresses?.[0] && shippingAddresses[0];

    const selectedShippingMethod = shippingAddress?.selected_shipping_method;
    const availableShippingMethods = filterOutNullableValues(
        shippingAddress?.available_shipping_methods
    );

    const [{ isSubmitting }, { submitShippingMethod, submitShippingAddress }] =
        useCheckoutContext();

    const submitCustomerAddress = useCallback(
        id => {
            submitShippingAddress({
                customerAddressId: id,
                setGuestEmail,
                setShippingAddressesOnCart
            });
        },
        [submitShippingAddress, setGuestEmail, setShippingAddressesOnCart]
    );

    const submitAddress = useCallback(
        values => {
            submitShippingAddress({
                formValues: values,
                setGuestEmail,
                setShippingAddressesOnCart
            });
        },
        [submitShippingAddress, setGuestEmail, setShippingAddressesOnCart]
    );

    const handleShippingMethodSelect = useCallback(
        item => {
            submitShippingMethod({
                shippingMethod: item,
                setShippingMethodOnCart
            });
        },
        [submitShippingMethod, setShippingMethodOnCart]
    );

    const isNextEnabled =
        items.length > 0 &&
        !isEmpty(shippingAddress) &&
        Boolean(availableShippingMethods) &&
        availableShippingMethods.length > 0 &&
        Boolean(selectedShippingMethod) &&
        !isSubmitting;

    return {
        submitAddress,
        submitCustomerAddress,
        isSignedIn,
        isSigningIn,
        isSubmitting,
        isNextEnabled,
        availableShippingMethods,
        selectedShippingMethod,
        handleShippingMethodSelect
    };
};
