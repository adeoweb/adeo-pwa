import { useFormik } from 'formik';
import * as yup from 'yup';

import { TUseContactForm, TUseContactFormValues } from './useContactFormTypes';

export const useContactForm = (): TUseContactForm => {
    const initValues: TUseContactFormValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const formSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string(),
        message: yup.string().required()
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
