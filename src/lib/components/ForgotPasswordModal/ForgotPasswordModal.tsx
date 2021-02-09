import React, { FunctionComponent } from 'react';
import { Form, Button } from 'react-bootstrap';
import defaultClasses from './ForgotPasswordModal.scss';
import { useTranslation } from 'react-i18next';

const ForgotPasswordModal: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className={defaultClasses.wrapper}>
            <div className={defaultClasses.header}>
                <h3>{t('Password recovery')}</h3>
            </div>
            <div className={defaultClasses.content}>
                <p>
                    {t(
                        'Enter the email address registered to your account so that we could send you a password recovery link.'
                    )}
                </p>
                <Form>
                    <Form.Group className={defaultClasses.formGroup}>
                        <Form.Label>{t('Email')}</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder={t('Enter a valid email address')}
                        />
                    </Form.Group>
                    <Button variant="secondary">
                        {t('Send recovery link')}
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
