import * as React from 'react';
import { DocumentNode } from 'graphql';
import { FormikErrors, FormikTouched } from 'formik';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

type TUseBillingAddressFormProps<Values> = {
    countriesQuery: DocumentNode;
    initialValues: Values;
};

type TUseBillingAddressForm<Values> = {
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    handleSubmit: () => Promise<void>;
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};

export function useBillingAddressForm<Values>(
    props: TUseBillingAddressFormProps<Values>
): TUseBillingAddressForm<Values>;
