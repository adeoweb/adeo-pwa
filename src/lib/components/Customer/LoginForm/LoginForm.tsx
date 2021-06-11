import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useSignIn } from 'src/peregrine/lib/talons/adeoweb/SignIn/useSignIn';
import MERGE_CARTS_MUTATION from 'src/lib/queries/mergeCarts.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import GET_CUSTOMER_CART_QUERY from 'src/lib/queries/getCustomerCart.graphql';
import SIGN_IN_MUTATION from 'src/lib/queries/signIn.graphql';
import SIGN_OUT_MUTATION from 'src/lib/queries/signOut.graphql';
import { errorMessages } from 'src/lib/util/errorMessages';
import { TGenerateCustomerTokenProps } from 'src/lib/types/graphql/SignIn';

type TLoginFormProps = {
    openForgotPassword: () => void;
    isSignedInCallback?: () => void;
};

const LoginForm: FunctionComponent<TLoginFormProps> = ({
    openForgotPassword,
    isSignedInCallback
}) => {
    const { t } = useTranslation();

    const talonProps = useSignIn({
        signInMutation: SIGN_IN_MUTATION,
        customerQuery: GET_CUSTOMER_QUERY,
        getCustomerCartQuery: GET_CUSTOMER_CART_QUERY,
        mergeCartsMutation: MERGE_CARTS_MUTATION,
        signOutMutation: SIGN_OUT_MUTATION
    });

    const { handleSubmit: talonHandleSubmit, isBusy, isSignedIn } = talonProps;

    useEffect(() => {
        if (isSignedIn && typeof isSignedInCallback === 'function') {
            isSignedInCallback();
        }
    }, [isSignedIn, isSignedInCallback]);

    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup
            .string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                t(errorMessages.password)
            )
            .required()
    });

    const submitCallback = (values: TGenerateCustomerTokenProps) => {
        talonHandleSubmit(values);
    };

    const { handleSubmit, handleChange, values, errors, touched } =
        useFormik<TGenerateCustomerTokenProps>({
            validationSchema: schema,
            initialValues: {
                email: '',
                password: ''
            },
            onSubmit: submitCallback
        });

    return (
        <Form noValidate onSubmit={handleSubmit}>
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

            <div className="form-footer">
                <button
                    type="submit"
                    disabled={isBusy}
                    className="btn btn-primary"
                >
                    {t('Login')}
                </button>
                <Button
                    variant="link"
                    className="forget-pass"
                    onClick={openForgotPassword}
                >
                    {t('Forgot your password?')}
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
