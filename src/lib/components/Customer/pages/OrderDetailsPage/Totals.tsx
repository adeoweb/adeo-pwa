import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Price } from '@magento/peregrine';

interface ITotalsProps {
    grandTotal: number;
    subtotal: number;
    shippingAmount: number;
    taxAmount: number;
}

const Totals: FunctionComponent<ITotalsProps> = ({
    grandTotal,
    subtotal,
    shippingAmount,
    taxAmount
}) => {
    const { t } = useTranslation();

    return (
        <div className="customer-order-totals">
            <div className="customer-order-totals-container">
                <h4 className="customer-order-totals-title">
                    {t('Order information')}
                </h4>
                <div className="customer-order-totals-info">
                    <span>{t('Intermediate')}</span>
                    <span>
                        <Price
                            value={subtotal}
                            // TODO: get currency code from backend
                            currencyCode={'EUR'}
                        />
                    </span>
                </div>
                <div className="customer-order-totals-info">
                    <span>{t('TAX')}</span>
                    <span>
                        <Price
                            value={taxAmount}
                            // TODO: get currency code from backend
                            currencyCode={'EUR'}
                        />
                    </span>
                </div>
                <div className="customer-order-totals-info customer-order-totals-info-last">
                    <span>{t('Delivery')}</span>
                    <span>
                        <Price
                            value={shippingAmount}
                            // TODO: get currency code from backend
                            currencyCode={'EUR'}
                        />
                    </span>
                </div>
                <div className="customer-order-totals-grand">
                    <span>{t('Pay total')}</span>
                    <span>
                        <Price
                            value={grandTotal}
                            // TODO: get currency code from backend
                            currencyCode={'EUR'}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Totals;
