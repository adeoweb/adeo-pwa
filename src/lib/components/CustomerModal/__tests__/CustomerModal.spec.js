import React from 'react';
import testRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomerModal from 'src/lib/components/CustomerModal';

jest.mock('src/peregrine/lib/talons/adeoweb/SignIn/useSignIn', () => {
    return {
        useSignIn: () => ({
            errors: [],
            handleSubmit: jest.fn(() => {}),
            isBusy: false
        })
    };
});

jest.mock('react-dom', () => ({
    createPortal: node => node
}));

jest.mock('react-bootstrap/Modal', () => ({ children = [] }) => (
    <div id="modal">{children}</div>
));

jest.mock('src/peregrine/lib/context/adeoweb/user', () => {
    const state = {
        currentUser: {
            firstname: 'firstname',
            lastname: 'lastname'
        },
        isSignedIn: true
    };
    const useUserContext = jest.fn(() => [state]);

    return { useUserContext };
});

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const api = {
        setCustomerModal: jest.fn(() => {})
    };
    const useAppContext = jest.fn(() => [null, api]);

    return { useAppContext };
});

test('Empty CustomerModal component renders correctly', () => {
    const tree = testRenderer.create(
        <Router>
            <CustomerModal modalType={null} handleClose={jest.fn(() => {})} />
        </Router>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Non empty CustomerModal component renders correctly', () => {
    const tree = testRenderer.create(
        <Router>
            <CustomerModal
                modalType={'LOG_IN'}
                handleClose={jest.fn(() => {})}
            />
        </Router>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
