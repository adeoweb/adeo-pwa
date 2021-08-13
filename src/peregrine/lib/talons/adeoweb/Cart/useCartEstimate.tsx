import { useFormik, FormikErrors, FormikTouched } from 'formik';
import { DocumentNode } from 'graphql';
import * as yup from 'yup';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import {
    ESTIMATE_ADDRESS_FIRSTNAME,
    DEFAULT_COUNTRY_CODE
} from 'src/lib/constants/cart';
import {
    TAvailableShippingMethod,
    TCartAddressInput,
    TSelectedShippingMethod
} from 'src/lib/types/graphql/Cart';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseCartEstimateProps = {
    countriesQuery: DocumentNode;
    setShippingAddressesOnCartMutation: DocumentNode;
    setShippingMethodOnCartMutation: DocumentNode;
    initialValues?: TCartAddressInput;
};

type TUseCartEstimate = {
    handleShippingMethodSelect: (item: TAvailableShippingMethod) => void;
    isSubmitting: boolean;
    availableShippingMethods: TAvailableShippingMethod[];
    selectedShippingMethod?: TSelectedShippingMethod;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
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

export const useCartEstimate = (
    props: TUseCartEstimateProps
): TUseCartEstimate => {
    const {
        countriesQuery,
        setShippingAddressesOnCartMutation,
        setShippingMethodOnCartMutation
    } = props;
    const validationSchema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        company: yup.string(),
        street: yup.array().of(yup.string()).required().ensure().compact(),
        city: yup.string().required(),
        postcode: yup.string().required(),
        telephone: yup.string().required(),
        region: yup.string().when('$isRegionsAvailable', {
            is: isRegionsAvailable => isRegionsAvailable,
            then: yup.string().required()
        }),
        country_code: yup.string().required()
    });
    const [countryCode, setCountryCode] = useState('');
    const { countries, regions } = useCountries({
        countriesQuery,
        countryId: countryCode
    });
    const [{ isSubmitting }, { submitEstimateAddress, submitShippingMethod }] =
        useCheckoutContext();
    const [
        {
            details: { shipping_addresses: shippingAddresses }
        }
    ] = useCartContext();
    const estimateAddress =
        shippingAddresses?.[0]?.firstname === ESTIMATE_ADDRESS_FIRSTNAME
            ? shippingAddresses[0]
            : undefined;

    const initialValues = {
        firstname: ESTIMATE_ADDRESS_FIRSTNAME,
        lastname: 'l',
        company: 'c',
        street: ['s', 's'],
        city: 'c',
        postcode: estimateAddress?.postcode ?? '',
        telephone: '0',
        region: estimateAddress?.region ? estimateAddress.region.code : '',
        country_code: estimateAddress?.country
            ? estimateAddress.country.code
            : DEFAULT_COUNTRY_CODE
    };

    const [setShippingMethodOnCart] = useMutation(
        setShippingMethodOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );
    const [setShippingAddressesOnCart] = useMutation(
        setShippingAddressesOnCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    const handleValidate = useCallback(
        async values => {
            const context = {
                isRegionsAvailable: regions.length > 0
            };
            return customFormikValidate(
                values,
                validationSchema,
                false,
                context
            );
        },
        [validationSchema, regions]
    );

    const submitAddress = useCallback(
        values => {
            submitEstimateAddress({
                formValues: values,
                setShippingAddressesOnCart
            });
        },
        [submitEstimateAddress, setShippingAddressesOnCart]
    );

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        dirty: isDirty,
        values,
        errors,
        touched
    } = useFormik({
        validateOnMount: true,
        validate: handleValidate,
        initialValues,
        enableReinitialize: true,
        onSubmit: submitAddress
    });

    const handleShippingMethodSelect = useCallback(
        item => {
            submitShippingMethod({
                shippingMethod: item,
                setShippingMethodOnCart
            });
        },
        [submitShippingMethod, setShippingMethodOnCart]
    );

    useEffect(() => {
        if (values.country_code) {
            setCountryCode(values.country_code);
        }
    }, [values.country_code, countryCode, setCountryCode]);

    const availableShippingMethods = filterOutNullableValues(
        estimateAddress?.available_shipping_methods
    );

    return {
        handleShippingMethodSelect,
        isSubmitting,
        availableShippingMethods,
        selectedShippingMethod: estimateAddress?.selected_shipping_method,
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid
    };
};
