import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Price } from '@magento/peregrine';
import { TMoney } from 'src/lib/types/graphql/Money';

interface ITotalsProps {
    grandTotal?: TMoney;
    subtotal?: TMoney;
    shippingAmount?: TMoney;
    taxAmount?: TMoney;
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
                {subtotal != null && (
                    <div className="customer-order-totals-info">
                        <span>{t('Intermediate')}</span>
                        <span>
                            <Price
                                value={subtotal?.value}
                                currencyCode={subtotal?.currency}
                            />
                        </span>
                    </div>
                )}
                {taxAmount != null &&
                <div className="customer-order-totals-info">
                    <span>{t('TAX')}</span>
                    <span>
                        <Price
                            value={taxAmount.value}
                            currencyCode={taxAmount.currency}
                            />
                    </span>
                </div>
                        }
                        {shippingAmount != null &&
                <div className="customer-order-totals-info customer-order-totals-info-last">
                    <span>{t('Delivery')}</span>
                    <span>
                        <Price
                            value={shippingAmount.value}
                            currencyCode={shippingAmount.currency}
                            />
                    </span>
                </div>
                        }
                        {grandTotal != null &&
                <div className="customer-order-totals-grand">
                    <span>{t('Pay total')}</span>
                    <span>
                        <Price
                            value={grandTotal.value}
                            currencyCode={grandTotal.currency}
                            />
                    </span>
                </div>
                        }
            </div>
        </div>
    );
};

export default Totals;
