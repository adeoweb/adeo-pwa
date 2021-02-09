import * as React from 'react';
import { DocumentNode } from 'graphql';
import { FormikErrors, FormikTouched } from 'formik';
import { TChangePasswordForm } from 'src/lib/components/Customer/pages/ChangePasswordPage';

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

export function useChangePassword(
    props: TUseChangePasswordProps
): TUseChangePassword;
