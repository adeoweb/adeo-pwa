import { DocumentNode } from 'graphql';

type TUseCheckoutProps = {
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
};

type TUseCheckout = {
    isLoading: boolean;
    isLoaded: boolean;
    error: Error | null;
};

export function useCheckout(props: TUseCheckoutProps): TUseCheckout;
