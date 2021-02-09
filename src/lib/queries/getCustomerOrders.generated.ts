/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerOrderBasicInfoFragment } from '../fragments/customerOrderBasicInfo.generated';
export type GetCustomerOrdersQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetCustomerOrdersQuery = {
    customerOrders?: Types.Maybe<{
        items?: Types.Maybe<Array<Types.Maybe<CustomerOrderBasicInfoFragment>>>;
    }>;
};
