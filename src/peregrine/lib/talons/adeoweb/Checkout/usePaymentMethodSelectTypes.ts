import { DocumentNode } from 'graphql';

import { TPaymentMethodInput } from 'src/lib/types/SetPaymentMethodOnCart';
import { TAvailablePaymentMethod } from 'src/lib/types/graphql/Cart';

export type TUsePaymentMethodSelectProps = {
    setPaymentMethodOnCartMutation: DocumentNode;
};

export type TUsePaymentMethodSelect = {
    handlePaymentMethodSelect: (data: TPaymentMethodInput) => void;
    availablePaymentMethods: TAvailablePaymentMethod[];
    selectedPaymentMethodCode?: string;
    isDisabled: boolean;
};
