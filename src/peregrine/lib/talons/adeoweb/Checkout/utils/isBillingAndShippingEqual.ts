import {
    TBillingCartAddress,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';

import getTransformedAddress from './getTransformedAddress';

const isBillingAndShippingEqual = (
    shippingAddress: TShippingCartAddress | undefined,
    billingAddress: TBillingCartAddress | undefined
): boolean =>
    JSON.stringify(getTransformedAddress(shippingAddress || {})) ===
    JSON.stringify(getTransformedAddress(billingAddress || {}));

export default isBillingAndShippingEqual;
