/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type GetCartDetailsQueryVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
}>;

export type GetCartDetailsQuery = { cart?: Types.Maybe<CartDetailsFragment> };
