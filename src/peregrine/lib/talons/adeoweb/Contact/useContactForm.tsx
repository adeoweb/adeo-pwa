import { useFormik } from 'formik';

import { TUseContactForm, TUseContactFormValues } from './useContactFormTypes';
import { create as object } from 'yup/lib/object';
import { create as string } from 'yup/lib/string';

export const useContactForm = (): TUseContactForm => {
    const initValues: TUseContactFormValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const formSchema = object({
        name: string().required(),
        email: string().required().email(),
        phone: string(),
        message: string().required()
    });

    const handleFormSubmit = (values: TUseContactFormValues) => {
        console.log(values);
    };

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        validationSchema: formSchema,
        initialValues: initValues,
        onSubmit: handleFormSubmit
    });

    return {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched
    };
};
