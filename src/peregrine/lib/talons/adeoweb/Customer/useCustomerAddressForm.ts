import { FormikErrors, FormikState, FormikTouched, useFormik } from 'formik';
import { DocumentNode } from 'graphql';

import { useCallback, useEffect, useState } from 'react';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

import { create as array } from 'yup/lib/array';
import { create as boolean } from 'yup/lib/boolean';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

type TUseCustomerAddressFormProps = {
    countriesQuery: DocumentNode;
    initialValues?: TCustomerAddressFormValues;
    onSubmit?: (values: TCustomerAddressFormValues) => void;
};

type TUseCustomerAddressForm = {
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    handleChange: (
        eventOrPath: string | React.ChangeEvent<any>
    ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
    handleBlur: (eventOrString: any) => void | ((e: any) => void);
    resetForm: (
        nextState?: Partial<FormikState<TCustomerAddressFormValues>> | undefined
    ) => void;
    values: TCustomerAddressFormValues;
    errors: FormikErrors<TCustomerAddressFormValues>;
    touched: FormikTouched<TCustomerAddressFormValues>;
    countries: TCountry[];
    regions: TRegion[];
    isDirty: boolean;
    isValid: boolean;
};

const validationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    company: string(),
    street: array().of(string()).required().ensure().compact(),
    city: string().required(),
    postcode: string().required(),
    telephone: string().required(),
    region: string().when('$isRegionsAvailable', {
        is: isRegionsAvailable => isRegionsAvailable,
        then: string().required()
    }),
    country_code: string().required(),
    default_billing: boolean(),
    default_shipping: boolean()
});

export const useCustomerAddressForm = (
    props: TUseCustomerAddressFormProps
): TUseCustomerAddressForm => {
    const { countriesQuery, initialValues, onSubmit } = props;
    const defaultValues = {
        firstname: '',
        lastname: '',
        company: '',
        street: ['', ''],
        city: '',
        postcode: '',
        telephone: '',
        region: '',
        country_code: '',
        default_billing: false,
        default_shipping: false
    };

    const [countryCode, setCountryCode] = useState('');
    const { countries, regions } = useCountries({
        countriesQuery,
        countryId: countryCode
    });

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
        [regions]
    );

    const {
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
        isValid,
        dirty: isDirty,
        values,
        errors,
        touched
    } = useFormik({
        validateOnMount: true,
        validate: handleValidate,
        initialValues: initialValues ?? defaultValues,
        enableReinitialize: true,
        onSubmit: onSubmit || (() => {})
    });

    useEffect(() => {
        if (values.country_code) {
            setCountryCode(values.country_code);
        }
    }, [values.country_code, setCountryCode]);

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        resetForm,
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid
    };
};
