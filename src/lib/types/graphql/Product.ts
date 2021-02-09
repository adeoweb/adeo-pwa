import { TSearchResultPageInfo } from 'src/lib/types/graphql/SearchResultPageInfo';
import { TSortFields } from 'src/lib/types/graphql/SortFields';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TComplexTextValue } from 'src/lib/types/graphql/ComplexTextValue';
import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { TMoney } from 'src/lib/types/graphql/Money';
import { TUrlRewrite } from 'src/lib/types/graphql/UrlRewrite';
import { PriceTypeEnum } from 'src/lib/types/graphql/PriceTypeEnum';

export type TProducts<T = TProduct> = {
    aggregations?: TAggregation[];
    items?: T[];
    page_info?: TSearchResultPageInfo;
    sort_fields?: TSortFields;
    total_count?: number;
};

type TPhysicalProductInterface = {
    weight?: number;
};

export type TCustomizableOptionInterface = {
    __typename: string;
    option_id: number;
    required: boolean;
    sort_order: number;
    title: string;
};

type TCustomizableAreaValue = {
    max_characters: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
};

type TCustomizableAreaOption = {
    product_sku: string;
    areaValue: TCustomizableAreaValue;
} & TCustomizableOptionInterface;

type TCustomizableDateValue = {
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
};

type TCustomizableDateOption = {
    product_sku: string;
    dateValue: TCustomizableDateValue;
} & TCustomizableOptionInterface;

type TCustomizableDropDownValue = {
    option_type_id: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
    sort_order: number;
    title: string;
};

type TCustomizableDropDownOption = {
    dropDownValue: TCustomizableDropDownValue[];
} & TCustomizableOptionInterface;

type TCustomizableMultipleValue = {
    option_type_id: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
    sort_order: number;
    title: string;
};

type TCustomizableMultipleOption = {
    multipleValue: TCustomizableMultipleValue[];
} & TCustomizableOptionInterface;

type TCustomizableFieldValue = {
    max_characters: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
};

type TCustomizableFieldOption = {
    product_sku: string;
    fieldValue: TCustomizableFieldValue;
} & TCustomizableOptionInterface;

type TCustomizableFileValue = {
    file_extension: string;
    image_size_x: number;
    image_size_y: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
};

type TCustomizableFileOption = {
    product_sku: string;
    fileValue: TCustomizableFileValue;
} & TCustomizableOptionInterface;

type TCustomizableRadioValue = {
    option_type_id: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
    sort_order: number;
    title: string;
};

type TCustomizableRadioOption = {
    radioValue: TCustomizableRadioValue[];
} & TCustomizableOptionInterface;

type TCustomizableCheckboxValue = {
    option_type_id: number;
    price: number;
    price_type: PriceTypeEnum;
    sku: string;
    sort_order: number;
    title: string;
};

type TCustomizableCheckboxOption = {
    checkboxValue: TCustomizableCheckboxValue[];
} & TCustomizableOptionInterface;

export type TCustomizableOption = TCustomizableAreaOption &
    TCustomizableDateOption &
    TCustomizableDropDownOption &
    TCustomizableMultipleOption &
    TCustomizableFieldOption &
    TCustomizableFileOption &
    TCustomizableRadioOption &
    TCustomizableCheckboxOption;

type TCustomizableProductInterface = {
    options?: TCustomizableOption[];
};

type TConfigurableProductInterface = {
    configurable_options?: TConfigurableProductOption[];
    variants?: TConfigurableVariant[];
};

type TConfigurableVariant = {
    attributes?: TConfigurableAttributeOption[];
    product?: TSimpleProduct;
};

export type TConfigurableProductOption = {
    attribute_code?: string;
    attribute_id?: string;
    id?: number;
    label?: string;
    position?: number;
    product_id?: number;
    use_default?: boolean;
    values?: TConfigurableProductOptionsValues[];
};

export type TConfigurableProductOptionsValues = {
    default_label?: string;
    label?: string;
    store_label?: string;
    use_default_value?: boolean;
    value_index?: number;
};

type TConfigurableAttributeOption = {
    code?: string;
    label?: string;
    value_index?: number;
};

export enum TProductTypes {
    VirtualProduct = 'VirtualProduct',
    SimpleProduct = 'SimpleProduct',
    DownloadableProduct = 'DownloadableProduct',
    BundleProduct = 'BundleProduct',
    GroupedProduct = 'GroupedProduct',
    ConfigurableProduct = 'ConfigurableProduct'
}

export type TProductInterface = {
    __typename?: TProductTypes;
    activity?: string;
    attribute_set_id?: number;
    canonical_url?: string;
    categories?: TCategoryInterface[];
    category_gear?: string;
    climate?: string;
    collar?: string;
    color?: string;
    country_of_manufacture?: string;
    created_at?: string;
    crosssell_products?: TProductInterface[];
    description?: TComplexTextValue;
    eco_collection?: number;
    erin_recommends?: number;
    features_bags?: string;
    format?: number;
    gender?: string;
    gift_message_available?: string;
    id?: number;
    image?: TMediaGalleryInterface;
    is_returnable?: string;
    manufacturer?: number;
    material?: string;
    media_gallery?: TMediaGalleryInterface[];
    meta_description?: string;
    meta_keyword?: string;
    meta_title?: string;
    name?: string;
    new?: number;
    new_from_date?: string;
    new_to_date?: string;
    only_x_left_in_stock?: number;
    options_container?: string;
    pattern?: string;
    performance_fabric?: number;
    price_range: TPriceRange;
    price_tiers?: TTierPrice[];
    product_links?: TProductLinks[];
    purpose?: number;
    related_products?: TProductInterface[];
    sale?: number;
    short_description?: TComplexTextValue;
    size?: number;
    sku?: string;
    sleeve?: string;
    small_image?: TMediaGalleryInterface;
    special_from_date?: string;
    special_price?: number;
    special_to_date?: string;
    stock_status?: 'IN_STOCK' | 'OUT_OF_STOCK';
    strap_bags?: string;
    style_bags?: string;
    style_bottom?: string;
    style_general?: string;
    swatch_image?: string;
    thumbnail?: TMediaGalleryInterface;
    updated_at?: string;
    upsell_products?: TProductInterface[];
    url_key?: string;
    url_rewrites?: TUrlRewrite[];
    url_suffix?: string;
};

export type TPriceRange = {
    maximum_price?: TProductPrice;
    minimum_price: TProductPrice;
};

export type TProductPrice = {
    discount: TProductDiscount;
    final_price: TMoney;
    fixed_product_taxes?: TFixedProductTax[];
    regular_price: TMoney;
};

export type TProductDiscount = {
    amount_off?: number;
    percent_off?: number;
};

type TFixedProductTax = {
    amount?: TMoney;
    label?: string;
};

export type TTierPrice = {
    discount?: TProductDiscount;
    final_price?: TMoney;
    quantity?: number;
};

type TProductLinks = {
    link_type?: string;
    linked_product_sku?: string;
    linked_product_type?: string;
    position?: number;
    sku?: string;
};

export type TSimpleProduct = TProductInterface &
    TPhysicalProductInterface &
    TCustomizableProductInterface;

export type TConfigurableProduct = TSimpleProduct &
    TConfigurableProductInterface;

export type TProduct = TSimpleProduct | TConfigurableProduct;
