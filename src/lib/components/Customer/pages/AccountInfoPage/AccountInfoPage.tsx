import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { Link } from 'src/lib/drivers';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

const AccountInfoPage: FunctionComponent = () => {
    const { t } = useTranslation();
    const [
        {
            currentUser: { firstname, lastname, email }
        }
    ] = useUserContext();

    return (
        <div>
            <h3>{t('Account Information')}</h3>
            <Card>
                <Card.Header>
                    {t('Contact Information')}
                    <Link
                        to={CustomerRoutes.editCustomer.url}
                        className="card-edit"
                    >
                        {t('Edit')}
                    </Link>
                </Card.Header>
                <Card.Body>
                    <p>
                        {firstname} {lastname}
                        <br />
                        {email}
                        <br />
                        <Link to={CustomerRoutes.changePassword.url}>
                            {t('Change Password')}
                        </Link>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AccountInfoPage;
