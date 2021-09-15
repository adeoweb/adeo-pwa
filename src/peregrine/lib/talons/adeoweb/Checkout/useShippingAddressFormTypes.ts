import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { CartAddressInput } from 'src/lib/types/graphql-types.generated';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TShippingStepValues = { email: string } & CartAddressInput;

export type TUseShippingAddressFormProps = {
    countriesQuery: DocumentNode;
    initialValues: TShippingStepValues;
    onSubmit?: (values: TShippingStepValues) => void;
};

export type TUseShippingAddressForm = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TShippingStepValues;
    errors: FormikErrors<TShippingStepValues>;
    touched: FormikTouched<TShippingStepValues>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};
