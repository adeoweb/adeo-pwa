import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSuccess } from 'src/peregrine/lib/talons/adeoweb/Checkout/useSuccess';

const Success: FunctionComponent = () => {
    const { t } = useTranslation();
    const { orderNumber } = useSuccess();

    return (
        <Fragment>
            <h1 className="text-center text-secondary">
                {t('Thank you for your order!')}
            </h1>
            {orderNumber && (
                <h3 className="text-center text-secondary">
                    {t('Order number')} {orderNumber}
                </h3>
            )}
        </Fragment>
    );
};

export default Success;
