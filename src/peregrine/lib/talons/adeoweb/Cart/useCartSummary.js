import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';

export const useCartSummary = () => {
    const [cartState] = useCartContext();
    const {
        derivedDetails,
        details: { prices, shipping_addresses: shippingAddresses }
    } = cartState;
    const { currencyCode, subtotal: grandTotal } = derivedDetails;
    const shippingAddress =
        shippingAddresses && shippingAddresses.length > 0
            ? shippingAddresses[0]
            : undefined;
    const { selected_shipping_method: selectedShippingMethod } =
        shippingAddress || {};

    let taxes = [];
    if (prices && prices.applied_taxes && prices.applied_taxes.length) {
        taxes = prices.applied_taxes;
    }

    let discounts = [];
    if (prices && prices.discounts && prices.discounts.length) {
        discounts = prices.discounts;
    }

    let subTotal = 0;
    if (
        prices &&
        prices.subtotal_excluding_tax &&
        prices.subtotal_excluding_tax.value
    ) {
        subTotal = prices.subtotal_excluding_tax.value;
    }

    const shippingPrice =
        selectedShippingMethod && selectedShippingMethod.amount
            ? selectedShippingMethod.amount.value
            : null;

    return {
        currencyCode,
        grandTotal,
        taxes,
        discounts,
        subTotal,
        shippingPrice
    };
};
