/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerAddressFragment } from '../fragments/customerAddress.generated';
export type CreateCustomerAddressMutationVariables = Types.Exact<{
    address: Types.CustomerAddressInput;
}>;

export type CreateCustomerAddressMutation = {
    createCustomerAddress?: Types.Maybe<CustomerAddressFragment>;
};
