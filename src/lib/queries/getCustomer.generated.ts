/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerDetailsFragment } from '../fragments/customerDetails.generated';
export type GetCustomerQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCustomerQuery = {
    customer?: Types.Maybe<CustomerDetailsFragment>;
};
