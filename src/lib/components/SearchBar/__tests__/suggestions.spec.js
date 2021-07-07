import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import Suggestions from '../Suggestions';

jest.mock('../SuggestedProducts', () => () => null);

jest.mock('src/peregrine/lib/talons/adeoweb/SearchBar/useSuggestions', () => {
    return {
        useSuggestions: () => ({
            onNavigate: jest.fn(),
            shouldRender: true
        })
    };
});
const setVisible = jest.fn();
const products = {};

test('renders correctly when visible', () => {
    const instance = createTestInstance(
        <Suggestions
            products={products}
            visible={true}
            setVisible={setVisible}
        />
    );

    expect(instance.toJSON()).toMatchSnapshot();
});
