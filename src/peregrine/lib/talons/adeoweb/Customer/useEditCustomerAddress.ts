import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import MessageType from 'src/lib/constants/message';
import { useLocation } from 'src/lib/drivers';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import remapToCustomerAddressFormValues from 'src/peregrine/lib/util/adeoweb/remapToCustomerAddressFormValues';

type TUseEditCustomerAddressProps = {
    countriesQuery: DocumentNode;
    getCustomerQuery: DocumentNode;
    updateCustomerAddressMutation: DocumentNode;
};

type TUseEditCustomerAddress = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TCustomerAddressFormValues;
    errors: FormikErrors<TCustomerAddressFormValues>;
    touched: FormikTouched<TCustomerAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
    isSubmitted: boolean;
    isUpdatingAddress: boolean;
    updateAddressError: string | null;
};

export const useEditCustomerAddress = ({
    getCustomerQuery,
    updateCustomerAddressMutation,
    countriesQuery
}: TUseEditCustomerAddressProps): TUseEditCustomerAddress => {
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
    const address = addresses.find(address => address?.id === id);
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
