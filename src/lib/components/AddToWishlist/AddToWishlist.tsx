import classNames from 'classnames';

import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ADD_TO_WISHLIST_MUTATION from 'src/lib/queries/addToWishlist.graphql';
import REMOVE_FROM_WISHLIST_MUTATION from 'src/lib/queries/removeFromWishlist.graphql';
import { TProduct } from 'src/lib/types/graphql/Product';
import { useWishlistItem } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlistItem';

type TAddToWishlistProps = {
    product: TProduct;
    handleNotLoggedIn: () => void;
    isProductAction?: boolean;
};

const AddToWishlist: FunctionComponent<TAddToWishlistProps> = ({
    product,
    handleNotLoggedIn,
    isProductAction
}) => {
    const { t } = useTranslation('product');
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
            className={classNames('btn-icon-wish', {
                paction: isProductAction
            })}
            title={title}
            onClick={onButtonClick}
        >
            <i className={iconClass} />
        </button>
    );
};

export default AddToWishlist;
