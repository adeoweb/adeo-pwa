import { FormikErrors, FormikTouched, useFormik } from 'formik';
import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { TChangePasswordForm } from 'src/lib/components/Customer/pages/ChangePasswordPage';
import MessageType from 'src/lib/constants/message';
import { errorMessages } from 'src/lib/util/errorMessages';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

import { create as ref } from 'yup/lib/Reference';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

type TUseChangePasswordProps = {
    changePasswordMutation: DocumentNode;
};

type TUseChangePassword = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TChangePasswordForm;
    errors: FormikErrors<TChangePasswordForm>;
    touched: FormikTouched<TChangePasswordForm>;
    isDirty: boolean;
    isValid: boolean;
    isSubmitted: boolean;
    isChangingPassword: boolean;
    changePasswordError: string | null;
};

export const useChangePassword = (
    props: TUseChangePasswordProps
): TUseChangePassword => {
    const { changePasswordMutation } = props;
    const { t } = useTranslation('validations');
    const validationSchema = object({
        currentPassword: string().required(),
        newPassword: string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                t(errorMessages.password)
            )
            .required(),
        passwordConfirmation: string()
            .oneOf([ref('newPassword'), null], t(errorMessages.passwordMatch))
            .required()
    });
    const [{ isChangingPassword, changePasswordError }, { changePassword }] =
        useUserContext();
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
