import React, { FunctionComponent } from 'react';
import LoadingIndicator from './LoadingIndicator';
import { useTranslation } from 'react-i18next';

const FullPageIndicator: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <LoadingIndicator global={true}>
            {t('Fetching Data...')}
        </LoadingIndicator>
    );
};

export default FullPageIndicator;
