import React from 'react';
import testRenderer from 'react-test-renderer';

import TileList from '../TileList';

const defaultProps = {
    items: [
        {
            id: '1',
            label: 'foo'
        }
    ],
    selectedValue: {},
    getItemKey: jest.fn(),
    onSelectionChange: jest.fn()
};

test('renders TileList component correctly', () => {
    const component = testRenderer.create(<TileList {...defaultProps} />);
    expect(component.toJSON()).toMatchSnapshot();
});
