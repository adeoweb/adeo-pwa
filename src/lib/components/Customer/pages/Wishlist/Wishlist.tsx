import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Row } from 'react-bootstrap';
import { useWishlist } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlist';
import WishlistItem from 'src/lib/components/Customer/pages/Wishlist/WishlistItem';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import MessageType from 'src/lib/constants/message';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';

const Wishlist: FunctionComponent = () => {
    const { t } = useTranslation();
    const { addMessage, clearAllMessages } = useMessageCard();
    const {
        items,
        isAddingToWishlist,
        addToWishlistError,
        isRemovingFromWishlist,
        removeFromWishlistError
    } = useWishlist();

    useEffect(() => {
        if (addToWishlistError || removeFromWishlistError) {
            clearAllMessages();
            addMessage({
                type: MessageType.ERROR,
                message: String(addToWishlistError || removeFromWishlistError)
            });
        }
    }, [
        addMessage,
        clearAllMessages,
        addToWishlistError,
        removeFromWishlistError
    ]);

    return (
        <Fragment>
            {(isAddingToWishlist || isRemovingFromWishlist) && (
                <LoadingIndicator />
            )}
            <Row className="product-intro row-sm">
                {items.length ? (
                    items.map(item => (
                        <WishlistItem key={item.id} product={item.product} />
                    ))
                ) : (
                    <p className="text-center">
                        {t('No items in the wishlist')}
                    </p>
                )}
            </Row>
        </Fragment>
    );
};

export default Wishlist;
