/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type ChangePasswordMutationVariables = Types.Exact<{
    currentPassword: Types.Scalars['String'];
    newPassword: Types.Scalars['String'];
}>;

export type ChangePasswordMutation = {
    changeCustomerPassword?: Types.Maybe<{ email?: Types.Maybe<string> }>;
};
