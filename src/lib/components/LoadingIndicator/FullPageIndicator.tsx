import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import LoadingIndicator from './LoadingIndicator';

const FullPageIndicator: FunctionComponent = () => {
    const { t } = useTranslation('common');

    return (
        <LoadingIndicator global={true}>
            {t('Fetching Data...')}
        </LoadingIndicator>
    );
};

export default FullPageIndicator;
