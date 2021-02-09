/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type PlaceOrderMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
}>;

export type PlaceOrderMutation = {
    placeOrder?: Types.Maybe<{ order: { order_number: string } }>;
};
