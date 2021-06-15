import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { TCartItem } from 'src/lib/types/graphql/CartItem';

import ProductRow from './ProductRow';

type TProductsTable = {
    items: TCartItem[];
    currencyCode: string;
};

const ProductsTable: FunctionComponent<TProductsTable> = ({
    items,
    currencyCode
}) => {
    const { t } = useTranslation(['product', 'order']);

    if (!items || !Array.isArray(items) || !items.length) {
        return null;
    }

    return (
        <div className="checkout-payment">
            <h2 className="step-title">
                {t('order:Products')} ({items.length})
            </h2>
            <div className="cart-table-container">
                <table className="table table-cart">
                    <thead>
                        <tr>
                            <th className="product-col">
                                {t('product:Product')}
                            </th>
                            <th className="price-col">{t('product:Price')}</th>
                            <th className="qty-col">{t('product:Qty')}</th>
                            <th>{t('order:Subtotal')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <ProductRow
                                key={item.id}
                                item={item}
                                currencyCode={currencyCode}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsTable;
