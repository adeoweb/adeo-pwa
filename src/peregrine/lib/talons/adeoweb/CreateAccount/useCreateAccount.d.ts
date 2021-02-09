import { DocumentNode } from 'graphql';

type TUseCreateAccount = {
    handleSubmit: (props: TUseCreateAccountFormValues) => void;
    isDisabled: boolean;
    isSignedIn: boolean;
};

export type TUseCreateAccountFormValues = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    isSubscribed: boolean;
    confirm?: string;
};

export type TUseCreateAccountProps = {
    createAccountQuery: DocumentNode;
    mergeCartsMutation: DocumentNode;
    signInMutation: DocumentNode;
    customerQuery: DocumentNode;
    getCustomerCartQuery: DocumentNode;
    signOutMutation: DocumentNode;
    onSubmit: () => void;
};

export function useCreateAccount(
    props: TUseCreateAccountProps
): TUseCreateAccount;
