import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

import MessageType from 'src/lib/constants/message';
import { useLocation } from 'src/lib/drivers';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import remapToCustomerAddressFormValues from 'src/peregrine/lib/util/adeoweb/remapToCustomerAddressFormValues';

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
