import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

type TUseShippingAddressFormProps<Values> = {
    countriesQuery: DocumentNode;
    initialValues?: Values;
    onSubmit?: (values: Values) => void;
};

type TUseShippingAddressForm<Values> = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};

export function useShippingAddressForm<Values>(
    props: TUseShippingAddressFormProps<Values>
): TUseShippingAddressForm<Values>;
