/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type ProductDetails_VirtualProduct_Fragment = {
    __typename: 'VirtualProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetails_SimpleProduct_Fragment = {
    __typename: 'SimpleProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetails_DownloadableProduct_Fragment = {
    __typename: 'DownloadableProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetails_BundleProduct_Fragment = {
    __typename: 'BundleProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetails_GroupedProduct_Fragment = {
    __typename: 'GroupedProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetails_ConfigurableProduct_Fragment = {
    __typename: 'ConfigurableProduct';
    id?: Types.Maybe<number>;
    meta_title?: Types.Maybe<string>;
    meta_keyword?: Types.Maybe<string>;
    meta_description?: Types.Maybe<string>;
    sku?: Types.Maybe<string>;
    url_suffix?: Types.Maybe<string>;
    configurable_options?: Types.Maybe<
        Array<
            Types.Maybe<{
                attribute_code?: Types.Maybe<string>;
                attribute_id?: Types.Maybe<string>;
                id?: Types.Maybe<number>;
                label?: Types.Maybe<string>;
                values?: Types.Maybe<
                    Array<
                        Types.Maybe<{
                            default_label?: Types.Maybe<string>;
                            label?: Types.Maybe<string>;
                            store_label?: Types.Maybe<string>;
                            use_default_value?: Types.Maybe<boolean>;
                            value_index?: Types.Maybe<number>;
                        }>
                    >
                >;
            }>
        >
    >;
    variants?: Types.Maybe<
        Array<
            Types.Maybe<{
                attributes?: Types.Maybe<
                    Array<
                        Types.Maybe<{
                            code?: Types.Maybe<string>;
                            value_index?: Types.Maybe<number>;
                        }>
                    >
                >;
                product?: Types.Maybe<{
                    id?: Types.Maybe<number>;
                    sku?: Types.Maybe<string>;
                    stock_status?: Types.Maybe<Types.ProductStockStatus>;
                    media_gallery_entries?: Types.Maybe<
                        Array<
                            Types.Maybe<{
                                disabled?: Types.Maybe<boolean>;
                                file?: Types.Maybe<string>;
                                label?: Types.Maybe<string>;
                                position?: Types.Maybe<number>;
                            }>
                        >
                    >;
                    price_range: {
                        minimum_price: {
                            final_price: {
                                currency?: Types.Maybe<Types.CurrencyEnum>;
                                value?: Types.Maybe<number>;
                            };
                            regular_price: {
                                currency?: Types.Maybe<Types.CurrencyEnum>;
                                value?: Types.Maybe<number>;
                            };
                            discount?: Types.Maybe<{
                                amount_off?: Types.Maybe<number>;
                            }>;
                        };
                    };
                    price_tiers?: Types.Maybe<
                        Array<
                            Types.Maybe<{
                                quantity?: Types.Maybe<number>;
                                final_price?: Types.Maybe<{
                                    currency?: Types.Maybe<Types.CurrencyEnum>;
                                    value?: Types.Maybe<number>;
                                }>;
                            }>
                        >
                    >;
                }>;
            }>
        >
    >;
    categories?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                url_key?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{ category_url_key?: Types.Maybe<string> }>
                    >
                >;
            }>
        >
    >;
    price_tiers?: Types.Maybe<
        Array<
            Types.Maybe<{
                quantity?: Types.Maybe<number>;
                final_price?: Types.Maybe<{
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                    value?: Types.Maybe<number>;
                }>;
            }>
        >
    >;
    small_image?: Types.Maybe<{
        label?: Types.Maybe<string>;
        url?: Types.Maybe<string>;
    }>;
};

export type ProductDetailsFragment =
    | ProductDetails_VirtualProduct_Fragment
    | ProductDetails_SimpleProduct_Fragment
    | ProductDetails_DownloadableProduct_Fragment
    | ProductDetails_BundleProduct_Fragment
    | ProductDetails_GroupedProduct_Fragment
    | ProductDetails_ConfigurableProduct_Fragment;
