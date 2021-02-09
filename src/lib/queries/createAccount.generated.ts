/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type CreateAccountMutationVariables = Types.Exact<{
    email: Types.Scalars['String'];
    firstname: Types.Scalars['String'];
    lastname: Types.Scalars['String'];
    password: Types.Scalars['String'];
    isSubscribed?: Types.Maybe<Types.Scalars['Boolean']>;
}>;

export type CreateAccountMutation = {
    createCustomer?: Types.Maybe<{ customer: { email?: Types.Maybe<string> } }>;
};
