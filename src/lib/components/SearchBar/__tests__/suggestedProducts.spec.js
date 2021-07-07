import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import SuggestedProduct from '../SuggestedProduct';
import SuggestedProducts from '../SuggestedProducts';

jest.mock('../SuggestedProduct', () => () => null);

const products = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
const onNavigate = jest.fn();

test('renders correctly', () => {
    const subset = products.slice(0, 1);

    const instance = createTestInstance(
        <SuggestedProducts onNavigate={onNavigate} products={subset} />
    );

    expect(instance.toJSON()).toMatchSnapshot();
});

test('renders a max of 3 products by default', () => {
    const { root } = createTestInstance(
        <SuggestedProducts onNavigate={onNavigate} products={products} />
    );

    expect(root.findAllByType(SuggestedProduct)).toHaveLength(3);
});

test('allows the render limit to be configured', () => {
    const { root } = createTestInstance(
        <SuggestedProducts
            onNavigate={onNavigate}
            limit={2}
            products={products}
        />
    );

    expect(root.findAllByType(SuggestedProduct)).toHaveLength(2);
});
