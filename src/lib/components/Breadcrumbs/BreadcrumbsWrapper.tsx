import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import BreadcrumbsLink from 'src/lib/components/Breadcrumbs/BreadcrumbLink';

const BreadcrumbsWrapper: FunctionComponent = ({ children }) => {
    const { t } = useTranslation('common');

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <Container>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <BreadcrumbsLink text={t('Home')} path={'/'} />
                    </li>
                    {children}
                </ol>
            </Container>
        </nav>
    );
};

export default BreadcrumbsWrapper;
