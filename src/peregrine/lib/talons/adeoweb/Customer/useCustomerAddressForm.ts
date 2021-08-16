import { FormikErrors, FormikState, FormikTouched, useFormik } from 'formik';
import { DocumentNode } from 'graphql';
import * as yup from 'yup';

import { useCallback, useEffect, useState } from 'react';

import { TCustomerAddressFormValues } from 'src/lib/components/Customer';
import { TCountry, TRegion } from 'src/lib/types/graphql/Country';
import { customFormikValidate } from 'src/lib/util/customFormikValidate';
import { useCountries } from 'src/peregrine/lib/talons/adeoweb/Countries/useCountries';

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
    country_code: yup.string().required(),
    default_billing: yup.bool(),
    default_shipping: yup.bool()
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
