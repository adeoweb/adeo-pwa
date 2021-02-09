import { useCallback, useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import MessageType from 'src/lib/constants/message';

/**
 * Returns props necessary to render CreateAccount component. In particular this
 * talon handles the submission flow by first doing a pre-submisson validation
 * and then, on success, invokes the `onSubmit` prop, which is usually the action.
 *
 */
export const useCreateAccount = ({
    createAccountQuery,
    mergeCartsMutation,
    signInMutation,
    customerQuery,
    getCustomerCartQuery,
    signOutMutation,
    onSubmit
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [{ isGettingDetails, isSignedIn }, { signIn }] = useUserContext();

    const [, { addMessage }] = useMessageCardContext();

    const [createAccount, { error: createAccountError }] = useMutation(
        createAccountQuery,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [mergeCartsRequest] = useMutation(mergeCartsMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [signInRequest, { error: signInError }] = useMutation(
        signInMutation,
        { fetchPolicy: fetchPolicy.mutations.default }
    );
    const fetchUserDetails = useAwaitQuery(customerQuery);
    const fetchCustomerCart = useAwaitQuery(getCustomerCartQuery);
    const [revokeToken] = useMutation(signOutMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    useEffect(() => {
        if (createAccountError) {
            const { message } = createAccountError.graphQLErrors[0];
            addMessage({
                type: MessageType.ERROR,
                message
            });
        }
    }, [createAccountError, addMessage]);

    useEffect(() => {
        if (signInError) {
            const { message } = signInError.graphQLErrors[0];
            addMessage({
                type: MessageType.ERROR,
                message
            });
        }
    }, [signInError, addMessage]);

    const handleSubmit = useCallback(
        async formValues => {
            setIsSubmitting(true);
            try {
                // Try to create an account with the mutation.
                await createAccount({
                    variables: {
                        email: formValues.email,
                        firstname: formValues.firstName,
                        lastname: formValues.lastName,
                        password: formValues.password,
                        isSubscribed: formValues.isSubscribed
                    }
                });

                await signIn({
                    email: formValues.email,
                    password: formValues.password,
                    signIn: signInRequest,
                    fetchUserDetails,
                    fetchCustomerCart,
                    mergeCartsRequest,
                    revokeToken
                });

                // Finally, invoke the post-submission callback.
                onSubmit();
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error(error);
                }
                setIsSubmitting(false);
            }
        },
        [
            createAccount,
            signIn,
            signInRequest,
            fetchUserDetails,
            fetchCustomerCart,
            mergeCartsRequest,
            revokeToken,
            onSubmit
        ]
    );

    return {
        handleSubmit,
        isDisabled: isSubmitting || isGettingDetails,
        isSignedIn
    };
};
