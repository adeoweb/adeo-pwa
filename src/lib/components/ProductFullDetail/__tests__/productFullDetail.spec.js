import React from 'react';

import {
    WindowSizeContextProvider,
    createTestInstance
} from '@magento/peregrine';

import mockUseLogo from 'src/lib/util/__mocks__/hooks/mockUseLogo';
import mockUseProductCompare from 'src/lib/util/__mocks__/hooks/mockUseProductCompare';

import Carousel from '../../ProductImageCarousel';
import ProductFullDetail from '../ProductFullDetail';

jest.mock('src/lib/drivers', () => ({
    useHistory: jest.fn(),
    resourceUrl: jest.fn(src => src)
}));

jest.mock('../../Breadcrumbs', () => () => null);
jest.mock('../../ProductOptions', () => () => null);
jest.mock('../../../classify');
jest.mock(
    'src/lib/components/ProductFullDetail/RelatedProductsSection',
    () => () => null
);
jest.mock(
    'src/lib/components/ProductFullDetail/FeaturedProductsWidget',
    () => () => null
);
jest.mock('src/lib/components/AddToWishlist', () => () => null);

jest.mock('src/peregrine/lib/talons/adeoweb/Logo/useLogo', () => {
    return {
        useLogo: () => mockUseLogo
    };
});

jest.mock('src/peregrine/lib/talons/adeoweb/Product/useProductCompare', () => {
    return {
        useProductCompare: () => mockUseProductCompare
    };
});

jest.mock('@apollo/react-hooks', () => ({
    useMutation: jest.fn().mockImplementation(() => [
        jest.fn(),
        {
            error: null
        }
    ])
}));

jest.mock('src/peregrine/lib/context/adeoweb/app', () => {
    const state = {};
    const api = { toggleDrawer: jest.fn() };
    const useAppContext = jest.fn(() => [state, api]);

    return { useAppContext };
});

jest.mock('src/peregrine/lib/context/adeoweb/cart', () => {
    const cartState = { isAddingItem: false };
    const cartApi = { addItemToCart: jest.fn() };
    const useCartContext = jest.fn(() => [cartState, cartApi]);

    return { useCartContext };
});

jest.mock('@magento/peregrine/lib/hooks/useAwaitQuery', () => {
    const useAwaitQuery = jest.fn().mockResolvedValue({ data: { cart: {} } });

    return { useAwaitQuery };
});

jest.mock('src/peregrine/lib/context/adeoweb/messageCard', () => {
    const messageCardApi = { addMessage: jest.fn() };
    const useMessageCardContext = jest.fn(() => [null, messageCardApi]);

    return { useMessageCardContext };
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

const mockConfigurableProduct = {
    __typename: 'ConfigurableProduct',
    sku: 'SKU123',
    name: 'Mock Configrable Product',
    price_range: {
        minimum_price: {
            final_price: {
                currency: 'USD',
                value: 123
            },
            regular_price: {
                currency: 'USD',
                value: 123
            },
            discount: {
                amount_off: 0
            }
        }
    },
    categories: [{ id: 1, breadcrumbs: [{ category_id: 2 }] }],
    description: 'Mock configurable product has a description!',
    media_gallery: [
        {
            label: 'Base Product - Image 1',
            url: '/base/image-1.jpg'
        },
        {
            label: 'Base Product Image 2',
            url: '/base/image-2.jpg'
        }
    ],
    configurable_options: [
        {
            attribute_code: 'configurable_option',
            attribute_id: '1',
            id: 1,
            label: 'Configurable Option',
            values: [
                {
                    default_label: 'Option 1',
                    label: 'Option 1',
                    store_label: 'Option 1',
                    use_default_value: true,
                    value_index: 1
                },
                {
                    default_label: 'Option 2',
                    label: 'Option 2',
                    store_label: 'Option 2',
                    use_default_value: true,
                    value_index: 2
                }
            ]
        }
    ],
    variants: [
        {
            attributes: [
                {
                    code: 'configurable_option',
                    value_index: 1
                }
            ],
            product: {
                id: 123,
                media_gallery: [
                    {
                        url: '/variant/image-1.jpg',
                        label: 'Mock Configurable Product - Variant 1'
                    }
                ],
                sku: 'SKU123-CO1',
                stock_status: 'IN_STOCK'
            }
        }
    ]
};

test('Configurable Product has correct initial media gallery image count', () => {
    const { root } = createTestInstance(
        <WindowSizeContextProvider>
            <ProductFullDetail product={mockConfigurableProduct} classes={{}} />
        </WindowSizeContextProvider>
    );

    const carouselComponent = root.findByType(Carousel);

    expect(carouselComponent.props.images).toHaveLength(2);
});
