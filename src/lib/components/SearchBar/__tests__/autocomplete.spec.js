import React from 'react';

import { createTestInstance } from '@magento/peregrine';

import Autocomplete from '../Autocomplete';

jest.mock('src/lib/components/SearchBar/Suggestions', () => () => null);
jest.mock('src/peregrine/lib/talons/adeoweb/SearchBar/useAutocomplete', () => {
    return {
        useAutocomplete: () => ({
            messageType: 'PROMPT',
            products: undefined
        })
    };
});
const setVisible = jest.fn();

test('renders correctly when visible', () => {
    const tree = createTestInstance(
        <Autocomplete setVisible={setVisible} visible={true} searchValue={''} />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('renders correctly when not visible', () => {
    const tree = createTestInstance(
        <Autocomplete
            setVisible={setVisible}
            visible={false}
            searchValue={''}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
