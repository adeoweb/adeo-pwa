import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

const SummaryWrapper: FunctionComponent = ({ children }) => {
    const { t } = useTranslation('order');

    return (
        <div className="order-summary">
            <h3>{t('Summary')}</h3>
            {children}
        </div>
    );
};

export default SummaryWrapper;
