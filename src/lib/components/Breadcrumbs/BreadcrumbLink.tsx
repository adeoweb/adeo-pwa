import React, { FunctionComponent } from 'react';
import { TFuncKey, useTranslation } from 'react-i18next';

import { Link, resourceUrl } from 'src/lib/drivers';

type TBreadcrumbLinkProps = {
    text: string;
    path: string;
};

const BreadcrumbsLink: FunctionComponent<TBreadcrumbLinkProps> = ({
    text,
    path
}) => {
    const { t } = useTranslation('common');

    return <Link to={resourceUrl(path)}>{t(text as TFuncKey<'common'>)}</Link>;
};

export default BreadcrumbsLink;
