import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

import { FormikState } from 'formik/dist/types';

type TUseCustomerAddressFormProps<Values> = {
    countriesQuery: DocumentNode;
    initialValues?: Values;
    onSubmit?: (values: Values) => void;
};

type TUseCustomerAddressForm<Values> = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void;
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};

export function useCustomerAddressForm<Values>(
    props: TUseCustomerAddressFormProps<Values>
): TUseCustomerAddressForm<Values>;
