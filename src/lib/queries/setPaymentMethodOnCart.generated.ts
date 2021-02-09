/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type SetPaymentMethodMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    paymentMethod: Types.PaymentMethodInput;
}>;

export type SetPaymentMethodMutation = {
    setPaymentMethodOnCart?: Types.Maybe<{ cart: CartDetailsFragment }>;
};
