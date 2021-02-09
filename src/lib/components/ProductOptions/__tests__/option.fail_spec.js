import React from 'react';
import { act } from 'react-test-renderer';
import { createTestInstance } from '@magento/peregrine/lib';

import Option from '../Option';
import SwatchList from 'src/lib/components/ProductOptions/SwatchList';
import TileList from 'src/lib/components/ProductOptions/TileList';

jest.mock('src/lib/components/ProductOptions/SwatchList', () => () => <i />);
jest.mock('src/lib/components/ProductOptions/TileList', () => () => <i />);

const onSelectionChangeMock = jest.fn();
const option = {
    attribute_id: '1',
    attribute_code: 'foo',
    label: 'Foo',
    values: [
        {
            store_label: 'red',
            value_index: 0
        },
        {
            store_label: 'blue',
            value_index: 1
        }
    ]
};

test('renders Option component correctly', () => {
    const component = createTestInstance(
        <Option option={option} onSelectionChange={onSelectionChangeMock} />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('renders a SwatchList for color attributes', () => {
    const { root } = createTestInstance(
        <Option
            option={{
                ...option,
                attribute_code: 'color',
                label: 'Color'
            }}
            onSelectionChange={onSelectionChangeMock}
        />
    );

    expect(root.findByType(SwatchList)).toBeTruthy();
});

test('renders a Tile List for other attributes', () => {
    const { root } = createTestInstance(
        <Option option={option} onSelectionChange={onSelectionChangeMock} />
    );

    expect(root.findByType(TileList)).toBeTruthy();
});

test('calls onSelectionChange callback on selection change', () => {
    const { root } = createTestInstance(
        <Option option={option} onSelectionChange={onSelectionChangeMock} />
    );
    const { onSelectionChange } = root.findByType(TileList).props;
    const nextSelection = 1;

    act(() => {
        onSelectionChange(nextSelection);
    });

    expect(onSelectionChangeMock).toHaveBeenCalledTimes(1);
    expect(onSelectionChangeMock).toHaveBeenNthCalledWith(
        1,
        '1',
        nextSelection
    );
});
