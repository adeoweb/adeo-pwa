import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import { createTestInstance } from '@magento/peregrine';

import OrdersPage from 'src/lib/components/Customer/pages/OrdersPage';

jest.mock('src/peregrine/lib/talons/adeoweb/Customer/useCustomerOrders', () => {
    const useCustomerOrders = jest.fn(() => ({
        orders: [
            {
                created_at: '2222-22-22',
                grand_total: {
                    value: 59,
                    currency: 'EUR'
                },
                id: 1,
                order_number: 123,
                status: 'status'
            }
        ]
    }));

    return { useCustomerOrders };
});

jest.mock('@magento/peregrine/lib/hooks/useWindowSize', () => {
    const useWindowSize = jest.fn(() => ({
        outerWidth: 1000
    }));

    return { useWindowSize };
});

jest.mock('src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard', () => {
    const useMessageCard = jest.fn(() => ({
        addMessage: jest.fn(() => {})
    }));

    return { useMessageCard };
});

test('renders correctly', async () => {
    const instance = createTestInstance(
        <IntlProvider locale="en">
            <Router>
                <OrdersPage />
            </Router>
        </IntlProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
});
