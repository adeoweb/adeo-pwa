import { TCustomerAddress } from 'src/lib/types/graphql/Customer';
import { TCustomerAddressFormValues } from 'src/lib/components/Customer';

export default function remapToCustomerAddressFormValues(
    address: TCustomerAddress
): TCustomerAddressFormValues;
