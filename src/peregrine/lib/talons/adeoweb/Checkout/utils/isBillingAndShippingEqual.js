import getTransformedAddress from './getTransformedAddress';

const isBillingAndShippingEqual = (shippingAddress, billingAddress) =>
    JSON.stringify(getTransformedAddress(shippingAddress || {})) ===
    JSON.stringify(getTransformedAddress(billingAddress || {}));

export default isBillingAndShippingEqual;
