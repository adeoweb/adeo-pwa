import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCartTrigger = props => {
    const { createCartMutation, getCartDetailsQuery } = props;
    const [, { toggleDrawer }] = useAppContext();
    const [{ derivedDetails }, { getCartDetails }] = useCartContext();
    const { numItems: itemCount } = derivedDetails;

    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    useEffect(() => {
        getCartDetails({
            fetchCartId,
            fetchCartDetails
        });
    }, [fetchCartDetails, fetchCartId, getCartDetails]);

    const handleClick = useCallback(async () => {
        toggleDrawer({ name: 'cart' });
        await getCartDetails({
            fetchCartId,
            fetchCartDetails
        });
    }, [fetchCartDetails, fetchCartId, getCartDetails, toggleDrawer]);

    return {
        handleClick,
        itemCount
    };
};
