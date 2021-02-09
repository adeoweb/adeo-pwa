import { DocumentNode } from 'graphql';
import { TGenerateCustomerTokenProps } from 'src/lib/types/graphql/SignIn';

type TUseSignIn = {
    handleSubmit: (props: TGenerateCustomerTokenProps) => void;
    isBusy: boolean;
    isSignedIn: boolean;
};

export type TUseSignInProps = {
    signInMutation: DocumentNode;
    customerQuery: DocumentNode;
    getCustomerCartQuery: DocumentNode;
    mergeCartsMutation: DocumentNode;
    signOutMutation: DocumentNode;
};

export function useSignIn(props: TUseSignInProps): TUseSignIn;
