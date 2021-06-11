import {
    TBillingCartAddress,
    TCartAddressInput,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';

export default function getTransformedAddress(
    address: Partial<TBillingCartAddress | TShippingCartAddress>
): TCartAddressInput;
