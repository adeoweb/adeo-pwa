import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useFooterContact } from 'src/peregrine/lib/talons/adeoweb/Footer/useFooterContact';

const ContactInformation: FunctionComponent = () => {
    const { t } = useTranslation();
    const { storeAddress, storePhone, storeEmail, storeWorkingHours } =
        useFooterContact();

    return (
        <div className="col-lg-4 col-md-6">
            <div className="widget">
                <ul className="contact-info">
                    {storeAddress && (
                        <li>
                            <span className="contact-info-label">
                                {t('Address')}:
                            </span>
                            {storeAddress}
                        </li>
                    )}
                    {storePhone && (
                        <li>
                            <span className="contact-info-label">
                                {t('Phone')}:
                            </span>
                            {t('Toll Free')} <a href="tel:">{storePhone}</a>
                        </li>
                    )}
                    {storeEmail && (
                        <li>
                            <span className="contact-info-label">
                                {t('Email')}:
                            </span>{' '}
                            <a href="mailto:mail@example.com">{storeEmail}</a>
                        </li>
                    )}
                    {storeWorkingHours && (
                        <li>
                            <span className="contact-info-label">
                                {t('Working Days/Hours')}:
                            </span>
                            {storeWorkingHours}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ContactInformation;
