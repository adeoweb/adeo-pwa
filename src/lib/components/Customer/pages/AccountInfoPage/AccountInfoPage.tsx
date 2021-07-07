import React, { FunctionComponent } from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import { Link } from 'src/lib/drivers';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

const AccountInfoPage: FunctionComponent = () => {
    const { t } = useTranslation(['customer', 'common']);
    const [
        {
            currentUser: { firstname, lastname, email }
        }
    ] = useUserContext();

    return (
        <div>
            <h3>{t('customer:Account Information')}</h3>
            <Card>
                <Card.Header>
                    {t('customer:Contact Information')}
                    <Link
                        to={CustomerRoutes.editCustomer.url}
                        className="card-edit"
                    >
                        {t('common:Edit')}
                    </Link>
                </Card.Header>
                <Card.Body>
                    <p>
                        {firstname} {lastname}
                        <br />
                        {email}
                        <br />
                        <Link to={CustomerRoutes.changePassword.url}>
                            {t('customer:Change Password')}
                        </Link>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AccountInfoPage;
