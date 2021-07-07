import React, { FunctionComponent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import Image from 'src/lib/components/Image';
import RichText from 'src/lib/components/RichText';
import { Link } from 'src/lib/drivers';
import { TProductSearch } from 'src/lib/types/ProductSearch';
import getItemUrl from 'src/lib/util/getItemUrl';

export type TSuggestedProductProps = {
    onNavigate: () => void;
} & TProductSearch;

const IMAGE_WIDTH = 60;

const SuggestedProduct: FunctionComponent<TSuggestedProductProps> = product => {
    const { t } = useTranslation('product');
    const {
        small_image: smallImage,
        name,
        onNavigate,
        price_range: priceRange,
        short_description: shortDescription
    } = product;

    const handleClick = useCallback(() => {
        if (typeof onNavigate === 'function') {
            onNavigate();
        }
    }, [onNavigate]);

    const imageResource =
        smallImage && smallImage.url ? smallImage.url : undefined;

    const uri = getItemUrl(product);

    let price: React.ReactNode | null = null;
    if (
        priceRange?.maximum_price?.final_price?.currency &&
        priceRange?.maximum_price?.final_price?.value
    ) {
        const { currency, value } = priceRange.maximum_price.final_price;
        price = <Price currencyCode={currency} value={value} />;
    }

    return (
        <Link to={uri} onClick={handleClick}>
            <div className="suggestion-left">
                <Image
                    alt={name || ''}
                    resource={imageResource}
                    width={IMAGE_WIDTH}
                />
            </div>
            <div className="suggestion-right">
                <div className="product-line product-name">{name}</div>
                <div className="product-line product-price">
                    {t('Price')}: {price}
                </div>
                <div className="product-des">
                    <p className="short-des">
                        {shortDescription && shortDescription.html && (
                            <RichText content={shortDescription.html} />
                        )}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SuggestedProduct;
