import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import testRenderer from 'react-test-renderer';
import CategoryContent from 'src/lib/components/CategoryContent';
import { CategoryContentPropsMock } from 'src/lib/components/CategoryContent/__mocks__/CategoryContent.mock';

jest.mock('src/lib/components/Breadcrumbs', () => () => null);
jest.mock('src/lib/components/AddToWishlist', () => () => null);

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useAddToCart', () => {
    return {
        useAddToCart: () => ({
            handleAddToCart: () => {},
            isAddToCartDisabled: false
        })
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useProductCompare', () => {
    return {
        useProductCompare: () => ({
            setProductHandler: () => {},
            isProductBeingCompared: () => false
        })
    };
});

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {
        layoutMode: 'grid'
    };
    const api = {};
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/talons/adeoweb/LayoutModes/useLayoutModes', () => {
    return {
        useLayoutModes: jest.fn(() => ({
            layoutMode: 'grid',
            setGrid: jest.fn(() => {}),
            setList: jest.fn(() => {})
        }))
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard', () => {
    const useMessageCard = jest.fn(() => ({
        addMessage: jest.fn(() => {}),
        clearAllMessages: jest.fn(() => {})
    }));

    return { useMessageCard };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Wishlist/useWishlist', () => {
    const useWishlist = jest.fn(() => ({
        isAddingToWishlist: false,
        addToWishlistError: null,
        isRemovingFromWishlist: false,
        removeFromWishlistError: null
    }));

    return { useWishlist };
});

test('Renders correctly', () => {
    const component = testRenderer.create(
        <Router>
            <CategoryContent {...CategoryContentPropsMock} />
        </Router>
    );
    expect(component.toJSON()).toMatchSnapshot();
});
