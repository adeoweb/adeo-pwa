import React, { FunctionComponent } from 'react';
import { Link } from 'src/lib/drivers';
import { useTranslation } from 'react-i18next';
import ArrowIcon from 'src/lib/assets/icons/ArrowIcon';

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
