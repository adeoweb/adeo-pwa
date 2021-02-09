import { DocumentNode } from 'graphql';

type TUseUserSessionProps = {
    signOutMutation: DocumentNode;
};

export function useUserSession(props: TUseUserSessionProps): void;
