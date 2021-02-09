import { DocumentNode } from 'graphql';

type TUseLoadUserProps = {
    getUserDetailsQuery: DocumentNode;
};

type TUseLoadUser = {
    error: null | Error;
};

export function useLoadUser(props: TUseLoadUserProps): TUseLoadUser;
