import { DocumentNode } from 'graphql';
import { TWishlistItem } from 'src/lib/types/graphql/Customer';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseWishlistItemProps = {
    addToWishlistMutation: DocumentNode;
    removeFromWishlistMutation: DocumentNode;
    product: TProduct;
};

type TUseWishlistItem = {
    handleAddToWishlist: () => void;
    handleRemoveFromWishlist: () => void;
    items: TWishlistItem[];
    isInWishlist: boolean;
    isSignedIn: boolean;
};

export function useWishlistItem(props: TUseWishlistItemProps): TUseWishlistItem;
