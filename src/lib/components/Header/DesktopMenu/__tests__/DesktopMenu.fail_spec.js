import React from 'react';
import testRenderer from 'react-test-renderer';
import DesktopMenu from 'src/lib/components/Header/DesktopMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import mockUseMenu from 'src/lib/util/__mocks__/hooks/mockUseMenu';

jest.mock('src/peregrine/lib/talons/adeoweb/Menu/useMenu', () => {
    return {
        useMenu: jest.fn(() => mockUseMenu)
    };
});

test('Renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <DesktopMenu />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
