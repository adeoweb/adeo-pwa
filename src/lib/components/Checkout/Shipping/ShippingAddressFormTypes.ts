import { FormikErrors, FormikTouched } from 'formik';

import { ChangeEvent, FormEvent } from 'react';

import { TCartAddressInput } from 'src/lib/types/graphql/Cart';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TShippingAddressFormValues = {
    email: string;
} & TCartAddressInput;

export type TShippingAddressFormProps = {
    handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: string | ChangeEvent<any>) => void;
    handleBlur: (e: any) => void;
    values: TShippingAddressFormValues;
    errors: FormikErrors<TShippingAddressFormValues>;
    touched: FormikTouched<TShippingAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isSignedIn: boolean;
};
