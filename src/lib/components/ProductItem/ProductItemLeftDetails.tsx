import React, { Fragment, FunctionComponent } from 'react';

import Image from 'src/lib/components/Image';
import PriceBox from 'src/lib/components/PriceBox';
import { Link } from 'src/lib/drivers';
import { TProduct } from 'src/lib/types/graphql/Product';
import getItemUrl from 'src/lib/util/getItemUrl';

import ProductTitle from './ProductTitle';

interface IProductItemLeftDetailsProps {
    product: TProduct;
}

const ProductItemLeftDetails: FunctionComponent<IProductItemLeftDetailsProps> =
    ({ product }) => {
        const {
            name,
            small_image: smallImage,
            price_range: priceRange
        } = product;
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
            <Fragment>
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
                </div>
            </Fragment>
        );
    };

export default ProductItemLeftDetails;
