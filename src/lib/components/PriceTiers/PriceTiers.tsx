import React, { FunctionComponent } from 'react';
import { TPriceRange, TTierPrice } from 'src/lib/types/graphql/Product';
import TierRow from './TierRow';
import remapPriceTiers from 'src/lib/components/PriceTiers/remapPriceTiers';

type TPriceTiersProps = {
    priceTiers?: TTierPrice[];
    priceRange?: TPriceRange;
    isVisible?: boolean;
};

const PriceTiers: FunctionComponent<TPriceTiersProps> = ({
    priceTiers,
    priceRange,
    isVisible = true
}) => {
    if (!isVisible || !priceTiers || !priceTiers.length) {
        return null;
    }

    const items = remapPriceTiers({
        priceTiers,
        priceRange
    });

    if (!items.length) {
        return null;
    }

    return (
        <div className="mt-2">
            <h3>Price tiers</h3>
            <table className="table table-responsive table-hover lh-13">
                <thead>
                    <tr>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        const quantity =
                            index === items.length - 1
                                ? `${item.quantity}+`
                                : `${item.quantity}-${
                                      items[index + 1].quantity
                                  }`;

                        return (
                            <TierRow
                                key={`tier-${index}`}
                                item={item}
                                quantity={quantity}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTiers;
