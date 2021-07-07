import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createTestInstance } from '@magento/peregrine';

import Compare from 'src/lib/components/Compare';
import { mockProductData } from 'src/lib/components/Compare/__tests__/mockData';

jest.mock('src/peregrine/lib/talons/adeoweb/Compare/useRemoveProduct', () => {
    return {
        useRemoveProduct: () => ({
            removeProduct: jest.fn(() => {})
        })
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Compare/useCompare', () => {
    return {
        useCompare: () => ({
            productData: mockProductData
        })
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useAddToCart', () => {
    return {
        useAddToCart: () => ({
            handleAddToCart: () => {},
            isAddToCartDisabled: false
        })
    };
});
test('Footer component renders correctly', () => {
    const tree = createTestInstance(
        <Router>
            <Compare />
        </Router>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
