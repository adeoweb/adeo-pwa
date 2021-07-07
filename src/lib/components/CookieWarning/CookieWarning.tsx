import React, { FunctionComponent } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import CmsBlockGroup from 'src/lib/components/CmsBlock';
import { useCookieWarning } from 'src/peregrine/lib/talons/adeoweb/CookieWarning/useCookieWarning';

import defaultClasses from './CookieWarning.scss';

const CookieWarning: FunctionComponent = () => {
    const { t } = useTranslation('common');

    const { allowCookies, handleAllowCookiesClick } = useCookieWarning();

    if (allowCookies) {
        return null;
    }

    return (
        <div className={defaultClasses.warningContainer}>
            <Container className={defaultClasses.warningWrapper}>
                <div className={defaultClasses.textWrapper}>
                    <CmsBlockGroup identifiers="cookie-warning" />
                </div>
                <Button
                    variant="secondary"
                    className={defaultClasses.button}
                    onClick={handleAllowCookiesClick}
                >
                    {t('Accept')}
                </Button>
            </Container>
        </div>
    );
};

export default CookieWarning;
