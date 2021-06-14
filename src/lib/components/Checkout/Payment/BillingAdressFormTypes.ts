import { FormikErrors, FormikTouched } from 'formik';

import { ChangeEvent } from 'react';

import { TCartAddressInput } from 'src/lib/types/graphql/Cart';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TBillingAddressFormValues = Record<string, unknown> &
    TCartAddressInput;

export type TBillingAddressFormProps = {
    handleChange: (e: string | ChangeEvent<any>) => void;
    handleBlur: (e: any) => void;
    values: TBillingAddressFormValues;
    errors: FormikErrors<TBillingAddressFormValues>;
    touched: FormikTouched<TBillingAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
};
