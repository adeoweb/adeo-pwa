import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const SimpleError: FunctionComponent = () => {
    const { t } = useTranslation();
    return <div>{t('Error')}</div>;
};

export default SimpleError;
