import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import isObjectEmpty from '@magento/peregrine/lib/util/isObjectEmpty';
import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useShippingStep = props => {
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
        shippingAddresses && shippingAddresses.length > 0
            ? shippingAddresses[0]
            : {};
    const {
        available_shipping_methods: availableShippingMethods = [],
        selected_shipping_method: selectedShippingMethod
    } = shippingAddress;
    const [
        { isSubmitting },
        { submitShippingMethod, submitShippingAddress }
    ] = useCheckoutContext();

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
        !isObjectEmpty(shippingAddress) &&
        availableShippingMethods &&
        availableShippingMethods.length > 0 &&
        selectedShippingMethod &&
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
