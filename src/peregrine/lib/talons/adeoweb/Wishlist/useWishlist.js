import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

export const useWishlist = () => {
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

    return {
        items,
        addToWishlistError,
        isAddingToWishlist,
        removeFromWishlistError,
        isRemovingFromWishlist
    };
};
