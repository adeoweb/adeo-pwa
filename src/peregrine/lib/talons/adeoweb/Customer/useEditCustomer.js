import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { errorMessages } from 'src/lib/util/errorMessages';
import { useCallback, useEffect, useState } from 'react';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMutation } from '@apollo/react-hooks';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import MessageType from 'src/lib/constants/message';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useEditCustomer = props => {
    const { updateCustomerMutation, isChangeEmail } = props;
    const { t } = useTranslation();
    const validationSchema = yup.object({
        firstname: yup.string().required(t(errorMessages.required)),
        lastname: yup.string().required(t(errorMessages.required)),
        email: yup.string().when('$isChangeEmail', {
            is: isChangeEmail => isChangeEmail,
            then: yup.string().required(t(errorMessages.required))
        }),
        password: yup.string().when('$isChangeEmail', {
            is: isChangeEmail => isChangeEmail,
            then: yup.string().required(t(errorMessages.required))
        }),
        is_subscribed: yup.boolean()
    });
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
        [validationSchema, isChangeEmail]
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
        resetForm,
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
