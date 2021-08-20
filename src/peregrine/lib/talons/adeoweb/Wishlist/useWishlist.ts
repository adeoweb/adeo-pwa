import { TWishlistItem } from 'src/lib/types/graphql/Customer';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseWishlist = {
    items: TWishlistItem[];
    addToWishlistError: string | null;
    isAddingToWishlist: boolean;
    removeFromWishlistError: string | null;
    isRemovingFromWishlist: boolean;
};

export const useWishlist = (): TUseWishlist => {
    const [
        {
            currentUser: {
                wishlist: { items = [] }
            },
            addToWishlistError,
            isAddingToWishlist,
            removeFromWishlistError,
            isRemovingFromWishlist
        }
    ] = useUserContext();

    const wishListItems = filterOutNullableValues(items);

    return {
        items: wishListItems,
        addToWishlistError,
        isAddingToWishlist,
        removeFromWishlistError,
        isRemovingFromWishlist
    };
};
