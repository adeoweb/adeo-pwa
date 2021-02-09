import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TProduct } from 'src/lib/types/graphql/Product';
import ADD_TO_WISHLIST_MUTATION from 'src/lib/queries/addToWishlist.graphql';
import REMOVE_FROM_WISHLIST_MUTATION from 'src/lib/queries/removeFromWishlist.graphql';
import { useWishlistItem } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlistItem';

type TAddToWishlistProps = {
    product: TProduct;
    handleNotLoggedIn: () => void;
};

const AddToWishlist: FunctionComponent<TAddToWishlistProps> = ({
    product,
    handleNotLoggedIn
}) => {
    const { t } = useTranslation();
    const {
        handleAddToWishlist,
        handleRemoveFromWishlist,
        isInWishlist,
        isSignedIn
    } = useWishlistItem({
        product,
        addToWishlistMutation: ADD_TO_WISHLIST_MUTATION,
        removeFromWishlistMutation: REMOVE_FROM_WISHLIST_MUTATION
    });
    const title = isInWishlist
        ? t('Remove from Wishlist')
        : t('Add to Wishlist');
    const iconClass = isInWishlist ? 'icon-heart-1' : 'icon-heart';

    const onButtonClick = useCallback(() => {
        if (isSignedIn) {
            if (isInWishlist) {
                handleRemoveFromWishlist();
            } else {
                handleAddToWishlist();
            }
        } else {
            handleNotLoggedIn();
        }
    }, [
        isSignedIn,
        isInWishlist,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        handleNotLoggedIn
    ]);

    return (
        <button
            className="paction btn-icon-wish"
            title={title}
            onClick={onButtonClick}
        >
            <i className={iconClass} />
        </button>
    );
};

export default AddToWishlist;
