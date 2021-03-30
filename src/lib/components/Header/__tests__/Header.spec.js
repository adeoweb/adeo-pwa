import React from 'react';
import testRenderer from 'react-test-renderer';
import Header from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import mockUseMenu from 'src/lib/util/__mocks__/hooks/mockUseMenu';
import mockUseProduct from 'src/lib/util/__mocks__/hooks/mockUseProduct';
import mockUseMiniCart from 'src/lib/util/__mocks__/hooks/mockUseMiniCart';
import mockUseLogo from 'src/lib/util/__mocks__/hooks/mockUseLogo';
import mockUseWelcomeMessage from 'src/lib/util/__mocks__/hooks/mockUseWelcomeMessage';
import mockUseHeaderContact from 'src/lib/util/__mocks__/hooks/mockUseHeaderContact';
import mockUseIsSignedIn from 'src/lib/util/__mocks__/hooks/mockUseIsSignedIn';
import mockUseSignOut from 'src/lib/util/__mocks__/hooks/mockUseSignOut';
import mockUseStoreList from 'src/lib/util/__mocks__/hooks/mockUseStoreList';
import mockUseProductCompare from 'src/lib/util/__mocks__/hooks/mockUseProductCompare';
import mockUseCompareDropdown from 'src/lib/util/__mocks__/hooks/mockUseCompareDropdown';

jest.mock('src/peregrine/lib/talons/adeoweb/Menu/useMenu', () => {
    return {
        useMenu: jest.fn(() => mockUseMenu)
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Logo/useLogo', () => {
    return {
        useLogo: () => mockUseLogo
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/IsSignedIn/useIsSignedIn', () => {
    return {
        useIsSignedIn: () => mockUseIsSignedIn
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/SignOut/useSignOut', () => {
    return {
        useSignOut: () => mockUseSignOut
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Header/useWelcomeMessage', () => {
    return {
        useWelcomeMessage: () => mockUseWelcomeMessage
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Header/useHeaderContact', () => {
    return {
        useHeaderContact: () => mockUseHeaderContact
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Header/useCartTrigger', () => {
    return {
        useCartTrigger: () => null
    };
});

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {
        hasBeenOffline: false,
        isOnline: true,
        searchOpen: false
    };
    const api = {
        toggleSearch: jest.fn()
    };
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/talons/adeoweb/MiniCart/useMiniCart', () => {
    return {
        useMiniCart: () => mockUseMiniCart
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/MiniCart/useProduct', () => {
    return {
        useProduct: () => mockUseProduct
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/App/useStoreList', () => {
    return {
        useStoreList: () => mockUseStoreList
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useProductCompare', () => {
    return {
        useProductCompare: () => mockUseProductCompare
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useCompareDropdown', () => {
    return {
        useCompareDropdown: () => mockUseCompareDropdown
    };
});

test('Renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <IntlProvider locale="en">
                <Header />
            </IntlProvider>
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
