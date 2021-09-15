import { useFormik } from 'formik';
import * as yup from 'yup';

import { useCallback, useEffect, useState } from 'react';

import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

import {
    TUseShippingAddressForm,
    TUseShippingAddressFormProps
} from './useShippingAddressFormTypes';

export const useShippingAddressForm = (
    props: TUseShippingAddressFormProps
): TUseShippingAddressForm => {
    const { countriesQuery, initialValues, onSubmit } = props;
    const validationSchema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        company: yup.string(),
        email: yup
            .string()
            .when('$isSignedIn', {
                is: isSignedIn => !isSignedIn,
                then: yup.string().required()
            })
            .email(),
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
