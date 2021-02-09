import React, { FunctionComponent } from 'react';
import defaultClasses from './CookieWarning.scss';
import { Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CmsBlockGroup from 'src/lib/components/CmsBlock';
import { useCookieWarning } from 'src/peregrine/lib/talons/adeoweb/CookieWarning/useCookieWarning';

const CookieWarning: FunctionComponent = () => {
    const { t } = useTranslation();

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
