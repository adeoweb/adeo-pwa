import React, { FunctionComponent } from 'react';

import Image from 'src/lib/components/Image';
import PriceBox from 'src/lib/components/PriceBox';
import AddToCart from 'src/lib/components/ProductItem/AddToCart';
import { Link } from 'src/lib/drivers';
import { TProduct } from 'src/lib/types/graphql/Product';
import getItemUrl from 'src/lib/util/getItemUrl';
import { useProductCompareContext } from 'src/peregrine/lib/context/adeoweb/productCompare';

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

    const { name, small_image: smallImage, price_range: priceRange } = product;
    const itemUrl = getItemUrl(product);
    const itemName = name || '';
    const imageLabel = (smallImage && smallImage.label) || '';
    const imageUrl = (smallImage && smallImage.url) || '';

    const handleRemoveProduct = () => {
        removeProduct(product);
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
                <a href="/" className="btn-icon-wish">
                    <i className="icon-heart" />
                </a>
            </div>
        </td>
    );
};

export default Product;
