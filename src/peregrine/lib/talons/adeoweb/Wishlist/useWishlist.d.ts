import { TWishlistItem } from 'src/lib/types/graphql/Customer';

type TUseWishlist = {
    items: TWishlistItem[];
    addToWishlistError: string | null;
    isAddingToWishlist: boolean;
    removeFromWishlistError: string | null;
    isRemovingFromWishlist: boolean;
};

export function useWishlist(): TUseWishlist;
