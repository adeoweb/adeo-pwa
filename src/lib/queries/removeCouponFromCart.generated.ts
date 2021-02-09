/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type RemoveCouponFromCartMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
}>;

export type RemoveCouponFromCartMutation = {
    removeCouponFromCart?: Types.Maybe<{
        cart?: Types.Maybe<CartDetailsFragment>;
    }>;
};
