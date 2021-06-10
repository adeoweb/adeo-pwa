import { TUseMiniCart } from 'src/peregrine/lib/talons/adeoweb/MiniCart/useMiniCart';
import { TPriceRange, TProductPrice } from 'src/lib/types/graphql/Product';
import { CurrencyEnum } from 'src/lib/types/graphql/Money';

const productPrice: TProductPrice = {
    regular_price: {
        value: 10,
        currency: CurrencyEnum.Eur
    },
    discount: {
        amount_off: 0,
        percent_off: 0
    },
    final_price: {
        value: 0,
        currency: CurrencyEnum.Eur
    },
    fixed_product_taxes: [
        {
            amount: {
                value: 0,
                currency: CurrencyEnum.Eur
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
                price_range: priceRange,
                min_sale_qty: 1
            },
            quantity: 20,
            configurable_options: [
                {
                    id: 124,
                    option_label: 'option-label',
                    value_id: 125,
                    value_label: 'value-label'
                }
            ],
            customizable_options: [
                {
                    id: 126,
                    is_required: false,
                    label: 'custom-option-label',
                    sort_order: 0,
                    values: []
                }
            ]
        }
    ],
    cartState: {
        addItemError: null,
        cartId: 'testCartId',
        details: {
            total_quantity: 10,
            id: '123',
            is_virtual: false,
            items: [
                {
                    id: '123',
                    product: {
                        min_sale_qty: 1,
                        name: 'test product name',
                        sku: 'testSku123',
                        url_key: 'product.html',
                        small_image: {
                            url: '',
                            label: ''
                        },
                        price_range: priceRange
                    },
                    quantity: 20,
                    configurable_options: [
                        {
                            id: 124,
                            option_label: 'option-label',
                            value_id: 125,
                            value_label: 'value-label'
                        }
                    ],
                    customizable_options: [
                        {
                            id: 126,
                            is_required: false,
                            label: 'custom-option-label',
                            sort_order: 0,
                            values: []
                        }
                    ]
                }
            ],
            prices: {
                grand_total: {
                    value: 999,
                    currency: CurrencyEnum.Eur
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
                    telephone: 'telephone',
                    same_as_billing: false
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
            currencyCode: CurrencyEnum.Eur,
            numItems: 1,
            subtotal: 999
        }
    },
    currencyCode: CurrencyEnum.Eur,
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
