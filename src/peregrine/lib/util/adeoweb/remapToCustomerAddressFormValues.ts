import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCustomerAddress } from 'src/lib/types/graphql/Customer';

const remapToCustomerAddressFormValues = (
    address: Partial<TCustomerAddress> | undefined
): TCustomerAddressFormValues => ({
    firstname: address?.firstname ?? '',
    lastname: address?.lastname ?? '',
    company: address?.company ?? '',
    // @ts-expect-error
    street: address?.street ?? ['', ''],
    city: address?.city ?? '',
    postcode: address?.postcode ?? '',
    telephone: address?.telephone ?? '',
    region:
        address?.region && address?.region.region_code
            ? address?.region.region_code
            : '',
    country_code: address?.country_code ?? '',
    default_billing: address?.default_billing ?? false,
    default_shipping: address?.default_shipping ?? false
});

export default remapToCustomerAddressFormValues;
