import { DocumentNode } from 'graphql';
import { TAvailablePaymentMethod } from 'src/lib/types/graphql/Cart';
import { TPaymentMethodInput } from 'src/lib/types/SetPaymentMethodOnCart';

type TUsePaymentMethodSelectProps = {
    setPaymentMethodOnCartMutation: DocumentNode;
};

type TUsePaymentMethodSelect = {
    handlePaymentMethodSelect: (data: TPaymentMethodInput) => void;
    availablePaymentMethods: TAvailablePaymentMethod[];
    selectedPaymentMethodCode?: string;
    isDisabled: boolean;
};

export function usePaymentMethodSelect(
    props: TUsePaymentMethodSelectProps
): TUsePaymentMethodSelect;
