import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TCartAddressInput } from 'src/lib/types/graphql/Cart';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TUseBillingAddressFormProps = {
    countriesQuery: DocumentNode;
    initialValues: TCartAddressInput;
};

export type TUseBillingAddressForm = {
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TCartAddressInput;
    errors: FormikErrors<TCartAddressInput>;
    touched: FormikTouched<TCartAddressInput>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};
