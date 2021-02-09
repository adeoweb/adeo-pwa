import React, { Fragment, FunctionComponent } from 'react';
import DetailsGeneral from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsGeneral';
import DetailsProducts from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsProducts';
import DetailsDelivery from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsDelivery';
import DetailsPayment from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsPayment';
import Totals from 'src/lib/components/Customer/pages/OrderDetailsPage/Totals';
import { TCustomerOrder } from 'src/lib/types/graphql/Customer';

interface IOrderBloksProps {
    order: TCustomerOrder;
}

const OrderBlocks: FunctionComponent<IOrderBloksProps> = ({ order }) => {
    const {
        items,
        shipping_address: shippingAddress,
        billing_address: billingAddress,
        grand_total: grandTotal,
        subtotal,
        shipping_amount: shippingAmount,
        tax_amount: taxAmount
    } = order;

    return (
        <Fragment>
            <DetailsGeneral order={order} />
            <DetailsProducts items={items} />
            <DetailsDelivery shippingAddress={shippingAddress} />
            <DetailsPayment billingAddress={billingAddress} />
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
