/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerDetailsFragment } from '../fragments/customerDetails.generated';
export type UpdateCustomerMutationVariables = Types.Exact<{
    input: Types.CustomerInput;
}>;

export type UpdateCustomerMutation = {
    updateCustomer?: Types.Maybe<{ customer: CustomerDetailsFragment }>;
};
