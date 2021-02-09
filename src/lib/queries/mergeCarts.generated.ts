/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CartDetailsFragment } from '../fragments/cartDetails.generated';
export type MergeCartsMutationVariables = Types.Exact<{
    sourceCartId: Types.Scalars['String'];
    destinationCartId: Types.Scalars['String'];
}>;

export type MergeCartsMutation = { mergeCarts: CartDetailsFragment };
