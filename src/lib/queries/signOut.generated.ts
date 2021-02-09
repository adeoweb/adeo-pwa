/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type SignOutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type SignOutMutation = {
    revokeCustomerToken?: Types.Maybe<{ result: boolean }>;
};
