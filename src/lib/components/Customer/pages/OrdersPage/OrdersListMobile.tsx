import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import PdfIcons from 'src/lib/assets/icons/PdfIcons';
import { IOrdersListProps } from 'src/lib/components/Customer/pages/OrdersPage/OrdersListTypes';
import { Link } from 'src/lib/drivers';

const OrdersListMobile: FunctionComponent<IOrdersListProps> = ({
    orders,
    createDetailsUrl
}) => {
    const { t } = useTranslation(['order', 'common']);

    return (
        <Fragment>
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
                        <div key={id} className="customer-orders-mobile-block">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{t('order:Order No.')}</th>
                                        <td>
                                            <Link to={detailsUrl}>
                                                {orderNumber}
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{t('order:Status')}</th>
                                        <td>{status}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('order:Invoice')}</th>
                                        <td>
                                            <PdfIcons />
                                            {/* TODO: display link to file, with file name as title, when backend done */}
                                            {orderNumber}.pdf
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>{t('order:Order Total')}</th>
                                        <td>{grandTotal}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('order:Date')}</th>
                                        <td>{createdAt}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link
                                to={detailsUrl}
                                className="customer-orders-details"
                            >
                                {t('common:Open')}
                            </Link>
                        </div>
                    );
                }
            )}
        </Fragment>
    );
};

export default OrdersListMobile;
