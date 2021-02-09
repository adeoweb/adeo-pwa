/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type ApplyCouponToCartMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    couponCode: Types.Scalars['String'];
}>;

export type ApplyCouponToCartMutation = {
    applyCouponToCart?: Types.Maybe<{ cart: CartDetailsFragment }>;
};
