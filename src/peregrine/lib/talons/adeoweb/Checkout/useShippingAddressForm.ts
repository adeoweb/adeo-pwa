import { useFormik } from 'formik';

import { useCallback, useEffect, useState } from 'react';

import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

import {
    TUseShippingAddressForm,
    TUseShippingAddressFormProps
} from './useShippingAddressFormTypes';
import { create as array } from 'yup/lib/array';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

export const useShippingAddressForm = (
    props: TUseShippingAddressFormProps
): TUseShippingAddressForm => {
    const { countriesQuery, initialValues, onSubmit } = props;
    const validationSchema = object({
        firstname: string().required(),
        lastname: string().required(),
        company: string(),
        email: string()
            .when('$isSignedIn', {
                is: isSignedIn => !isSignedIn,
                then: string().required()
            })
            .email(),
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
    const [{ isSignedIn }] = useUserContext();
    const [countryCode, setCountryCode] = useState('');
    const { countries, regions } = useCountries({
        countriesQuery,
        countryId: countryCode
    });

    const handleValidate = useCallback(
        async values => {
            const context = {
                isRegionsAvailable: regions.length > 0,
                isSignedIn
            };
            return customFormikValidate(
                values,
                validationSchema,
                false,
                context
            );
        },
        [validationSchema, regions, isSignedIn]
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
        values,
        errors,
        touched,
        countries,
        regions,
        isDirty,
        isValid
    };
};
