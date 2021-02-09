/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { WishlistFragment } from '../fragments/wishlist.generated';
export type RemoveFromWishlistMutationVariables = Types.Exact<{
    productId: Types.Scalars['Int'];
    wishlistId: Types.Scalars['ID'];
}>;

export type RemoveFromWishlistMutation = {
    wishlistRemoveItem?: Types.Maybe<WishlistFragment>;
};
