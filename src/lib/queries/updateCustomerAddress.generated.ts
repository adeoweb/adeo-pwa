/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerAddressFragment } from '../fragments/customerAddress.generated';
export type UpdateCustomerAddressMutationVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    address: Types.CustomerAddressInput;
}>;

export type UpdateCustomerAddressMutation = {
    updateCustomerAddress?: Types.Maybe<CustomerAddressFragment>;
};
