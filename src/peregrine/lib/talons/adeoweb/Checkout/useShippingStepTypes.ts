import { DocumentNode } from 'graphql';

import { TShippingAddressFormValues } from 'src/lib/components/Checkout/Shipping';
import {
    TAvailableShippingMethod,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';

export type TUseShippingStepProps = {
    setGuestEmailMutation: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
    setShippingMethodOnCartMutation: DocumentNode;
};

export type TUseShippingStep = {
    submitAddress: (values: TShippingAddressFormValues) => void;
    submitCustomerAddress: (id: number) => void;
    isSignedIn: boolean;
    isSigningIn: boolean;
    isNextEnabled: boolean;
    isSubmitting: boolean;
    availableShippingMethods: TAvailableShippingMethod[];
    selectedShippingMethod?: TSelectedShippingMethod;
    handleShippingMethodSelect: (item: TAvailableShippingMethod) => void;
};
