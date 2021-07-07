import React, { Fragment, FunctionComponent } from 'react';

import { Price } from '@magento/peregrine';

import { TPriceRange } from 'src/lib/types/graphql/Product';

type TPriceBoxProps = {
    priceRange: TPriceRange;
    additional?: number;
};

const PriceBox: FunctionComponent<TPriceBoxProps> = ({
    priceRange,
    additional = 0
}) => {
    if (
        !priceRange ||
        !priceRange.minimum_price ||
        !priceRange.minimum_price.final_price ||
        !priceRange.minimum_price.final_price.value ||
        !priceRange.minimum_price.final_price.currency ||
        !priceRange.minimum_price.regular_price ||
        !priceRange.minimum_price.regular_price.value ||
        !priceRange.minimum_price.regular_price.currency
    ) {
        return null;
    }

    const {
        minimum_price: {
            final_price: {
                value: minimumFinalPriceValue = 0,
                currency: minimumFinalPriceCurrency
            },
            regular_price: {
                value: minimumRegularPriceValue = 0,
                currency: minimumRegularPriceCurrency
            }
        }
    } = priceRange;

    const minimumDiscountAmountOff =
        (priceRange.minimum_price.discount &&
            priceRange.minimum_price.discount.amount_off) ||
        0;

    return (
        <div className="price-box">
            {minimumDiscountAmountOff !== 0 ? (
                <Fragment>
                    <span className="old-price">
                        <Price
                            currencyCode={minimumRegularPriceCurrency}
                            value={minimumRegularPriceValue + additional}
                        />
                    </span>
                    <span className="product-price">
                        <Price
                            currencyCode={minimumFinalPriceCurrency}
                            value={minimumFinalPriceValue + additional}
                        />
                    </span>
                </Fragment>
            ) : (
                <span className="product-price">
                    <Price
                        currencyCode={minimumFinalPriceCurrency}
                        value={minimumFinalPriceValue + additional}
                    />
                </span>
            )}
        </div>
    );
};

export default PriceBox;
