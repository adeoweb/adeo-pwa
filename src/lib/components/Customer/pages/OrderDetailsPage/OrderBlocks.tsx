import React, { Fragment, FunctionComponent } from 'react';

import DetailsDelivery from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsDelivery';
import DetailsGeneral from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsGeneral';
import DetailsPayment from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsPayment';
import DetailsProducts from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsProducts';
import Totals from 'src/lib/components/Customer/pages/OrderDetailsPage/Totals';
import { TCustomerOrder } from 'src/lib/types/graphql/Customer';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

interface IOrderBloksProps {
    order: TCustomerOrder;
}

const OrderBlocks: FunctionComponent<IOrderBloksProps> = ({ order }) => {
    const {
        items: orderItems,
        shipping_address: shippingAddress,
        billing_address: billingAddress,
        grand_total: grandTotal,
        subtotal,
        shipping_amount: shippingAmount,
        tax_amount: taxAmount
    } = order;

    const items = filterOutNullableValues(orderItems);

    return (
        <Fragment>
            <DetailsGeneral order={order} />
            <DetailsProducts items={items} />
            {shippingAddress && (
                <DetailsDelivery shippingAddress={shippingAddress} />
            )}
            {billingAddress && (
                <DetailsPayment billingAddress={billingAddress} />
            )}
            <Totals
                grandTotal={grandTotal}
                subtotal={subtotal}
                shippingAmount={shippingAmount}
                taxAmount={taxAmount}
            />
        </Fragment>
    );
};

export default OrderBlocks;
