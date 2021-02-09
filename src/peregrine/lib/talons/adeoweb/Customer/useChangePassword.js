import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { errorMessages } from 'src/lib/util/errorMessages';
import { useCallback, useEffect, useState } from 'react';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useMutation } from '@apollo/react-hooks';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import MessageType from 'src/lib/constants/message';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useChangePassword = props => {
    const { changePasswordMutation } = props;
    const { t } = useTranslation();
    const validationSchema = yup.object({
        currentPassword: yup.string().required(t(errorMessages.required)),
        newPassword: yup
            .string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                t(errorMessages.password)
            )
            .required(t(errorMessages.required)),
        passwordConfirmation: yup
            .string()
            .oneOf(
                [yup.ref('newPassword'), null],
                t(errorMessages.passwordMatch)
            )
            .required(t(errorMessages.required))
    });
    const [
        { isChangingPassword, changePasswordError },
        { changePassword }
    ] = useUserContext();
    const [, { addMessage, clearAllMessages }] = useMessageCardContext();
    const [changePasswordQuery] = useMutation(changePasswordMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = {
        currentPassword: '',
        newPassword: '',
        passwordConfirmation: ''
    };

    const onSubmit = useCallback(
        async values => {
            await changePassword({
                values,
                changePassword: changePasswordQuery
            });

            setIsSubmitted(true);
        },
        [changePassword, changePasswordQuery]
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
        touched
    } = useFormik({
        validationSchema,
        initialValues,
        onSubmit
    });

    useEffect(() => {
        if (changePasswordError) {
            addMessage({
                type: MessageType.ERROR,
                message: changePasswordError
            });
        } else {
            clearAllMessages();
        }
    }, [changePasswordError, addMessage, clearAllMessages]);

    useEffect(() => {
        resetForm();
        setIsSubmitted(false);
    }, [resetForm, setIsSubmitted]);

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
        isChangingPassword,
        changePasswordError
    };
};
