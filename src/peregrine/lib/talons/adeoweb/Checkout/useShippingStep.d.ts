import { DocumentNode } from 'graphql';
import {
    TAvailableShippingMethod,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';
import { TShippingAddressFormValues } from 'src/lib/components/Checkout/Shipping';

type TUseShippingStepProps = {
    setGuestEmailMutation: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
    setShippingMethodOnCartMutation: DocumentNode;
};

type TUseShippingStep = {
    submitAddress: (values: TShippingAddressFormValues) => void;
    submitCustomerAddress: (id: number) => void;
    isSignedIn: boolean;
    isSigningIn: boolean;
    isNextEnabled: boolean;
    isSubmitting: boolean;
    availableShippingMethods: TAvailableShippingMethod[];
    selectedShippingMethod: TSelectedShippingMethod;
    handleShippingMethodSelect: (item: TAvailableShippingMethod) => void;
};

export function useShippingStep(props: TUseShippingStepProps): TUseShippingStep;
