import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

import { useUserContext } from '../../../context/adeoweb/user';

export const useSignOut = ({ signOutMutation, createCartMutation }) => {
    const { resetStore } = useApolloClient();
    const [{ currentUser }, { signOut }] = useUserContext();
    const [revokeToken] = useMutation(signOutMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const history = useHistory();
    const [fetchCartId] = useMutation(createCartMutation);
    const [, { createCart, removeCart }] = useCartContext();

    const handleSignOut = useCallback(async () => {
        if (!currentUser) {
            return;
        }

        // After logout, reset the store to set the bearer token.
        // https://www.apollographql.com/docs/react/networking/authentication/#reset-store-on-logout
        await resetStore();
        await signOut({ revokeToken });
        await removeCart();
        await createCart({ fetchCartId });

        // Go to homepage
        history.push('/');
    }, [
        removeCart,
        createCart,
        fetchCartId,
        history,
        resetStore,
        revokeToken,
        signOut,
        currentUser
    ]);

    return {
        handleSignOut
    };
};
