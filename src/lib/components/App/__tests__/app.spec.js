import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createTestInstance } from '@magento/peregrine';

import { Switch } from 'src/lib/drivers';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useLoadConfig } from 'src/peregrine/lib/talons/adeoweb/App/useLoadConfig';

import Main from '../../Main';
import Mask from '../../Mask';
import MobileMenu from '../../MobileMenu';
import Routes from '../../Routes';

jest.mock('../../Head', () => ({
    HeadProvider: ({ children }) => <div>{children}</div>,
    Title: () => 'Title'
}));
jest.mock('../../Main', () => 'Main');
jest.mock('../../MobileMenu', () => 'MobileMenu');
jest.mock('../../Routes', () => 'Routes');
jest.mock('../../ToastContainer', () => 'ToastContainer');
jest.mock('owl.carousel', () => {});

const mockAddToast = jest.fn();
jest.mock('@magento/peregrine', () => {
    const useToasts = jest.fn(() => [
        { toasts: new Map() },
        { addToast: mockAddToast }
    ]);

    return {
        ...jest.requireActual('@magento/peregrine'),
        useToasts
    };
});

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {
        hasBeenOffline: false,
        isOnline: true,
        overlay: false,
        drawer: null
    };
    const api = {
        closeDrawer: jest.fn()
    };
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/context/adeoweb/checkout', () => {
    const state = {};
    const api = {
        actions: {
            reset: jest.fn()
        }
    };
    const useCheckoutContext = jest.fn(() => [state, api]);

    return { useCheckoutContext };
});

jest.mock('@magento/peregrine/lib/context/cart', () => {
    const state = {
        cartId: null
    };
    const api = {
        getCartDetails: jest.fn(),
        setCartId: id => {
            state.cartId = id;
        }
    };
    const useCartContext = jest.fn(() => [state, api]);

    return { useCartContext };
});

jest.mock('@magento/peregrine/lib/util/createErrorRecord', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue({
        error: { message: 'A render error', stack: 'errorStack' },
        id: '1',
        loc: '1'
    })
}));

jest.mock('@apollo/react-hooks', () => ({
    useMutation: jest.fn().mockImplementation(() => [
        jest.fn().mockImplementation(() => {
            return {
                data: {
                    createEmptyCart: 'cartIdFromGraphQL'
                }
            };
        })
    ]),
    useQuery: jest.fn(() => {
        return {
            data: {
                cmsBlocks: {
                    items: ['']
                }
            }
        };
    })
}));

jest.mock('src/peregrine/lib/talons/adeoweb/App/useLoadConfig', () => {
    const useLoadConfig = jest.fn(() => ({
        error: null,
        loaded: true
    }));

    return { useLoadConfig };
});

jest.mock('src/peregrine/lib/talons/adeoweb/User/useLoadUser', () => {
    const useLoadUser = jest.fn(() => ({
        error: null
    }));

    return { useLoadUser };
});

jest.mock('src/peregrine/lib/context/adeoweb/messageCard', () => {
    const useMessageCardContext = jest.fn(() => [
        {
            messageBlocks: {
                block: []
            }
        },
        { clearAllMessages: jest.fn(() => {}) }
    ]);

    return { useMessageCardContext };
});

jest.mock('src/peregrine/lib/talons/adeoweb/User/useUserSession', () => {
    return { useUserSession: jest.fn() };
});

jest.mock('src/lib/drivers', () => {
    const useHistory = jest.fn(() => ({
        listen: jest.fn(() => {})
    }));

    return {
        ...jest.requireActual('src/lib/drivers'),
        useHistory
    };
});

// require app after mock is complete
const App = require('../app').default;

const getAndConfirmProps = (parent, type, props = {}) => {
    const instance = parent.findByType(type);
    expect(instance.props).toMatchObject(props);
    return instance;
};

const { location } = window;

beforeAll(() => {
    global.STORE_NAME = 'Venia';
    delete window.location;
    window.location = { reload: jest.fn() };
});

afterAll(() => (window.location = location));

test('renders a full page with onlineIndicator and routes', () => {
    const [appState, appApi] = useAppContext();
    const mockedReturnValue = [
        {
            ...appState,
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        appApi
    ];

    useAppContext.mockReturnValueOnce(mockedReturnValue);

    const appProps = {
        markErrorHandled: jest.fn(),
        unhandledErrors: []
    };
    const { root } = createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    getAndConfirmProps(root, MobileMenu);

    const switchComponent = getAndConfirmProps(root, Switch);

    expect(mockAddToast).toHaveBeenCalledWith({
        type: 'error',
        icon: expect.any(Object),
        message: 'You are offline. Some features may be unavailable.',
        timeout: 3000
    });
    // renderRoutes should just return a fake component here
    expect(switchComponent.findByType(Routes)).toBeTruthy();

    expect(switchComponent.findByType(Main)).toBeTruthy();

    const mask = getAndConfirmProps(root, Mask, {
        isActive: false,
        dismiss: expect.any(Function)
    });

    // appropriate positioning
    const {
        parent: { children: siblings }
    } = switchComponent;
    expect(siblings.indexOf(switchComponent)).toBeLessThan(
        siblings.indexOf(mask)
    );
});

test('checks if Main is in Switch', () => {});

test('displays onlineIndicator online if hasBeenOffline', () => {
    const [appState, appApi] = useAppContext();
    const mockedReturnValue = [
        {
            ...appState,
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: true
        },
        appApi
    ];

    useAppContext.mockReturnValueOnce(mockedReturnValue);

    const appProps = {
        markErrorHandled: jest.fn(),
        unhandledErrors: []
    };

    createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );
    expect(mockAddToast).toHaveBeenCalledWith({
        type: 'info',
        icon: expect.any(Object),
        message: 'You are online.',
        timeout: 3000
    });
});

test('displays open nav', () => {
    const [appState, appApi] = useAppContext();
    useAppContext.mockReturnValueOnce([
        {
            ...appState,
            drawer: 'nav',
            overlay: false,
            hasBeenOffline: true,
            isOnline: true
        },
        appApi
    ]);
    const props = {
        markErrorHandled: jest.fn(),
        unhandledErrors: []
    };

    const { root: openNav } = createTestInstance(
        <Router>
            <App {...props} />
        </Router>
    );

    getAndConfirmProps(openNav, MobileMenu);
});

test('renders with renderErrors', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [],
        renderError: new Error('A render error!')
    };

    const root = createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(root.toJSON()).toMatchSnapshot();
});

test('renders with unhandledErrors', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [{ error: new Error('A render error!') }],
        renderError: null
    };

    const root = createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(root.toJSON()).toMatchSnapshot();
});

test('renders with configError', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [],
        renderError: null
    };
    useLoadConfig.mockReturnValueOnce({
        ...useLoadConfig(),
        error: 'config error'
    });

    const root = createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(root.toJSON()).toMatchSnapshot();
});

test('adds no toasts when no errors are present', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: false,
            isOnline: true
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [],
        renderError: null
    };

    createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(mockAddToast).not.toHaveBeenCalled();
});

test('adds toasts for render errors', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [],
        renderError: new Error('A render error!')
    };

    createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(mockAddToast).toHaveBeenCalledWith({
        icon: expect.any(Object),
        message: expect.any(String),
        onDismiss: expect.any(Function),
        timeout: expect.any(Number),
        type: 'error'
    });
});

test('adds toasts for unhandled errors', () => {
    const appProps = {
        app: {
            drawer: '',
            overlay: false,
            hasBeenOffline: true,
            isOnline: false
        },
        closeDrawer: jest.fn(),
        markErrorHandled: jest.fn(),
        unhandledErrors: [{ error: new Error('A render error!') }],
        renderError: null
    };

    createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    expect(mockAddToast).toHaveBeenCalledWith({
        icon: expect.any(Object),
        message: expect.any(String),
        onDismiss: expect.any(Function),
        timeout: expect.any(Number),
        type: 'error'
    });
});

test('displays update available message when a HTML_UPDATE_AVAILABLE message is received', () => {
    const appProps = {
        markErrorHandled: jest.fn(),
        unhandledErrors: []
    };

    createTestInstance(
        <Router>
            <App {...appProps} />
        </Router>
    );

    window.postMessage('HTML_UPDATE_AVAILABLE', '*');

    setTimeout(() => {
        expect(mockAddToast).toHaveBeenCalledWith({
            type: 'warning',
            icon: expect.any(Object),
            message: 'Update available. Please refresh.',
            actionText: 'Refresh',
            timeout: 0,
            onAction: expect.any(Function),
            onDismiss: expect.any(Function)
        });
    }, 1000);
});
