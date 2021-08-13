import { TCartTaxItem } from 'src/lib/types/graphql/Cart';
import { TDiscount } from 'src/lib/types/graphql/Discount';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

export type TUseCartSummary = {
    currencyCode: string;
    grandTotal: number;
    taxes: TCartTaxItem[];
    discounts: TDiscount[];
    subTotal: number;
    shippingPrice?: number;
};

export const useCartSummary = (): TUseCartSummary => {
    const [cartState] = useCartContext();
    const {
        derivedDetails,
        details: { prices, shipping_addresses: shippingAddresses }
    } = cartState;
    const { currencyCode, subtotal: grandTotal } = derivedDetails;
    const shippingAddress = shippingAddresses?.[0];

    const taxes = filterOutNullableValues(prices?.applied_taxes);
    const discounts = filterOutNullableValues(prices?.discounts);
    const subTotal = prices?.subtotal_excluding_tax?.value ?? 0;
    const shippingPrice =
        shippingAddress?.selected_shipping_method?.amount?.value;

    return {
        taxes,
        subTotal,
        discounts,
        grandTotal,
        currencyCode,
        shippingPrice
    };
};
