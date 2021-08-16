import { FormikErrors, FormikTouched } from 'formik';

import * as React from 'react';

export type TUseContactFormProps = {
    initialValues?: TUseContactFormValues;
};

export type TUseContactFormValues = {
    name: string;
    email: string;
    phone?: string;
    message: string;
};

export type TUseContactForm = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    values: TUseContactFormValues;
    errors: FormikErrors<TUseContactFormValues>;
    touched: FormikTouched<TUseContactFormValues>;
};
