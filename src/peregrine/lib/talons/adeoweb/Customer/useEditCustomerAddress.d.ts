import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

type TUseEditCustomerAddressProps = {
    countriesQuery: DocumentNode;
    getCustomerQuery: DocumentNode;
    updateCustomerAddressMutation: DocumentNode;
};

type TUseEditCustomerAddress = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: TCustomerAddressFormValues;
    errors: FormikErrors<TCustomerAddressFormValues>;
    touched: FormikTouched<TCustomerAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
    isSubmitted: boolean;
    isUpdatingAddress: boolean;
    updateAddressError: string | null;
};

export function useEditCustomerAddress(
    props: TUseEditCustomerAddressProps
): TUseEditCustomerAddress;
