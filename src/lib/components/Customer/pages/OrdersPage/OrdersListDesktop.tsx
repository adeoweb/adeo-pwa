import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import PdfIcons from 'src/lib/assets/icons/PdfIcons';
import { IOrdersListProps } from 'src/lib/components/Customer/pages/OrdersPage/OrdersListTypes';
import { Link } from 'src/lib/drivers';

const OrdersListDesktop: FunctionComponent<IOrdersListProps> = ({
    orders,
    createDetailsUrl
}) => {
    const { t } = useTranslation();

    return (
        <div className="customer-orders-desktop-table">
            <table>
                <tbody>
                    <tr>
                        <th>{t('Order No.')}</th>
                        <th>{t('Status')}</th>
                        <th>{t('Invoice')}</th>
                        <th>{t('Order Total')}</th>
                        <th>{t('Date')}</th>
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
                                    <td>{grandTotal}</td>
                                    <td>{createdAt}</td>
                                    <td>
                                        <Link
                                            to={detailsUrl}
                                            className="customer-orders-details"
                                        >
                                            {t('Open')}
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
