import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, resourceUrl } from 'src/lib/drivers';

type TBreadcrumbLinkProps = {
    text: string;
    path: string;
};

const BreadcrumbsLink: FunctionComponent<TBreadcrumbLinkProps> = ({
    text,
    path
}) => {
    const { t } = useTranslation();

    return <Link to={resourceUrl(path)}>{t(text)}</Link>;
};

export default BreadcrumbsLink;
