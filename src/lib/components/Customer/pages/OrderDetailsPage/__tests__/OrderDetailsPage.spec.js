import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createTestInstance } from '@magento/peregrine';

import OrderDetailsPage from 'src/lib/components/Customer/pages/OrderDetailsPage';

jest.mock('src/lib/drivers', () => {
    const useLocation = jest.fn(() => ({
        search: '?id=1'
    }));

    const useHistory = jest.fn(() => []);

    const Link = () => null;

    return { useLocation, useHistory, Link };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Customer/useCustomerOrders', () => {
    const useCustomerOrders = jest.fn(() => ({
        orders: [
            {
                created_at: '2222-22-22',
                grand_total: 99,
                id: 1,
                order_number: 123,
                status: 'status',
                __typename: 'CustomerOrder',
                items: [
                    {
                        name: 'Įtampos stabilizatorius 7805 TO220',
                        price_incl_tax: 0.39,
                        qty: 1,
                        sku: '23188',
                        __typename: 'OrderItem'
                    },
                    {
                        name: 'Įtampos stabilizatorius 7905 TO220',
                        price_incl_tax: 0.59,
                        qty: 1,
                        sku: '23187',
                        __typename: 'OrderItem'
                    },
                    {
                        name: 'Klijų lazdelės Ø11mm 30cm, balti',
                        price_incl_tax: 0.55,
                        qty: 1,
                        sku: '23161',
                        __typename: 'OrderItem'
                    }
                ],
                shipping_address: {
                    firstname: 'M',
                    lastname: 'K',
                    telephone: '+37061234567',
                    customer_notes: 'comment',
                    street: ['Address'],
                    city: 'City',
                    postcode: '10001',
                    department: null,
                    __typename: 'OrderShippingAddress'
                },
                billing_address: {
                    firstname: 'M',
                    lastname: 'K',
                    telephone: '+37061234567',
                    street: ['Address'],
                    city: 'City',
                    postcode: '10001',
                    __typename: 'OrderBillingAddress'
                },
                subtotal: 1.53,
                shipping_amount: 0,
                tax_amount: 0
            }
        ]
    }));

    return { useCustomerOrders };
});

jest.mock('src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard', () => {
    const useMessageCard = jest.fn(() => ({
        addMessage: jest.fn(() => {})
    }));

    return { useMessageCard };
});

jest.mock('src/peregrine/lib/context/adeoweb/user', () => {
    const api = {
        currentUser: {
            email: 'name@domain.com'
        }
    };
    const useUserContext = jest.fn(() => [api]);

    return { useUserContext };
});

test('renders correctly', async () => {
    const instance = createTestInstance(
        <Router>
            <OrderDetailsPage />
        </Router>
    );

    expect(instance.toJSON()).toMatchSnapshot();
});
