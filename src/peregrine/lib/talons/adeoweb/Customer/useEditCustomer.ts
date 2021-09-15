import { useFormik, FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import MessageType from 'src/lib/constants/message';
import { TCustomerInput } from 'src/lib/types/graphql/Customer';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

import { create as boolean } from 'yup/lib/boolean';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

type TUseEditCustomerProps = {
    updateCustomerMutation: DocumentNode;
    isChangeEmail?: boolean;
};

type TUseEditCustomer = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TCustomerInput;
    errors: FormikErrors<TCustomerInput>;
    touched: FormikTouched<TCustomerInput>;
    isDirty: boolean;
    isValid: boolean;
    isSubmitted: boolean;
    isUpdatingCustomer: boolean;
    updateCustomerError: string | null;
};

const validationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    email: string().when('$isChangeEmail', {
        is: isChangeEmail => isChangeEmail,
        then: string().required()
    }),
    password: string().when('$isChangeEmail', {
        is: isChangeEmail => isChangeEmail,
        then: string().required()
    }),
    is_subscribed: boolean()
});

export const useEditCustomer = (
    props: TUseEditCustomerProps
): TUseEditCustomer => {
    const { updateCustomerMutation, isChangeEmail } = props;

    const [
        {
            currentUser: {
                firstname,
                lastname,
                email,
                is_subscribed: isSubscribed
            },
            isUpdatingCustomer,
            updateCustomerError
        },
        { updateCustomer }
    ] = useUserContext();
    const [, { addMessage, clearAllMessages }] = useMessageCardContext();
    const [updateCustomerQuery] = useMutation(updateCustomerMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleValidate = useCallback(
        async values => {
            const context = {
                isChangeEmail: Boolean(isChangeEmail)
            };
            return customFormikValidate(
                values,
                validationSchema,
                false,
                context
            );
        },
        [isChangeEmail]
    );

    const initialValues = {
        firstname,
        lastname,
        email,
        is_subscribed: Boolean(isSubscribed),
        password: ''
    };

    const onSubmit = useCallback(
        async values => {
            if (!isChangeEmail) {
                delete values.email;
            }
            await updateCustomer({
                values,
                updateCustomer: updateCustomerQuery
            });

            setIsSubmitted(true);
        },
        [updateCustomer, updateCustomerQuery, isChangeEmail]
    );

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        isValid,
        dirty: isDirty,
        values,
        errors,
        touched,
        validateForm
    } = useFormik({
        validateOnMount: true,
        enableReinitialize: true,
        validate: handleValidate,
        initialValues,
        onSubmit
    });

    const forceValidate = useCallback(() => {
        validateForm(values);
    }, [validateForm, values]);

    useEffect(() => {
        if (updateCustomerError) {
            addMessage({
                type: MessageType.ERROR,
                message: updateCustomerError
            });
        } else {
            clearAllMessages();
        }
    }, [updateCustomerError, addMessage, clearAllMessages]);

    useEffect(() => {
        resetForm();
        setIsSubmitted(false);
    }, [resetForm, setIsSubmitted]);

    useEffect(() => {
        forceValidate();
    }, [isChangeEmail, forceValidate]);

    return {
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        isDirty,
        values,
        errors,
        touched,
        isSubmitted,
        isUpdatingCustomer,
        updateCustomerError
    };
};
