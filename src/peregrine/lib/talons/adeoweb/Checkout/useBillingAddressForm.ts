import { useFormik } from 'formik';

import { useCallback, useEffect, useState } from 'react';

import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

import {
    TUseBillingAddressForm,
    TUseBillingAddressFormProps
} from './useBillingAddressFormTypes';
import { create as array } from 'yup/lib/array';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

export const useBillingAddressForm = (
    props: TUseBillingAddressFormProps
): TUseBillingAddressForm => {
    const { countriesQuery, initialValues } = props;

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
        country_code: string().required()
    });
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
        [validationSchema, regions]
    );

    const {
        handleBlur,
        handleChange,
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
        onSubmit: () => {}
    });

    useEffect(() => {
        if (values.country_code) {
            setCountryCode(values.country_code);
        }
    }, [values.country_code, setCountryCode]);

    return {
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
