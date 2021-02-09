import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'src/lib/drivers';

type TInfoBoxProps = {
    title: string;
    editRoute?: string;
};

const InfoBox: FunctionComponent<TInfoBoxProps> = ({
    title,
    editRoute,
    children
}) => {
    const { t } = useTranslation();

    return (
        <div className="checkout-info-box">
            <h3 className="step-title">
                {title}
                {editRoute && (
                    <Link
                        to={editRoute}
                        title={t('Edit')}
                        className="step-title-edit"
                    >
                        <span className="sr-only">{t('Edit')}</span>
                        <i className="icon-pencil" />
                    </Link>
                )}
            </h3>
            {children}
        </div>
    );
};

export default InfoBox;
