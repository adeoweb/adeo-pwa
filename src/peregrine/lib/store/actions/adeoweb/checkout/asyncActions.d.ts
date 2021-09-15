import { ExecutionResult, MutationFunctionOptions } from '@apollo/react-common';
import { MutationFunction } from '@apollo/react-hooks';

import { ApolloQueryResult, OperationVariables } from '@apollo/client';

import { TShippingAddressFormValues } from 'src//lib/components/Checkout/Shipping';
import { TPaymentMethodInput } from 'src//lib/types/SetPaymentMethodOnCart';
import {
    TAvailableShippingMethod,
    TCart,
    TCartAddressInput
} from 'src//lib/types/graphql/Cart';
import { TOrder } from 'src//lib/types/graphql/Order';
import { BillingAddressInput } from 'src/lib/types/graphql-types.generated';
import { TFetchCartId } from 'src/peregrine/lib/store/actions/adeoweb/cart/asyncActions';

interface IInitCheckoutPayload {
    setShippingAddressesOnCart: MutationFunction;
    fetchCartDetails: MutationFunction;
    fetchCartId: MutationFunction;
}

interface ISubmitShippingAddressPayload {
    customerAddressId?: number;
    formValues?: TShippingAddressFormValues;
    setGuestEmail: MutationFunction;
    setShippingAddressesOnCart: MutationFunction;
}

interface ISubmitShippingMethodPayload {
    shippingMethod: TAvailableShippingMethod;
    setShippingMethodOnCart: MutationFunction;
}

interface ISubmitBillingAddressPayload {
    billingAddress: BillingAddressInput;
    setBillingAddressOnCart: MutationFunction;
}

interface ISubmitPaymentMethodPayload {
    paymentMethod: TPaymentMethodInput;
    setPaymentMethodOnCart: MutationFunction;
}

interface ISubmitOrder {
    fetchCartId: MutationFunction;
    fetchCartDetails: (
        options: QueryOptions<OperationVariables>
    ) => Promise<ApolloQueryResult<TCart>>;
    placeOrder: MutationFunction;
}

interface IApplyCouponPayload {
    couponCode: string;
    applyCouponToCart: MutationFunction;
}

interface IRemoveCouponPayload {
    removeCouponFromCart: MutationFunction;
}

interface ISubmitEstimateAddressPayload {
    formValues: TCartAddressInput;
    setShippingAddressesOnCart: MutationFunction;
}

export type TCheckoutAsyncActions = {
    initCheckout(payload: IInitCheckoutPayload): Promise<void>;
    submitShippingAddress(
        payload: ISubmitShippingAddressPayload
    ): Promise<void>;
    submitShippingMethod(payload: ISubmitShippingMethodPayload): Promise<void>;
    submitBillingAddress(payload: ISubmitBillingAddressPayload): Promise<void>;
    submitPaymentMethod(payload: ISubmitPaymentMethodPayload): Promise<void>;
    submitOrder(payload: ISubmitOrder): Promise<void>;
    resetReceipt(): Promise<void>;
    applyCoupon(payload: IApplyCouponPayload): Promise<void>;
    removeCoupon(payload: IRemoveCouponPayload): Promise<void>;
    submitEstimateAddress(
        payload: ISubmitEstimateAddressPayload
    ): Promise<void>;
};
