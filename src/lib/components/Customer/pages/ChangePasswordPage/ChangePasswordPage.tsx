import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import PasswordField from 'src/lib/components/PasswordField';
import { useHistory } from 'src/lib/drivers';
import CHANGE_PASSWORD_MUTATION from 'src/lib/queries/changePassword.graphql';
import { useChangePassword } from 'src/peregrine/lib/talons/adeoweb/Customer/useChangePassword';

const ChangePasswordPage: FunctionComponent = () => {
    const { t } = useTranslation(['common', 'customer']);
    const history = useHistory();

    const goBack = useCallback(() => {
        history.push(CustomerRoutes.account.url);
    }, [history]);

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isDirty,
        isValid,
        isSubmitted,
        isChangingPassword,
        changePasswordError
    } = useChangePassword({
        changePasswordMutation: CHANGE_PASSWORD_MUTATION
    });

    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    useEffect(() => {
        if (isSubmitted && !isChangingPassword && !changePasswordError) {
            goBack();
        }
    }, [isSubmitted, isChangingPassword, changePasswordError, goBack]);

    return (
        <div className="mb-2">
            {isChangingPassword && <LoadingIndicator />}
            <Button variant="link" className="px-0 mb-2" onClick={goBack}>
                <i className="fas fa-arrow-left mr-2" />
                {t('common:Back')}
            </Button>
            <h3>{t('customer:Change Password')}</h3>

            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="required-field">
                    <Form.Label>{t('customer:Current password')}</Form.Label>
                    <PasswordField
                        name="currentPassword"
                        value={values.currentPassword}
                        isInvalid={
                            !!(
                                errors.currentPassword &&
                                touched.currentPassword
                            )
                        }
                        {...controlEvents}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.currentPassword}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="required-field">
                    <Form.Label>{t('customer:New password')}</Form.Label>
                    <PasswordField
                        name="newPassword"
                        value={values.newPassword}
                        isInvalid={
                            !!(errors.newPassword && touched.newPassword)
                        }
                        {...controlEvents}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.newPassword}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="required-field">
                    <Form.Label>{t('customer:Repeat new password')}</Form.Label>
                    <PasswordField
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        isInvalid={
                            !!(
                                errors.passwordConfirmation &&
                                touched.passwordConfirmation
                            )
                        }
                        {...controlEvents}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.passwordConfirmation}
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>

            <Button
                variant="outline-secondary"
                className="mr-4"
                onClick={goBack}
            >
                {t('common:Cancel')}
            </Button>
            <Button
                variant="primary"
                disabled={!isDirty || !isValid}
                onClick={() => handleSubmit()}
            >
                {t('common:Save')}
            </Button>
        </div>
    );
};

export default ChangePasswordPage;
