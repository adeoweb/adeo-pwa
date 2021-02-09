import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useUserSession = ({ signOutMutation }) => {
    const userSes = useUserContext();

    const [, { setUserSession }] = useUserContext();

    const [revokeToken] = useMutation(signOutMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    useEffect(() => {
        setUserSession({ revokeToken });
    }, [setUserSession, revokeToken]);
};
