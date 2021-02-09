import { DocumentNode } from 'graphql';

type TUseDeleteCustomerAddressProps = {
    deleteCustomerAddressMutation: DocumentNode;
};

type TUseDeleteCustomerAddress = {
    isDeletingAddress: boolean;
    deleteCustomerAddress: (id: number) => void;
};

export function useDeleteCustomerAddress(
    props: TUseDeleteCustomerAddressProps
): TUseDeleteCustomerAddress;
