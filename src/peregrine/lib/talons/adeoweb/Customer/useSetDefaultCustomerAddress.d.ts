import { DocumentNode } from 'graphql';

type TUseSetDefaultCustomerAddressProps = {
    updateCustomerAddressMutation: DocumentNode;
    getCustomerQuery: DocumentNode;
    shipping?: boolean;
    billing?: boolean;
};

type TUseSetDefaultCustomerAddress = {
    isUpdatingAddress: boolean;
    setCustomerDefaultAddress: (id: number) => void;
};

export function useSetDefaultCustomerAddress(
    props: TUseSetDefaultCustomerAddressProps
): TUseSetDefaultCustomerAddress;
