import { useFormik } from 'formik';
import * as yup from 'yup';

export const useContactForm = ({ initialValues = {} }) => {
    const handleFormSubmit = values => {
        console.log(values);
    };

    const formSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string(),
        message: yup.string().required()
    });

    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        validationSchema: formSchema,
        initialValues,
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
