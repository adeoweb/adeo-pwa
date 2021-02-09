/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type SetBillingAddressMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    billingAddress: Types.BillingAddressInput;
}>;

export type SetBillingAddressMutation = {
    setBillingAddressOnCart?: Types.Maybe<{ cart: CartDetailsFragment }>;
};
