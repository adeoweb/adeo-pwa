/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type SetGuestEmailOnCartMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    email: Types.Scalars['String'];
}>;

export type SetGuestEmailOnCartMutation = {
    setGuestEmailOnCart?: Types.Maybe<{ cart: { __typename: 'Cart' } }>;
};
