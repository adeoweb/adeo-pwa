import React, { FunctionComponent } from 'react';

import { Price } from '@magento/peregrine';

import Image from 'src/lib/components/Image';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import getItemUrl from 'src/lib/util/getItemUrl';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TProductRowProps = {
    item: TCartItem;
    currencyCode: string;
};

const ProductRow: FunctionComponent<TProductRowProps> = ({
    item,
    currencyCode
}) => {
    const {
        configurable_options,
        product: { small_image: smallImage, name = '' },
        quantity,
        prices
    } = item;
    const subtotal =
        (prices && prices.row_total && prices.row_total.value) || 0;
    const image = (smallImage && smallImage.url) || '';
    const fullUrl = getItemUrl(item.product);
    const options = filterOutNullableValues(configurable_options);

    return (
        <tr>
            <td className="product-col">
                <figure className="product-image-container">
                    <Link to={fullUrl} className="product-image">
                        <Image src={image} alt={name} />
                    </Link>
                </figure>
                <div>
                    <h2 className="product-title">
                        <Link to={fullUrl}>{name}</Link>
                    </h2>
                    {Boolean(options.length) && (
                        <ul className="mb-0">
                            {options.map(
                                ({
                                    id,
                                    option_label: optionLabel,
                                    value_label: valueLabel
                                }) => (
                                    <li key={id}>
                                        <div>
                                            {optionLabel}: {valueLabel}
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                    <span className="product-qty">Qty: {quantity}</span>
                </div>
            </td>
            <td className="price-col">
                <Price value={subtotal} currencyCode={currencyCode} />
            </td>
        </tr>
    );
};

export default ProductRow;
