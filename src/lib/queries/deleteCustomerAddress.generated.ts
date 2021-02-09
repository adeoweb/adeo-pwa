/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type DeleteCustomerAddressMutationVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;

export type DeleteCustomerAddressMutation = {
    deleteCustomerAddress?: Types.Maybe<boolean>;
};
