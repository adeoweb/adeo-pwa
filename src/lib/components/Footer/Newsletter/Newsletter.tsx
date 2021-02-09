import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';

const Newsletter: FunctionComponent = () => {
    const { t } = useTranslation();
    const schema = yup.object({
        email: yup
            .string()
            .required()
            .email(
                t(
                    'Please enter a valid email address (Ex: johndoe@domain.com).'
                )
            )
    });
    // ToDo: add data processing
    const submitCallback = () => {
        console.log('newsletter@email.com');
    };
    const { handleSubmit, handleChange, values, errors, touched } = useFormik({
        validationSchema: schema,
        initialValues: {
            email: '',
            city: ''
        },
        onSubmit: submitCallback
    });

    return (
        <div className="widget widget-newsletter">
            <h4 className="widget-title">{t('Subscribe newsletter')}</h4>
            <p>
                {t(
                    'Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.'
                )}
            </p>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!(errors.email && touched.email)}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
                <Button type="submit">
                    {t('Subscribe')}
                    <i className="icon-angle-right" />
                </Button>
            </Form>
        </div>
    );
};

export default Newsletter;
