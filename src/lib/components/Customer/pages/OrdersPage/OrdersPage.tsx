import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useWindowSize } from '@magento/peregrine/lib/hooks/useWindowSize';

import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import OrdersListDesktop from 'src/lib/components/Customer/pages/OrdersPage/OrdersListDesktop';
import OrdersListMobile from 'src/lib/components/Customer/pages/OrdersPage/OrdersListMobile';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import MessageType from 'src/lib/constants/message';
import GET_CUSTOMER_ORDERS from 'src/lib/queries/getCustomerOrders.graphql';
import { useCustomerOrders } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerOrders';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';

const OrdersPage: FunctionComponent = () => {
    // TODO: add pagination

    const { t } = useTranslation(['order', 'customer']);
    const { outerWidth } = useWindowSize();
    const { addMessage } = useMessageCard();
    const { loadingOrders, ordersError, orders } = useCustomerOrders({
        query: GET_CUSTOMER_ORDERS
    });

    useEffect(() => {
        if (ordersError) {
            addMessage({
                type: MessageType.ERROR,
                message: String(ordersError)
            });
        }
    }, [addMessage, ordersError]);

    if (loadingOrders) {
        return <LoadingIndicator />;
    }

    const isMobile = outerWidth < 768;
    const OrdersContent = isMobile ? OrdersListMobile : OrdersListDesktop;
    const noOrders = !orders || (Array.isArray(orders) && !orders.length);
    const ordersAreValid = Array.isArray(orders) && Boolean(orders.length);

    const createDetailsUrl = (id: number) =>
        `${CustomerRoutes.orderDetails.url}?id=${id}`;

    return (
        <div className="customer-orders">
            <h3
                className={
                    isMobile
                        ? 'customer-orders-title'
                        : 'customer-orders-title-desktop'
                }
            >
                {t('customer:My Orders')}
            </h3>
            {noOrders && <p>{t('order:No Order yet.')}</p>}
            {ordersAreValid && (
                <OrdersContent
                    orders={orders}
                    createDetailsUrl={createDetailsUrl}
                />
            )}
        </div>
    );
};

export default OrdersPage;
