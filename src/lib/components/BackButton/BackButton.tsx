import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import ArrowIcon from 'src/lib/assets/icons/ArrowIcon';
import { Link } from 'src/lib/drivers';

interface IBackButtonProps {
    url: string;
}

const BackButton: FunctionComponent<IBackButtonProps> = ({ url }) => {
    const { t } = useTranslation();

    return (
        <Link to={url} className="back-button">
            <ArrowIcon />
            {t('back')}
        </Link>
    );
};

export default BackButton;
