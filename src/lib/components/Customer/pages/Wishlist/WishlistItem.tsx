import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { AddToCompare } from 'src/lib/components/Compare';
import Image from 'src/lib/components/Image';
import PriceBox from 'src/lib/components/PriceBox';
import AddToCart from 'src/lib/components/ProductItem/AddToCart';
import ProductTitle from 'src/lib/components/ProductItem/ProductTitle';
import { Link } from 'src/lib/drivers';
import ADD_TO_WISHLIST_MUTATION from 'src/lib/queries/addToWishlist.graphql';
import REMOVE_FROM_WISHLIST_MUTATION from 'src/lib/queries/removeFromWishlist.graphql';
import { TProduct } from 'src/lib/types/graphql/Product';
import getItemUrl from 'src/lib/util/getItemUrl';
import { useWishlistItem } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlistItem';

type TWishlistItemProps = {
    product: TProduct;
};

const WishlistItem: FunctionComponent<TWishlistItemProps> = ({ product }) => {
    const { t } = useTranslation();
    const { handleRemoveFromWishlist } = useWishlistItem({
        product,
        addToWishlistMutation: ADD_TO_WISHLIST_MUTATION,
        removeFromWishlistMutation: REMOVE_FROM_WISHLIST_MUTATION
    });
    const { name, small_image: smallImage, price_range: priceRange } = product;
    const itemUrl = getItemUrl(product);
    const itemName = name || '';
    let imageLabel = '';
    let imageUrl;

    if (smallImage) {
        if (smallImage.label) {
            imageLabel = smallImage.label;
        }
        if (smallImage.url) {
            imageUrl = smallImage.url;
        }
    }

    return (
        <div className="col-sm-12 product-default left-details product-list mb-4">
            <figure>
                <Link to={itemUrl}>
                    <Image
                        resource={'small_image'}
                        alt={imageLabel}
                        src={imageUrl}
                    />
                </Link>
            </figure>
            <div className="product-details">
                <ProductTitle name={itemName} itemUrl={itemUrl} />
                <PriceBox priceRange={priceRange} />
                <div className="product-action">
                    <AddToCart product={product} />
                    <button
                        className="paction btn-icon-wish"
                        title={t('Remove from Wishlist')}
                        onClick={handleRemoveFromWishlist}
                    >
                        <i className="icon-heart-1" />
                    </button>
                    <AddToCompare product={product} />
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
