import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useSetDefaultCustomerAddress = ({
    updateCustomerAddressMutation,
    getCustomerQuery,
    shipping,
    billing
}) => {
    const [{ isUpdatingAddress }, { setDefaultAddress }] = useUserContext();
    const fetchUserDetails = useAwaitQuery(getCustomerQuery);
    const [updateCustomerAddressQuery] = useMutation(
        updateCustomerAddressMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    const setCustomerDefaultAddress = useCallback(
        async id => {
            await setDefaultAddress({
                id,
                fetchUserDetails,
                updateCustomerAddressQuery,
                shipping: Boolean(shipping),
                billing: Boolean(billing)
            });
        },
        [
            setDefaultAddress,
            fetchUserDetails,
            updateCustomerAddressQuery,
            shipping,
            billing
        ]
    );

    return {
        isUpdatingAddress,
        setCustomerDefaultAddress
    };
};
