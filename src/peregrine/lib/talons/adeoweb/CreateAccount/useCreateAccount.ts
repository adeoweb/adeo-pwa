import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState, useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import MessageType from 'src/lib/constants/message';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export type TUseCreateAccountProps = {
    createAccountQuery: DocumentNode;
    mergeCartsMutation: DocumentNode;
    signInMutation: DocumentNode;
    customerQuery: DocumentNode;
    getCustomerCartQuery: DocumentNode;
    signOutMutation: DocumentNode;
    onSubmit: () => void;
};

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

export const useCreateAccount = ({
    createAccountQuery,
    mergeCartsMutation,
    signInMutation,
    customerQuery,
    getCustomerCartQuery,
    signOutMutation,
    onSubmit
}: TUseCreateAccountProps): TUseCreateAccount => {
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
