/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type SetShippingMethodMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    carrierCode: Types.Scalars['String'];
    methodCode: Types.Scalars['String'];
}>;

export type SetShippingMethodMutation = {
    setShippingMethodsOnCart?: Types.Maybe<{ cart: CartDetailsFragment }>;
};
