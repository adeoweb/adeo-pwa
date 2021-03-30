import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import SuggestedProduct from '../SuggestedProduct';
import { IntlProvider } from 'react-intl';

jest.mock('../../../classify');
jest.mock('src/lib/drivers', () => ({
    Link: ({ children }) => children,
    resourceUrl: jest.fn(src => src),
    useHistory: jest.fn()
}));

const defaultProps = {
    onNavigate: jest.fn(),
    url_key: 'urlKey',
    small_image: {
        url: 'https://small.image/url'
    },
    name: 'product name',
    price_range: {
        maximum_price: {
            final_price: {
                value: 39,
                currency: 'EUR'
            }
        }
    },
    short_description: {
        html: 'short desc'
    }
};

test('renders a suggestedProduct component', () => {
    const tree = createTestInstance(
        <IntlProvider locale="en">
            <SuggestedProduct {...defaultProps} />
        </IntlProvider>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
