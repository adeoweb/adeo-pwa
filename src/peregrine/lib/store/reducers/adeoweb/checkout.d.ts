import { TOrder } from 'src//lib/types/graphql/Order';

export type TCheckoutState = {
    billingAddressError: Error | null;
    isLoading: boolean;
    isLoaded: boolean;
    isSubmitting: boolean;
    initError: Error | null;
    orderError: Error | null;
    paymentMethodError: Error | null;
    receipt: {
        order: TOrder;
    };
    shippingAddressError: Error | null;
    estimateAddressError: Error | null;
    shippingMethodError: Error | null;
    applyCouponError: Error | null;
    removeCouponError: Error | null;
};
