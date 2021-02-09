/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type SetShippingAddressesMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    addresses:
        | Array<Types.Maybe<Types.ShippingAddressInput>>
        | Types.Maybe<Types.ShippingAddressInput>;
}>;

export type SetShippingAddressesMutation = {
    setShippingAddressesOnCart?: Types.Maybe<{ cart: CartDetailsFragment }>;
};
