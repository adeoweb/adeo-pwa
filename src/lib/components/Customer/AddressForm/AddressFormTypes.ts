import { ChangeEvent, FormEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TCustomerAddressFormValues = {
    city: string;
    company?: string;
    country_code: string;
    default_billing?: boolean;
    default_shipping?: boolean;
    firstname: string;
    lastname: string;
    postcode: string;
    region: string;
    street: [string, string];
    telephone: string;
};

export type TAddressFormProps = {
    handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: string | ChangeEvent<any>) => void;
    handleBlur: (e: any) => void;
    values: TCustomerAddressFormValues;
    errors: FormikErrors<TCustomerAddressFormValues>;
    touched: FormikTouched<TCustomerAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isForBilling?: boolean;
    isForShipping?: boolean;
};
