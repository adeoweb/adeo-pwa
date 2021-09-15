import { FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';

import * as React from 'react';

import { TBillingAddressFormValues } from 'src/lib/components/Checkout/Payment';
import {
    TSelectedShippingMethod,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';

export type TUsePaymentStepProps = {
    countriesQuery: DocumentNode;
    setBillingAddressOnCartMutation: DocumentNode;
    handleSubmitCallback: () => void;
};

export type TUsePaymentStep = {
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    handleSameAsShippingChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleSubmit: () => void;
    values: TBillingAddressFormValues;
    errors: FormikErrors<TBillingAddressFormValues>;
    touched: FormikTouched<TBillingAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
    isSubmitting: boolean;
    isSameAsShipping: boolean;
    isSubmitEnabled: boolean;
    isRedirectToPrev: boolean;
    isSignedIn: boolean;
    shippingAddress?: TShippingCartAddress;
    selectedShippingMethod?: TSelectedShippingMethod;
    selectedCustomerAddressId: number | null;
    onCustomerAddressSelect: (id: number) => void;
};
