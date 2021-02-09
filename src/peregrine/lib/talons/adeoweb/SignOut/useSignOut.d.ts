import { DocumentNode } from 'graphql';

type TUseSignOutProps = {
    signOutMutation: DocumentNode;
    createCartMutation: DocumentNode;
};

export type TUseSignOut = {
    handleSignOut: () => void;
};

export function useSignOut(props: TUseSignOutProps): TUseSignOut;
