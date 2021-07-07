import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import AuthUserToRoot from 'src/lib/components/AuthUserToRoot';
import PageHeader from 'src/lib/components/PageHeader';

import CreateAccountForm from '../../AccountForm';

const CreateAccountPage: FunctionComponent = () => {
    const { t } = useTranslation('customer');

    return (
        <AuthUserToRoot>
            <PageHeader>{t('Create New Customer Account')}</PageHeader>
            <CreateAccountForm />
        </AuthUserToRoot>
    );
};

export default CreateAccountPage;
