import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import adeoWebLogo from './icons/adeoweb_white.svg';

const AdeoWebSignature: FunctionComponent = () => {
    const { t } = useTranslation('common');

    return (
        <a
            href="https://www.adeoweb.biz"
            target="_blank"
            rel="noopener"
            className="footer-adeoweb-signature"
        >
            <img src={adeoWebLogo} alt={'AdeoWeb'} />
            <span>{t('ecommerce solutions')}</span>
        </a>
    );
};

export default AdeoWebSignature;
