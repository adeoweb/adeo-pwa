import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

import BackButton from 'src/lib/components/BackButton';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import OrderBlocks from 'src/lib/components/Customer/pages/OrderDetailsPage/OrderBlocks';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import MessageType from 'src/lib/constants/message';
import { useHistory, useLocation } from 'src/lib/drivers';
import GET_CUSTOMER_ORDER_DETAILS from 'src/lib/queries/getCustomerOrderDetails.graphql';
import { useCustomerOrders } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerOrders';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';

const OrderDetailsPage: FunctionComponent = () => {
    const { t } = useTranslation('order');
    const location = useLocation();
    const history = useHistory();
    const { addMessage } = useMessageCard();

    // TODO: replace query to get only specific order.

    const { loadingOrders, ordersError, orders } = useCustomerOrders({
        query: GET_CUSTOMER_ORDER_DETAILS
    });

    const id = Number(getSearchParam('id', location));

    if (!id) {
        history.push(CustomerRoutes.orders.url);
    }

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

    const [order] = orders.filter(({ id: orderId }) => orderId === id);

    const orderNumber = (order && order.order_number) || null;

    return (
        <div>
            <BackButton url={CustomerRoutes.orders.url} />
            <h3 className="customer-content-title">
                {`${t('Order')} ${t('no.')} ${orderNumber || id}`}
            </h3>
            {order ? (
                <OrderBlocks order={order} />
            ) : (
                <div>{t('Order with given id does not exist')}</div>
            )}
        </div>
    );
};

export default OrderDetailsPage;
