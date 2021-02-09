import { useCallback, useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import MessageType from 'src/lib/constants/message';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';
import { useLocation } from 'src/lib/drivers';
import remapToCustomerAddressFormValues from 'src/peregrine/lib/util/adeoweb/remapToCustomerAddressFormValues';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useEditCustomerAddress = ({
    getCustomerQuery,
    updateCustomerAddressMutation,
    countriesQuery
}) => {
    const location = useLocation();
    const id = parseInt(getSearchParam('id', location), 10);
    const [
        {
            updateAddressError,
            isUpdatingAddress,
            currentUser: { addresses = [] }
        },
        { updateCustomerAddress }
    ] = useUserContext();
    const [, { addMessage, clearAllMessages }] = useMessageCardContext();
    const fetchUserDetails = useAwaitQuery(getCustomerQuery);
    const [updateCustomerAddressQuery] = useMutation(
        updateCustomerAddressMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [isSubmitted, setIsSubmitted] = useState(false);
    const address = addresses.find(address => address.id === id) || {};
    const remappedAddress = remapToCustomerAddressFormValues(address);

    const onSubmit = useCallback(
        async values => {
            await updateCustomerAddress({
                id,
                address: values,
                updateCustomerAddress: updateCustomerAddressQuery,
                fetchUserDetails
            });
            setIsSubmitted(true);
        },
        [
            id,
            updateCustomerAddress,
            updateCustomerAddressQuery,
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
        initialValues: remappedAddress,
        countriesQuery,
        onSubmit
    });

    useEffect(() => {
        resetForm();
        setIsSubmitted(false);
    }, [resetForm, setIsSubmitted]);

    useEffect(() => {
        if (updateAddressError) {
            addMessage({
                type: MessageType.ERROR,
                message: updateAddressError
            });
        } else {
            clearAllMessages();
        }
    }, [updateAddressError, addMessage, clearAllMessages]);

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
        isUpdatingAddress,
        updateAddressError
    };
};
