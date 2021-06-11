import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';

import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useDeleteCustomerAddress = ({ deleteCustomerAddressMutation }) => {
    const [
        { isDeletingAddress },
        { deleteCustomerAddress: deleteCustomerAddressAction }
    ] = useUserContext();
    const [deleteCustomerAddressQuery] = useMutation(
        deleteCustomerAddressMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    const deleteCustomerAddress = useCallback(
        async id => {
            await deleteCustomerAddressAction({
                id,
                deleteCustomerAddress: deleteCustomerAddressQuery
            });
        },
        [deleteCustomerAddressAction, deleteCustomerAddressQuery]
    );

    return {
        isDeletingAddress,
        deleteCustomerAddress
    };
};
