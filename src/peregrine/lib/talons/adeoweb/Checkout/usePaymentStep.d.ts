import { DocumentNode } from 'graphql';
import * as React from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import {
    TSelectedShippingMethod,
    TShippingCartAddress
} from 'src/lib/types/graphql/Cart';

type TUsePaymentStepProps = {
    countriesQuery: DocumentNode;
    setBillingAddressOnCartMutation: DocumentNode;
    handleSubmitCallback: () => void;
};

type TUsePaymentStep<Values> = {
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    handleSameAsShippingChange: (
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
    handleSubmit: () => Promise<void>;
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
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

export function usePaymentStep<Values>(
    props: TUsePaymentStepProps
): TUsePaymentStep<Values>;
