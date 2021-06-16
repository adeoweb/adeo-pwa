import { useFormik } from 'formik';
import * as yup from 'yup';

import React, {
    Fragment,
    FunctionComponent,
    useCallback,
    useEffect
} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useHistory } from 'src/lib/drivers';
import CREATE_ACCOUNT_MUTATION from 'src/lib/queries/createAccount.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import GET_CUSTOMER_CART_QUERY from 'src/lib/queries/getCustomerCart.graphql';
import MERGE_CARTS_MUTATION from 'src/lib/queries/mergeCarts.graphql';
import SIGN_IN_MUTATION from 'src/lib/queries/signIn.graphql';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import { errorMessages } from 'src/lib/util/errorMessages';
import {
    TUseCreateAccountFormValues,
    useCreateAccount
} from 'src/peregrine/lib/talons/adeoweb/CreateAccount/useCreateAccount';

const AccountForm: FunctionComponent = () => {
    const history = useHistory();

    const redirectToHomepage = useCallback(() => {
        history.push('/');
    }, [history]);

    const talonProps = useCreateAccount({
        createAccountQuery: CREATE_ACCOUNT_MUTATION,
        signInMutation: SIGN_IN_MUTATION,
        customerQuery: GET_CUSTOMER_QUERY,
        getCustomerCartQuery: GET_CUSTOMER_CART_QUERY,
        mergeCartsMutation: MERGE_CARTS_MUTATION,
        signOutMutation: SIGN_OUT_MUTATION,
        onSubmit: () => redirectToHomepage
    });

    const {
        handleSubmit: talonHandleSubmit,
        isDisabled,
        isSignedIn
    } = talonProps;

    useEffect(() => {
        if (isSignedIn) {
            redirectToHomepage();
        }
    }, [isSignedIn, redirectToHomepage]);

    const { t } = useTranslation(['validations', 'customer']);

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required().email(),
        password: yup
            .string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                t(`validations:${errorMessages.password}` as const)
            )
            .required(),
        confirm: yup
            .string()
            .oneOf(
                [yup.ref('password'), null],
                t(`validations:${errorMessages.password}` as const)
            ),
        isSubscribed: yup.boolean()
    });

    const submitCallback = (values: TUseCreateAccountFormValues) => {
        talonHandleSubmit(values);
    };

    const { handleSubmit, handleChange, values, errors, touched } =
        useFormik<TUseCreateAccountFormValues>({
            validationSchema: schema,
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirm: '',
                isSubscribed: false
            },
            onSubmit: submitCallback
        });

    return (
        <Fragment>
            <Container>
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6} className={'required-field'}>
                            <Form.Label>{t('customer:First Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={
                                    !!(errors.firstName && touched.firstName)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>

                            <Form.Label>{t('customer:Last Name')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={
                                    !!(errors.lastName && touched.lastName)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>

                            <Form.Group>
                                <Form.Check
                                    custom
                                    type={'checkbox'}
                                    name="isSubscribed"
                                    id={'isSubscribed'}
                                    onChange={handleChange}
                                    label={t('customer:Sign Up for Newsletter')}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className={'required-field'}>
                            <Form.Label>{t('customer:Email')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!(errors.email && touched.email)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>

                            <Form.Label>{t('customer:Password')}</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!(errors.password && touched.email)}
                                required
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>

                            <Form.Label>
                                {t('customer:Confirm Password')}
                            </Form.Label>
                            <Form.Control
                                type="password"
                                name="confirm"
                                value={values.confirm}
                                onChange={handleChange}
                                isInvalid={!!(errors.confirm && touched.email)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.confirm}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-footer">
                                <Button type="submit" disabled={isDisabled}>
                                    {t('customer:Create an Account')}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <div className="mb-5" />
        </Fragment>
    );
};

export default AccountForm;
