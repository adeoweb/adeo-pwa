import { DocumentNode } from 'graphql';

import {
    TBillingCartAddress,
    TCartPrices,
    TSelectedPaymentMethod,
    TSelectedShippingMethod,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';
import { TCartItem } from 'src/lib/types/graphql/CartItem';

export type TUseReviewStepProps = {
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    placeOrderMutation: DocumentNode;
};

export type TUseReviewStep = {
    handlePlaceOrder: () => void;
    shippingAddress?: TShippingCartAddress;
    selectedShippingMethod?: TSelectedShippingMethod;
    billingAddress?: TBillingCartAddress;
    selectedPaymentMethod?: TSelectedPaymentMethod;
    items: TCartItem[];
    prices?: TCartPrices;
    currencyCode: string;
    orderError: Error | null;
    orderNumber: string;
    isSubmitEnabled: boolean;
    isRedirectToFirst: boolean;
    resetReceipt: () => Promise<void>;
};
