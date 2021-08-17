import React, { FunctionComponent } from 'react';

import Image from 'src/lib/components/Image';
import PriceBox from 'src/lib/components/PriceBox';
import AddToCart from 'src/lib/components/ProductItem/AddToCart';
import { CustomerModalTypes } from 'src/lib/constants/customer';
import { Link } from 'src/lib/drivers';
import { TProduct } from 'src/lib/types/graphql/Product';
import getItemUrl from 'src/lib/util/getItemUrl';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

import AddToWishlist from '../AddToWishlist';

interface IProductProps {
    product: TProduct;
    columnStyle: {
        width: string;
    };
}

const Product: FunctionComponent<IProductProps> = ({
    product,
    columnStyle
}) => {
    const [, { removeProduct }] = useProductCompareContext();
    const [, { setCustomerModal }] = useAppContext();

    const { name, small_image: smallImage, price_range: priceRange } = product;
    const itemUrl = getItemUrl(product);
    const itemName = name || '';
    const imageLabel = (smallImage && smallImage.label) || '';
    const imageUrl = (smallImage && smallImage.url) || '';

    const handleRemoveProduct = () => {
        removeProduct(product);
    };
    const handleNotLoggedIn = () => {
        setCustomerModal(CustomerModalTypes.LOG_IN);
    };

    return (
        <td data-th="Product" className="cell product info" style={columnStyle}>
            <button
                className="btn-remove btn btn-link"
                title="Remove Product"
                onClick={handleRemoveProduct}
            >
                <i className="icon-cancel" />
            </button>
            <figure className="product-item-photo">
                <Link to={itemUrl}>
                    <Image
                        resource={'small_image'}
                        alt={imageLabel}
                        src={imageUrl}
                    />
                </Link>
            </figure>
            <h2 className="product-item-name">
                <Link to={itemUrl} title={itemName}>
                    {itemName}
                </Link>
            </h2>
            <PriceBox priceRange={priceRange} />
            <div className="product-item-actions">
                <AddToCart product={product} />
                <AddToWishlist
                    product={product}
                    handleNotLoggedIn={handleNotLoggedIn}
                />
            </div>
        </td>
    );
};

export default Product;
