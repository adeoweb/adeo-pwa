import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState
} from 'react';
import { Button, Col, Container, Form, FormCheck, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import PasswordField from 'src/lib/components/PasswordField';
import { useHistory } from 'src/lib/drivers';
import UPDATE_CUSTOMER_MUTATION from 'src/lib/queries/updateCustomer.graphql';
import { useEditCustomer } from 'src/peregrine/lib/talons/adeoweb/Customer/useEditCustomer';

const EditCustomerInfoPage: FunctionComponent = () => {
    const { t } = useTranslation(['customer', 'common']);
    const history = useHistory();
    const [isChangeEmail, setIsChangeEmail] = useState(false);

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
        isValid,
        isSubmitted,
        isUpdatingCustomer,
        updateCustomerError
    } = useEditCustomer({
        updateCustomerMutation: UPDATE_CUSTOMER_MUTATION,
        isChangeEmail
    });

    const controlEvents = {
        onChange: handleChange,
        onBlur: handleBlur
    };

    const handleIsChangeEmailChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setIsChangeEmail(Boolean(e.target.checked));
        },

        [setIsChangeEmail]
    );

    useEffect(() => {
        if (isSubmitted && !isUpdatingCustomer && !updateCustomerError) {
            goBack();
        }
    }, [isSubmitted, isUpdatingCustomer, updateCustomerError, goBack]);

    return (
        <div className="mb-2">
            {isUpdatingCustomer && <LoadingIndicator />}
            <Button variant="link" className="px-0 mb-2" onClick={goBack}>
                <i className="fas fa-arrow-left mr-2" />
                {t('common:Back')}
            </Button>

            <Container>
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6} className="px-0 pr-md-4">
                            <h3>{t('customer:Edit customer info')}</h3>
                            <Form.Group className="required-field">
                                <Form.Label>
                                    {t('customer:First Name')}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    value={values.firstname}
                                    isInvalid={
                                        !!(
                                            errors.firstname &&
                                            touched.firstname
                                        )
                                    }
                                    {...controlEvents}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstname}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="required-field">
                                <Form.Label>
                                    {t('customer:Last Name')}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={values.lastname}
                                    isInvalid={
                                        !!(errors.lastname && touched.lastname)
                                    }
                                    {...controlEvents}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.lastname}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        {isChangeEmail && (
                            <Col md={6} className="px-0 pl-md-4">
                                <h3>{t('customer:Change Email')}</h3>
                                <Form.Group className="required-field">
                                    <Form.Label>
                                        {t('customer:Email')}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        isInvalid={
                                            !!(errors.email && touched.email)
                                        }
                                        {...controlEvents}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="required-field">
                                    <Form.Label>
                                        {t('customer:Current password')}
                                    </Form.Label>
                                    <PasswordField
                                        name="password"
                                        value={values.password}
                                        isInvalid={
                                            !!(
                                                errors.password &&
                                                touched.password
                                            )
                                        }
                                        {...controlEvents}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* TODO: add phone number field */}
                                {/*<Form.Group className="required-field">*/}
                                {/*    <Form.Label>{t('customer:Phone Number')}</Form.Label>*/}
                                {/*    <Form.Control*/}
                                {/*        type="text"*/}
                                {/*        name="phone"*/}
                                {/*        value={values.phone}*/}
                                {/*        isInvalid={*/}
                                {/*            !!(*/}
                                {/*                errors.phone &&*/}
                                {/*                touched.phone*/}
                                {/*            )*/}
                                {/*        }*/}
                                {/*        {...controlEvents}*/}
                                {/*    />*/}
                                {/*    <Form.Control.Feedback type="invalid">*/}
                                {/*        {errors.phone}*/}
                                {/*    </Form.Control.Feedback>*/}
                                {/*</Form.Group>*/}
                            </Col>
                        )}
                    </Row>
                    <Row>
                        <Col md={6} className="px-0">
                            <Form.Group className="form-group required-field">
                                <Form.Check id="isChangeEmail" custom={true}>
                                    <FormCheck.Input
                                        checked={isChangeEmail}
                                        onChange={handleIsChangeEmailChange}
                                    />
                                    <FormCheck.Label>
                                        {t('customer:Change Email')}
                                    </FormCheck.Label>
                                </Form.Check>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Button
                variant="outline-secondary"
                className="mr-4"
                onClick={goBack}
            >
                {t('common:Cancel')}
            </Button>
            <Button
                variant="primary"
                disabled={!isValid}
                onClick={() => handleSubmit()}
            >
                {t('common:Save')}
            </Button>
        </div>
    );
};

export default EditCustomerInfoPage;
