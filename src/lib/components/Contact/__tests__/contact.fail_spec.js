import React from 'react';
import testRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Contact from 'src/lib/components/Contact';
import mockUseContactForm from 'src/lib/util/__mocks__/hooks/mockUseContactForm';

jest.mock('src/peregrine/lib/talons/adeoweb/Contact/useContactForm', () => {
    return {
        useContactForm: () => mockUseContactForm
    };
});

test('Contact page renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <Contact />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
