import React, { FunctionComponent } from 'react';

import { Price } from '@magento/peregrine';

import Image from 'src/lib/components/Image';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import getItemUrl from 'src/lib/util/getItemUrl';

type TProductRowProps = {
    item: TCartItem;
    currencyCode: string;
};

const ProductRow: FunctionComponent<TProductRowProps> = ({
    item,
    currencyCode
}) => {
    const {
        configurable_options: options,
        product: { small_image: smallImage, name = '' },
        quantity,
        prices
    } = item;
    const price = (prices && prices.price && prices.price.value) || 0;
    const subtotal =
        (prices && prices.row_total && prices.row_total.value) || 0;
    const image = (smallImage && smallImage.url) || '';
    const fullUrl = getItemUrl(item.product);

    return (
        <tr className="product-row">
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
                    {options && (
                        <ul className="mb-0">
                            {options.map((option, index) => {
                                if (!option) {
                                    return;
                                }
                                const {
                                    id,
                                    option_label: optionLabel,
                                    value_label: valueLabel
                                } = option;

                                return (
                                    <li key={`${id}-${index}`}>
                                        <div>
                                            {optionLabel}: {valueLabel}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </td>
            <td>
                <Price value={price} currencyCode={currencyCode} />
            </td>
            <td>{quantity}</td>
            <td>
                <Price value={subtotal} currencyCode={currencyCode} />
            </td>
        </tr>
    );
};

export default ProductRow;
