import { ChangeEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { TCartAddressInput } from 'src/lib/types/graphql/Cart';

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
