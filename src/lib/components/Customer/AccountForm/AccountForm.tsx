import React, {
    Fragment,
    FunctionComponent,
    useCallback,
    useEffect
} from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    TUseCreateAccountFormValues,
    useCreateAccount
} from 'src/peregrine/lib/talons/adeoweb/CreateAccount/useCreateAccount';
import CREATE_ACCOUNT_MUTATION from 'src/lib/queries/createAccount.graphql';
import SIGN_IN_MUTATION from 'src/lib/queries/signIn.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import GET_CUSTOMER_CART_QUERY from 'src/lib/queries/getCustomerCart.graphql';
import MERGE_CARTS_MUTATION from 'src/lib/queries/mergeCarts.graphql';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'src/lib/drivers';
import { errorMessages } from 'src/lib/util/errorMessages';

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

    const { t } = useTranslation();

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required().email(),
        password: yup
            .string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                t(errorMessages.password)
            )
            .required(),
        confirm: yup
            .string()
            .oneOf([yup.ref('password'), null], t(errorMessages.passwordMatch)),
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
                            <Form.Label>{t('First Name')}</Form.Label>
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

                            <Form.Label>{t('Last Name')}</Form.Label>
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
                                    label={t('Sign Up for Newsletter')}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} className={'required-field'}>
                            <Form.Label>{t('Email')}</Form.Label>
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

                            <Form.Label>{t('Password')}</Form.Label>
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

                            <Form.Label>{t('Confirm Password')}</Form.Label>
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
                                    {t('Create an Account')}
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
