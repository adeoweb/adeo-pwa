import { useFormik } from 'formik';
import * as yup from 'yup';

import React, { FunctionComponent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Newsletter: FunctionComponent = () => {
    const { t } = useTranslation('common');
    const schema = yup.object({
        email: yup.string().required().email()
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
