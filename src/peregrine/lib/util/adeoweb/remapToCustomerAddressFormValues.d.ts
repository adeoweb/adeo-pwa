import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCustomerAddress } from 'src/lib/types/graphql/Customer';

export default function remapToCustomerAddressFormValues(
    address: TCustomerAddress
): TCustomerAddressFormValues;
