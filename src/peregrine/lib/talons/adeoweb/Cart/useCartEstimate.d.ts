import { DocumentNode } from 'graphql';
import {
    TAvailableShippingMethod,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';
import { FormikErrors, FormikTouched } from 'formik';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import * as React from 'react';

type TUseCartEstimateProps<Values> = {
    countriesQuery: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
    setShippingMethodOnCartMutation: DocumentNode;
    initialValues?: Values;
};

type TUseCartEstimate<Values> = {
    handleShippingMethodSelect: (item: TAvailableShippingMethod) => void;
    isSubmitting: boolean;
    availableShippingMethods: TAvailableShippingMethod[];
    selectedShippingMethod: TSelectedShippingMethod;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};

export function useCartEstimate<Values>(
    props: TUseCartEstimateProps<Values>
): TUseCartEstimate<Values>;
