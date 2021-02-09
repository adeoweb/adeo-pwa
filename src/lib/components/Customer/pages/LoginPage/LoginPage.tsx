import React, { FunctionComponent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'src/lib/drivers';
import RouterRoutes from 'src/lib/RouterRoutes';
import { useTranslation } from 'react-i18next';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import PageHeader from 'src/lib/components/PageHeader';
import LoginPageHeading from 'src/lib/components/Customer/pages/LoginPage/LoginPageHeading';
import LoginForm from 'src/lib/components/Customer/LoginForm';
import AuthUserToRoot from 'src/lib/components/AuthUserToRoot';
import { CustomerModalTypes } from 'src/lib/constants/customer';

const LoginPage: FunctionComponent = () => {
    const { t } = useTranslation();

    const [, { setCustomerModal }] = useAppContext();

    const onForgotPasswordClick = () => {
        setCustomerModal(CustomerModalTypes.PASSWORD_RECOVERY);
    };

    return (
        <AuthUserToRoot>
            <PageHeader>{t('Customer Login')}</PageHeader>

            <Container>
                <Row>
                    <Col md={6}>
                        <LoginPageHeading
                            title={t('Login')}
                            paragraph={t(
                                'If you have an account with us, please log in.'
                            )}
                        />
                        <LoginForm openForgotPassword={onForgotPasswordClick} />
                    </Col>
                    <Col md={6}>
                        <LoginPageHeading
                            title={t('New Customers')}
                            paragraph={t('NewCustomerLoginPageText')}
                        />
                        <div className="form-footer">
                            <Link
                                to={RouterRoutes.createAccountPage.url}
                                className="btn btn-primary"
                            >
                                {t('Create an Account')}
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="mb-5" />
        </AuthUserToRoot>
    );
};

export default LoginPage;
