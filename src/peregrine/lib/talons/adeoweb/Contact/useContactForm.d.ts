import * as React from 'react';
import { FormikErrors, FormikTouched } from 'formik';

type TUseContactFormProps<Values> = {
    initialValues?: Values;
};

export type TUseContactFormValues = {
    name: string;
    email: string;
    phone?: string;
    message: string;
};

type TUseContactForm<Values> = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
};

export function useContactForm<Values>(
    props: TUseContactFormProps<Values>
): TUseContactForm<Values>;
