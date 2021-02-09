import { TUseMiniCart } from 'src/peregrine/lib/talons/adeoweb/MiniCart/useMiniCart';
import { TPriceRange, TProductPrice } from 'src/lib/types/graphql/Product';

const productPrice: TProductPrice = {
    regular_price: {
        value: 10,
        currency: 'EUR'
    },
    discount: {
        amount_off: 0,
        percent_off: 0
    },
    final_price: {
        value: 0,
        currency: 'EUR'
    },
    fixed_product_taxes: [
        {
            amount: {
                value: 0,
                currency: 'EUR'
            },
            label: 'fresh air'
        }
    ]
};

const priceRange: TPriceRange = {
    maximum_price: productPrice,
    minimum_price: productPrice
};

const mock: TUseMiniCart = {
    cartItems: [
        {
            id: '123',
            product: {
                name: 'test product name',
                sku: 'testSku123',
                url_key: 'product.html',
                small_image: {
                    url: '',
                    label: ''
                },
                price_range: priceRange
            },
            quantity: 20
        }
    ],
    cartState: {
        addItemError: null,
        cartId: 'testCartId',
        details: {
            id: 123,
            is_virtual: false,
            items: [
                {
                    id: '123',
                    product: {
                        name: 'test product name',
                        sku: 'testSku123',
                        url_key: 'product.html',
                        small_image: {
                            url: '',
                            label: ''
                        },
                        price_range: priceRange
                    },
                    quantity: 20
                }
            ],
            prices: {
                grand_total: {
                    value: 999,
                    currency: 'EUR'
                }
            },
            shipping_addresses: [
                {
                    country: {
                        code: 'country code',
                        label: 'country label'
                    },
                    city: 'city',
                    firstname: 'firstname',
                    lastname: 'lastname',
                    street: ['street1', 'street2'],
                    telephone: 'telephone'
                }
            ]
        },
        detailsError: null,
        isLoading: false,
        isLoaded: false,
        isUpdatingItem: false,
        isAddingItem: false,
        removeItemError: null,
        updateItemError: null,
        isEmpty: false,
        derivedDetails: {
            currencyCode: 'EUR',
            numItems: 1,
            subtotal: 999
        }
    },
    currencyCode: 'EUR',
    handleBeginEditItem: () => {},
    handleDismiss: () => {},
    handleEndEditItem: () => {},
    handleClose: () => {},
    handleToggleCart: () => {},
    isEditingItem: false,
    isLoading: false,
    isMiniCartMaskOpen: false,
    isOpen: true,
    isUpdatingItem: false,
    numItems: 1,
    setStep: () => {},
    shouldShowFooter: true,
    step: '',
    subtotal: 999
};

export default mock;
