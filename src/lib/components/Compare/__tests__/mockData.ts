export const mockProductData = {
    1: {
        __typename: 'BundleProduct',
        description: {
            html: 'product description',
            __typename: 'ComplexTextValue'
        },
        id: 46,
        media_gallery: [
            {
                label: 'Image',
                url: 'imageUrl',
                __typename: 'ProductImage'
            }
        ],
        name: 'product name',
        price_range: {
            maximum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0,
                    __typename: 'ProductDiscount'
                },
                final_price: {
                    currency: 'EUR',
                    value: 77,
                    __typename: 'Money'
                },
                regular_price: {
                    currency: 'EUR',
                    value: 77,
                    __typename: 'Money'
                },
                __typename: 'ProductPrice'
            },
            minimum_price: {
                discount: {
                    amount_off: 0,
                    percent_off: 0,
                    __typename: 'ProductDiscount'
                },
                final_price: {
                    currency: 'EUR',
                    value: 61,
                    __typename: 'Money'
                },
                regular_price: {
                    currency: 'EUR',
                    value: 61,
                    __typename: 'Money'
                },
                __typename: 'ProductPrice'
            },
            __typename: 'PriceRange'
        },
        sku: 'sku-123',
        small_image: {
            url: 'smallImagetUrl',
            label: 'small image label',
            __typename: 'ProductImage'
        },
        url_key: 'urlKey',
        url_suffix: '.html'
    }
};
