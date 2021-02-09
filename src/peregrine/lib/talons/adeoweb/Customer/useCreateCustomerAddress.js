import { useCallback, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import MessageType from 'src/lib/constants/message';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCreateCustomerAddress = ({
    getCustomerQuery,
    createCustomerAddressMutation,
    countriesQuery
}) => {
    const [
        { createAddressError, isCreatingAddress },
        { createCustomerAddress }
    ] = useUserContext();
    const [, { addMessage, clearAllMessages }] = useMessageCardContext();
    const fetchUserDetails = useAwaitQuery(getCustomerQuery);
    const [createCustomerAddressQuery] = useMutation(
        createCustomerAddressMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = useCallback(
        async values => {
            await createCustomerAddress({
                address: values,
                createCustomerAddress: createCustomerAddressQuery,
                fetchUserDetails
            });
            setIsSubmitted(true);
        },
        [
            createCustomerAddress,
            createCustomerAddressQuery,
            fetchUserDetails,
            setIsSubmitted
        ]
    );

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        resetForm,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid
    } = useCustomerAddressForm({
        countriesQuery,
        onSubmit
    });

    useEffect(() => {
        resetForm();
        setIsSubmitted(false);
    }, [resetForm, setIsSubmitted]);

    useEffect(() => {
        if (createAddressError) {
            addMessage({
                type: MessageType.ERROR,
                message: createAddressError
            });
        } else {
            clearAllMessages();
        }
    }, [createAddressError, addMessage, clearAllMessages]);

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid,
        isSubmitted,
        isCreatingAddress,
        createAddressError
    };
};
