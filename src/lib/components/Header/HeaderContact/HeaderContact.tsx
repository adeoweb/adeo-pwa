import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { useHeaderContact } from 'src/peregrine/lib/talons/adeoweb/Header/useHeaderContact';

const HeaderContact: FunctionComponent = () => {
    const { t } = useTranslation('common');
    const { storePhone } = useHeaderContact();

    if (!storePhone) {
        return null;
    }

    return (
        <div className="header-contact">
            <span>{t('Call us now')}</span>
            <a href={`tel:${storePhone}`}>
                <strong>{storePhone}</strong>
            </a>
        </div>
    );
};

export default HeaderContact;
