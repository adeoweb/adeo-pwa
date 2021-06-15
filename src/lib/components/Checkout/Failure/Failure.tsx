import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const Failure: FunctionComponent = () => {
    const { t } = useTranslation('common');

    return <p>{t('Failure')}</p>;
};

export default Failure;
