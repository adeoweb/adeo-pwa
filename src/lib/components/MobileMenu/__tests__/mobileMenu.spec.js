import React from 'react';
import testRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MobileMenu from 'src/lib/components/MobileMenu';

import mockUseMenu from 'src/lib/util/__mocks__/hooks/mockUseMenu';

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {
        drawer: null
    };
    const api = {
        closeDrawer: jest.fn()
    };
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Menu/useMenu', () => {
    return {
        useMenu: jest.fn(() => mockUseMenu)
    };
});

test('renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <MobileMenu />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
