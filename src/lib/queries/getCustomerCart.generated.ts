/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type GetCustomerCartQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetCustomerCartQuery = { customerCart: CartDetailsFragment };
