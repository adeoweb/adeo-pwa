import React, { FunctionComponent } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useContactForm } from 'src/peregrine/lib/talons/adeoweb/Contact/useContactForm';

const ContactForm: FunctionComponent = () => {
    const { t } = useTranslation();

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched
    } = useContactForm({
        initialValues
    });

    return (
        <Col md={8}>
            <h2 className="light-title">
                <strong>{t('Contact Us')}</strong>
            </h2>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="required-field">
                    <Form.Label>{t('Name')}</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={!!(errors.name && touched.name)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="required-field">
                    <Form.Label>{t('Email')}</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!(errors.email && touched.email)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{t('Phone Number')}</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!(errors.phone && touched.phone)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="required-field">
                    <Form.Label>{t('What’s on your mind?')}</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={1}
                        cols={30}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={!!(errors.message && touched.message)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    {t('Submit')}
                </Button>
            </Form>
        </Col>
    );
};

export default ContactForm;
