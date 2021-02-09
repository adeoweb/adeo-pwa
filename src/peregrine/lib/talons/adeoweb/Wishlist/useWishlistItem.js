import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import MessageType from 'src/lib/constants/message';

export const useWishlistItem = ({
    product,
    addToWishlistMutation,
    removeFromWishlistMutation
}) => {
    const { t } = useTranslation();

    const [, { addMessage }] = useMessageCardContext();

    const [
        {
            currentUser: {
                wishlist: { items = [] }
            },
            isSignedIn
        },
        { addToWishlist, removeFromWishlist }
    ] = useUserContext();
    const wishlistItem = items.find(item => item.product.id === product.id);
    const [addToWishlistQuery] = useMutation(addToWishlistMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [removeFromWishlistQuery] = useMutation(removeFromWishlistMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    const productName = product.name;

    const addToWishlistSuccessCallback = useCallback(() => {
        addMessage({
            type: MessageType.SUCCESS,
            message: `${t('Product')} ${productName} ${t(
                'added to wish list'
            )}.`
        });
    }, [productName, t, addMessage]);

    const removeFromWishlistSuccessCallback = useCallback(() => {
        addMessage({
            type: MessageType.SUCCESS,
            message: `${t('Product')} ${productName} ${t(
                'removed from wish list'
            )}.`
        });
    }, [productName, t, addMessage]);

    const wishListActionErrorCallback = useCallback(
        errorMessage => {
            addMessage({
                type: MessageType.ERROR,
                message: errorMessage
            });
        },
        [addMessage]
    );

    const handleAddToWishlist = useCallback(async () => {
        await addToWishlist({
            productId: product.id,
            addToWishlistQuery,
            successCallback: addToWishlistSuccessCallback,
            errorCallback: wishListActionErrorCallback
        });
    }, [
        addToWishlist,
        addToWishlistQuery,
        product.id,
        addToWishlistSuccessCallback,
        wishListActionErrorCallback
    ]);

    const handleRemoveFromWishlist = useCallback(async () => {
        await removeFromWishlist({
            productId: product.id,
            removeFromWishlistQuery,
            successCallback: removeFromWishlistSuccessCallback,
            errorCallback: wishListActionErrorCallback
        });
    }, [
        removeFromWishlist,
        removeFromWishlistQuery,
        product.id,
        removeFromWishlistSuccessCallback,
        wishListActionErrorCallback
    ]);

    const isInWishlist = Boolean(wishlistItem);

    return {
        handleAddToWishlist,
        handleRemoveFromWishlist,
        items,
        isInWishlist,
        isSignedIn
    };
};
