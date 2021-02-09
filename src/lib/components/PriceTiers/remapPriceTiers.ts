import { TCurrency } from 'src/lib/constants/currency';
import { TPriceRange, TTierPrice } from 'src/lib/types/graphql/Product';

export type TPriceTier = {
    quantity: number;
    currency: TCurrency;
    value: number;
};

const remapPriceTiers = ({
    priceRange,
    priceTiers = []
}: {
    priceRange?: TPriceRange;
    priceTiers?: TTierPrice[];
}): TPriceTier[] => {
    const items: TPriceTier[] = [];

    if (
        priceRange &&
        priceRange.minimum_price &&
        priceRange.minimum_price.final_price &&
        priceRange.minimum_price.final_price.currency &&
        priceRange.minimum_price.final_price.value
    ) {
        items.push({
            quantity: 1,
            currency: priceRange.minimum_price.final_price.currency,
            value: priceRange.minimum_price.final_price.value
        });
    }

    priceTiers.forEach(item => {
        if (
            item.quantity &&
            item.final_price &&
            item.final_price.currency &&
            item.final_price.value
        ) {
            items.push({
                quantity: item.quantity,
                currency: item.final_price.currency,
                value: item.final_price.value
            });
        }
    });

    return items;
};

export default remapPriceTiers;
