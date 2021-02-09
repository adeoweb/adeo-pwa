import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import * as yup from 'yup';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

export const useCustomerAddressForm = props => {
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
    const validationSchema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        company: yup.string(),
        street: yup
            .array()
            .of(yup.string())
            .required()
            .ensure()
            .compact(),
        city: yup.string().required(),
        postcode: yup.string().required(),
        telephone: yup.string().required(),
        region: yup.string().when('$isRegionsAvailable', {
            is: isRegionsAvailable => isRegionsAvailable,
            then: yup.string().required()
        }),
        country_code: yup.string().required(),
        default_billing: yup.bool(),
        default_shipping: yup.bool()
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
        initialValues: initialValues || defaultValues,
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
