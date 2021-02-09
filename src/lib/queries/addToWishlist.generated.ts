/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { WishlistFragment } from '../fragments/wishlist.generated';
export type AddToWishlistMutationVariables = Types.Exact<{
    productId: Types.Scalars['Int'];
    wishlistId: Types.Scalars['ID'];
}>;

export type AddToWishlistMutation = {
    wishlistAddItem?: Types.Maybe<WishlistFragment>;
};
