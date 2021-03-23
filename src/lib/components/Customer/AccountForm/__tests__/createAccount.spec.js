import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import CreateAccountForm from '../AccountForm';
import { useHistory } from 'src/lib/drivers';

const history = {
    push: jest.fn()
};

jest.mock('src/lib/drivers', () => ({
    useHistory: jest.fn()
}));

useHistory?.mockImplementation(() => history);

jest.mock('@apollo/react-hooks', () => ({
    useMutation: jest.fn().mockImplementation(() => [
        jest.fn(),
        {
            error: null
        }
    ])
}));

jest.mock('src/peregrine/lib/context/adeoweb/user', () => {
    const userState = {
        isGettingDetails: false,
        isSignedIn: false
    };
    const userApi = {
        getUserDetails: jest.fn(),
        setToken: jest.fn()
    };
    const useUserContext = jest.fn(() => [userState, userApi]);

    return { useUserContext };
});

jest.mock('src/peregrine/lib/context/adeoweb/cart', () => {
    const state = {};
    const api = {
        createCart: jest.fn(),
        getCartDetails: jest.fn(),
        removeCart: jest.fn()
    };
    const useCartContext = jest.fn(() => [state, api]);

    return { useCartContext };
});

jest.mock('@magento/peregrine/lib/hooks/useAwaitQuery', () => {
    const useAwaitQuery = jest
        .fn()
        .mockResolvedValue({ data: { customer: {} } });

    return { useAwaitQuery };
});

jest.mock('src/peregrine/lib/context/adeoweb/messageCard', () => {
    const addMessage = jest.fn(() => {});

    const useMessageCardContext = jest.fn(() => [null, { addMessage }]);

    return { useMessageCardContext };
});

test('renders the correct tree', () => {
    const tree = createTestInstance(<CreateAccountForm />).toJSON();
    expect(tree).toMatchSnapshot();
});
