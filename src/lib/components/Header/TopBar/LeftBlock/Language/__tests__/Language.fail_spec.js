import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import Language from '../Language';
import mockUseStoreList from 'src/lib/util/__mocks__/hooks/mockUseStoreList';

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {
        activeStore: null
    };
    const api = {
        setActiveStore: jest.fn()
    };
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/talons/adeoweb/App/useStoreList', () => {
    return {
        useStoreList: () => mockUseStoreList
    };
});

test('Renders correctly', () => {
    const tree = createTestInstance(<Language />);

    expect(tree.toJSON()).toMatchSnapshot();
});
