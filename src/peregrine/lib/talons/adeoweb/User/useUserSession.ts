import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseUserSessionProps = {
    signOutMutation: DocumentNode;
};

export const useUserSession = ({
    signOutMutation
}: TUseUserSessionProps): void => {
    const [, { setUserSession }] = useUserContext();

    const [revokeToken] = useMutation(signOutMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    useEffect(() => {
        setUserSession({ revokeToken });
    }, [setUserSession, revokeToken]);
};
