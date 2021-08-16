import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import MessageType from 'src/lib/constants/message';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseCreateCustomerAddressProps = {
    countriesQuery: DocumentNode;
    getCustomerQuery: DocumentNode;
    createCustomerAddressMutation: DocumentNode;
};

type TUseCreateCustomerAddress = {
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
    isCreatingAddress: boolean;
    createAddressError: string | null;
};

export const useCreateCustomerAddress = ({
    getCustomerQuery,
    createCustomerAddressMutation,
    countriesQuery
}: TUseCreateCustomerAddressProps): TUseCreateCustomerAddress => {
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
