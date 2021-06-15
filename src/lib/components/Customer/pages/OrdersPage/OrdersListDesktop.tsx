import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import PdfIcons from 'src/lib/assets/icons/PdfIcons';
import { IOrdersListProps } from 'src/lib/components/Customer/pages/OrdersPage/OrdersListTypes';
import { Link } from 'src/lib/drivers';

const OrdersListDesktop: FunctionComponent<IOrdersListProps> = ({
    orders,
    createDetailsUrl
}) => {
    const { t } = useTranslation(['order', 'common']);

    return (
        <div className="customer-orders-desktop-table">
            <table>
                <tbody>
                    <tr>
                        <th>{t('order:Order No.')}</th>
                        <th>{t('order:Status')}</th>
                        <th>{t('order:Invoice')}</th>
                        <th>{t('order:Order Total')}</th>
                        <th>{t('order:Date')}</th>
                    </tr>
                    {orders.map(
                        ({
                            id,
                            created_at: createdAt,
                            grand_total: grandTotal,
                            order_number: orderNumber,
                            status
                        }) => {
                            if (!id) {
                                return;
                            }

                            const detailsUrl = createDetailsUrl(id);

                            return (
                                <tr key={id}>
                                    <td>
                                        <Link to={detailsUrl}>
                                            {orderNumber}
                                        </Link>
                                    </td>
                                    <td>{status}</td>
                                    <td>
                                        {/* TODO: display link to file, with file name as title, when backend done */}
                                        <PdfIcons />
                                        {orderNumber}.pdf
                                    </td>
                                    <td>
                                        <Price
                                            value={grandTotal?.value}
                                            currencyCode={grandTotal?.currency}
                                        />
                                    </td>
                                    <td>{createdAt}</td>
                                    <td>
                                        <Link
                                            to={detailsUrl}
                                            className="customer-orders-details"
                                        >
                                            {t('common:Open')}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersListDesktop;
