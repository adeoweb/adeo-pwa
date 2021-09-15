import { DocumentNode, useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export type TUseCheckoutProps = {
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
};

export type TUseCheckout = {
    isLoading: boolean;
    isLoaded: boolean;
    error: Error | null;
};

export const useCheckout = (props: TUseCheckoutProps): TUseCheckout => {
    const {
        createCartMutation,
        getCartDetailsQuery,
        setShippingAddressesOnCartMutation
    } = props;
    const [{ isLoading, isLoaded, initError: error }, { initCheckout }] =
        useCheckoutContext();
    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);
    const [setShippingAddressesOnCart] = useMutation(
        setShippingAddressesOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    useEffect(() => {
        initCheckout({
            fetchCartId,
            fetchCartDetails,
            setShippingAddressesOnCart
        });
    }, [
        fetchCartDetails,
        fetchCartId,
        setShippingAddressesOnCart,
        initCheckout
    ]);

    return {
        isLoading,
        isLoaded,
        error
    };
};
