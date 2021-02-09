import React from 'react';
import testRenderer from 'react-test-renderer';

import SwatchList from '../SwatchList';

const defaultProps = {
    items: [
        {
            id: '1',
            value_index: 1,
            label: 'foo'
        }
    ],
    selectedValue: {},
    getItemKey: jest.fn(),
    onSelectionChange: jest.fn()
};

test('renders SwatchList component correctly', () => {
    const component = testRenderer.create(<SwatchList {...defaultProps} />);
    expect(component.toJSON()).toMatchSnapshot();
});
