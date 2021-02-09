/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type SignInMutationVariables = Types.Exact<{
    email: Types.Scalars['String'];
    password: Types.Scalars['String'];
}>;

export type SignInMutation = {
    generateCustomerToken?: Types.Maybe<{ token?: Types.Maybe<string> }>;
};
