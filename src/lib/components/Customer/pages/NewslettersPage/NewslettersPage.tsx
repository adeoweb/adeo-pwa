import React, { FunctionComponent, useEffect } from 'react';
import { Card, Form, FormCheck } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import UPDATE_CUSTOMER_MUTATION from 'src/lib/queries/updateCustomer.graphql';
import { useEditCustomer } from 'src/peregrine/lib/talons/adeoweb/Customer/useEditCustomer';

const NewslettersPage: FunctionComponent = () => {
    const { t } = useTranslation('customer');
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        isDirty,
        isUpdatingCustomer
    } = useEditCustomer({
        updateCustomerMutation: UPDATE_CUSTOMER_MUTATION
    });

    useEffect(() => {
        if (isDirty && isValid) {
            handleSubmit();
        }
    }, [isDirty, isValid, values.is_subscribed, handleSubmit]);

    return (
        <Card>
            <Card.Header>{t('Newsletter Subscriptions')}</Card.Header>
            <Card.Body>
                <Form.Group className="form-group">
                    <Form.Check id="is_subscribed" custom={true}>
                        <FormCheck.Input
                            checked={Boolean(values.is_subscribed)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isUpdatingCustomer}
                        />
                        <FormCheck.Label>
                            {t('Main newsletter')}
                        </FormCheck.Label>
                    </Form.Check>
                </Form.Group>
            </Card.Body>
        </Card>
    );
};

export default NewslettersPage;
