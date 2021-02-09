import React from 'react';
import { createTestInstance } from '@magento/peregrine';

import SearchBar from '../SearchBar';

jest.mock('../Autocomplete', () => () => null);
jest.mock('../SearchField', () => () => null);

const handleTriggerClick = jest.fn();

// TODO: check this for validity
jest.mock('src/peregrine/lib/talons/adeoweb/SearchBar/useSearchBar', () => {
    return {
        useSearchBar: () => {}
    };
});

test('renders correctly when closed', () => {
    const tree = createTestInstance(
        <SearchBar
            history={{}}
            isOpen={false}
            location={{}}
            handleTriggerClick={handleTriggerClick}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('renders correctly when open', () => {
    const tree = createTestInstance(
        <SearchBar
            history={{}}
            isOpen={true}
            location={{}}
            handleTriggerClick={handleTriggerClick}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
