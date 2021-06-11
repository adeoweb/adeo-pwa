import { FormikErrors, FormikTouched } from 'formik';

import React from 'react';

import { TCustomizableOption } from 'src/lib/types/graphql/Product';
import { ICustomOptionsForm } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useCustomProduct';

export type TProductCustomOptionsProps = {
    customOptions: TCustomizableOption[];
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => any;
    values: ICustomOptionsForm;
    errors: FormikErrors<ICustomOptionsForm>;
    touched: FormikTouched<ICustomOptionsForm>;
};

export type TOptionProps = {
    key: string;
    option: TCustomizableOption;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => any;
    value: string;
    error?: string;
    touched?: boolean;
};
