import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { Price } from '@magento/peregrine';

import DetailsAccordion from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsAccordion';
import { TOrderItem } from 'src/lib/types/graphql/Customer';

interface IDetailsProductsProps {
    items: TOrderItem[];
}

const DetailsProducts: FunctionComponent<IDetailsProductsProps> = ({
    items
}) => {
    const { t } = useTranslation(['order', 'product']);

    if (!Array.isArray(items) || !items.length) {
        return null;
    }

    return (
        <DetailsAccordion
            title={`${t('order:Goods')} (${items.length})`}
            contentContainerClass="customer-order-products"
        >
            {items.map(({ name, price_incl_tax: priceInclTax, qty, sku }) => (
                <div className="customer-order-product" key={sku}>
                    <div className="customer-order-product-details-block">
                        {/* TODO: get image url and label from backend */}
                        {/* TODO: uncomment when ready */}
                        {/*<Image src={''} alt={''} width={80} height={75} />*/}
                        <div>
                            <h3 className="customer-order-product-title">
                                {name}
                            </h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{t('product:Product code')}</th>
                                        <td>{sku}</td>
                                    </tr>
                                    {/* TODO: uncomment when ready */}
                                    {/*<tr>*/}
                                    {/*    <th>{t('Unit')}</th>*/}
                                    {/*    /!* TODO: get units from backend *!/*/}
                                    {/*    <td>matas</td>*/}
                                    {/*</tr>*/}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="customer-order-product-order-block">
                        <div className="customer-order-product-order-info">
                            <div className="customer-order-product-description">
                                {t('product:Quantity')}
                            </div>
                            <div className="customer-order-product-value">
                                {qty}
                            </div>
                        </div>
                        <div className="customer-order-product-order-info">
                            <div className="customer-order-product-description">
                                {t('product:Price with tax')}
                            </div>
                            <div className="customer-order-product-value customer-order-product-price">
                                <Price
                                    value={priceInclTax?.value}
                                    // TODO: get currency code from backend
                                    currencyCode={priceInclTax?.currency}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </DetailsAccordion>
    );
};

export default DetailsProducts;
