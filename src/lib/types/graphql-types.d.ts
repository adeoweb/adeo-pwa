/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Query = {
    /** Returns information about shopping cart */
    cart?: Maybe<Cart>;
    /**
     * The category query searches for categories that match the criteria specified in the search and filter attributes.
     * @deprecated Use 'categoryList' query instead of 'category' query
     */
    category?: Maybe<CategoryTree>;
    /** Returns an array of categories based on the specified filters. */
    categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
    /** The Checkout Agreements information */
    checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
    /** The CMS block query returns information about CMS blocks */
    cmsBlocks?: Maybe<CmsBlocks>;
    /** The CMS page query returns information about a CMS page */
    cmsPage?: Maybe<CmsPage>;
    /** The countries query provides information for all countries. */
    countries?: Maybe<Array<Maybe<Country>>>;
    /** The countries query provides information for a single country. */
    country?: Maybe<Country>;
    /** The currency query returns information about store currency. */
    currency?: Maybe<Currency>;
    /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
    customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
    /** The customer query returns information about a customer account */
    customer?: Maybe<Customer>;
    /** Returns information about the customer shopping cart */
    customerCart: Cart;
    /** The query returns the contents of a customer's downloadable products */
    customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
    /** List of customer orders */
    customerOrderList?: Maybe<CustomerOrders>;
    /** List of customer orders */
    customerOrders?: Maybe<CustomerOrders>;
    /** Return a list of customer payment tokens */
    customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
    /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
    getHostedProUrl?: Maybe<HostedProUrl>;
    /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
    getPayflowLinkToken?: Maybe<PayflowLinkToken>;
    isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
    /** The products query searches for products that match the criteria specified in the search and filter attributes. */
    products?: Maybe<Products>;
    /** The store config query */
    storeConfig?: Maybe<StoreConfig>;
    /** All stores and their info */
    storeList?: Maybe<Array<Maybe<Store>>>;
    /** The urlResolver query returns the relative URL for a specified product, category or CMS page, using as input a url_key appended by the url_suffix, if one exists */
    urlResolver?: Maybe<EntityUrl>;
    /**
     * The wishlist query returns the contents of a customer's wish list
     * @deprecated Moved under `Customer` `wishlist`
     */
    wishlist?: Maybe<WishlistOutput>;
};

export type QueryCartArgs = {
    cart_id: Scalars['String'];
};

export type QueryCategoryArgs = {
    id?: Maybe<Scalars['Int']>;
};

export type QueryCategoryListArgs = {
    filters?: Maybe<CategoryFilterInput>;
};

export type QueryCmsBlocksArgs = {
    identifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryCmsPageArgs = {
    id?: Maybe<Scalars['Int']>;
    identifier?: Maybe<Scalars['String']>;
};

export type QueryCountryArgs = {
    id?: Maybe<Scalars['String']>;
};

export type QueryCustomAttributeMetadataArgs = {
    attributes: Array<AttributeInput>;
};

export type QueryCustomerOrderListArgs = {
    filter?: Maybe<OrderFilterInput>;
    pageSize?: Maybe<Scalars['Int']>;
    currentPage?: Maybe<Scalars['Int']>;
    sort?: Maybe<OrderSortInput>;
};

export type QueryGetHostedProUrlArgs = {
    input: HostedProUrlInput;
};

export type QueryGetPayflowLinkTokenArgs = {
    input: PayflowLinkTokenInput;
};

export type QueryIsEmailAvailableArgs = {
    email: Scalars['String'];
};

export type QueryProductsArgs = {
    search?: Maybe<Scalars['String']>;
    filter?: Maybe<ProductAttributeFilterInput>;
    pageSize?: Maybe<Scalars['Int']>;
    currentPage?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductAttributeSortInput>;
};

export type QueryUrlResolverArgs = {
    url: Scalars['String'];
};

export type Cart = {
    /**
     * An array of coupons that have been applied to the cart
     * @deprecated Use applied_coupons instead
     */
    applied_coupon?: Maybe<AppliedCoupon>;
    /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
    applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
    /** Available payment methods */
    available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
    billing_address?: Maybe<BillingCartAddress>;
    email?: Maybe<Scalars['String']>;
    /** The ID of the cart. */
    id: Scalars['ID'];
    is_virtual: Scalars['Boolean'];
    items?: Maybe<Array<Maybe<CartItemInterface>>>;
    prices?: Maybe<CartPrices>;
    selected_payment_method?: Maybe<SelectedPaymentMethod>;
    shipping_addresses: Array<Maybe<ShippingCartAddress>>;
    total_quantity: Scalars['Float'];
};

export type AppliedCoupon = {
    code: Scalars['String'];
};

export type AvailablePaymentMethod = {
    /** The payment method code */
    code: Scalars['String'];
    /** The payment method title. */
    title: Scalars['String'];
};

export type BillingCartAddress = CartAddressInterface & {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    /** Customer address ID */
    customer_address_id?: Maybe<Scalars['Int']>;
    /** @deprecated The field is used only in shipping address */
    customer_notes?: Maybe<Scalars['String']>;
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type CartAddressInterface = {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    /** Customer address ID */
    customer_address_id?: Maybe<Scalars['Int']>;
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type CartAddressCountry = {
    code: Scalars['String'];
    label: Scalars['String'];
};

export type CartAddressRegion = {
    code: Scalars['String'];
    label: Scalars['String'];
};

export type CartItemInterface = {
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
};

export type CartItemPrices = {
    /** An array of discounts to be applied to the cart item */
    discounts?: Maybe<Array<Maybe<Discount>>>;
    price: Money;
    row_total: Money;
    row_total_including_tax: Money;
    /** The total of all discounts applied to the item */
    total_item_discount?: Maybe<Money>;
};

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export type Discount = {
    /** The amount of the discount */
    amount: Money;
    /** A description of the discount */
    label: Scalars['String'];
};

/** A Money object defines a monetary value, including a numeric value and a currency code. */
export type Money = {
    /** A three-letter currency code, such as USD or EUR */
    currency?: Maybe<CurrencyEnum>;
    /** A number expressing a monetary value */
    value?: Maybe<Scalars['Float']>;
};

/** The list of available currency codes */
export enum CurrencyEnum {
    Afn = 'AFN',
    All = 'ALL',
    Azn = 'AZN',
    Dzd = 'DZD',
    Aoa = 'AOA',
    Ars = 'ARS',
    Amd = 'AMD',
    Awg = 'AWG',
    Aud = 'AUD',
    Bsd = 'BSD',
    Bhd = 'BHD',
    Bdt = 'BDT',
    Bbd = 'BBD',
    Byr = 'BYR',
    Bzd = 'BZD',
    Bmd = 'BMD',
    Btn = 'BTN',
    Bob = 'BOB',
    Bam = 'BAM',
    Bwp = 'BWP',
    Brl = 'BRL',
    Gbp = 'GBP',
    Bnd = 'BND',
    Bgn = 'BGN',
    Buk = 'BUK',
    Bif = 'BIF',
    Khr = 'KHR',
    Cad = 'CAD',
    Cve = 'CVE',
    Czk = 'CZK',
    Kyd = 'KYD',
    Gqe = 'GQE',
    Clp = 'CLP',
    Cny = 'CNY',
    Cop = 'COP',
    Kmf = 'KMF',
    Cdf = 'CDF',
    Crc = 'CRC',
    Hrk = 'HRK',
    Cup = 'CUP',
    Dkk = 'DKK',
    Djf = 'DJF',
    Dop = 'DOP',
    Xcd = 'XCD',
    Egp = 'EGP',
    Svc = 'SVC',
    Ern = 'ERN',
    Eek = 'EEK',
    Etb = 'ETB',
    Eur = 'EUR',
    Fkp = 'FKP',
    Fjd = 'FJD',
    Gmd = 'GMD',
    Gek = 'GEK',
    Gel = 'GEL',
    Ghs = 'GHS',
    Gip = 'GIP',
    Gtq = 'GTQ',
    Gnf = 'GNF',
    Gyd = 'GYD',
    Htg = 'HTG',
    Hnl = 'HNL',
    Hkd = 'HKD',
    Huf = 'HUF',
    Isk = 'ISK',
    Inr = 'INR',
    Idr = 'IDR',
    Irr = 'IRR',
    Iqd = 'IQD',
    Ils = 'ILS',
    Jmd = 'JMD',
    Jpy = 'JPY',
    Jod = 'JOD',
    Kzt = 'KZT',
    Kes = 'KES',
    Kwd = 'KWD',
    Kgs = 'KGS',
    Lak = 'LAK',
    Lvl = 'LVL',
    Lbp = 'LBP',
    Lsl = 'LSL',
    Lrd = 'LRD',
    Lyd = 'LYD',
    Ltl = 'LTL',
    Mop = 'MOP',
    Mkd = 'MKD',
    Mga = 'MGA',
    Mwk = 'MWK',
    Myr = 'MYR',
    Mvr = 'MVR',
    Lsm = 'LSM',
    Mro = 'MRO',
    Mur = 'MUR',
    Mxn = 'MXN',
    Mdl = 'MDL',
    Mnt = 'MNT',
    Mad = 'MAD',
    Mzn = 'MZN',
    Mmk = 'MMK',
    Nad = 'NAD',
    Npr = 'NPR',
    Ang = 'ANG',
    Ytl = 'YTL',
    Nzd = 'NZD',
    Nic = 'NIC',
    Ngn = 'NGN',
    Kpw = 'KPW',
    Nok = 'NOK',
    Omr = 'OMR',
    Pkr = 'PKR',
    Pab = 'PAB',
    Pgk = 'PGK',
    Pyg = 'PYG',
    Pen = 'PEN',
    Php = 'PHP',
    Pln = 'PLN',
    Qar = 'QAR',
    Rhd = 'RHD',
    Ron = 'RON',
    Rub = 'RUB',
    Rwf = 'RWF',
    Shp = 'SHP',
    Std = 'STD',
    Sar = 'SAR',
    Rsd = 'RSD',
    Scr = 'SCR',
    Sll = 'SLL',
    Sgd = 'SGD',
    Skk = 'SKK',
    Sbd = 'SBD',
    Sos = 'SOS',
    Zar = 'ZAR',
    Krw = 'KRW',
    Lkr = 'LKR',
    Sdg = 'SDG',
    Srd = 'SRD',
    Szl = 'SZL',
    Sek = 'SEK',
    Chf = 'CHF',
    Syp = 'SYP',
    Twd = 'TWD',
    Tjs = 'TJS',
    Tzs = 'TZS',
    Thb = 'THB',
    Top = 'TOP',
    Ttd = 'TTD',
    Tnd = 'TND',
    Tmm = 'TMM',
    Usd = 'USD',
    Ugx = 'UGX',
    Uah = 'UAH',
    Aed = 'AED',
    Uyu = 'UYU',
    Uzs = 'UZS',
    Vuv = 'VUV',
    Veb = 'VEB',
    Vef = 'VEF',
    Vnd = 'VND',
    Che = 'CHE',
    Chw = 'CHW',
    Xof = 'XOF',
    Wst = 'WST',
    Yer = 'YER',
    Zmk = 'ZMK',
    Zwd = 'ZWD',
    Try = 'TRY',
    Azm = 'AZM',
    Rol = 'ROL',
    Trl = 'TRL',
    Xpf = 'XPF'
}

/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export type ProductInterface = {
    activity?: Maybe<Scalars['String']>;
    /** The attribute set assigned to the product. */
    attribute_set_id?: Maybe<Scalars['Int']>;
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<CategoryInterface>>>;
    category_gear?: Maybe<Scalars['String']>;
    climate?: Maybe<Scalars['String']>;
    collar?: Maybe<Scalars['String']>;
    color?: Maybe<Scalars['Int']>;
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>;
    /** Timestamp indicating when the product was created. */
    created_at?: Maybe<Scalars['String']>;
    /** Crosssell Products */
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<ComplexTextValue>;
    eco_collection?: Maybe<Scalars['Int']>;
    erin_recommends?: Maybe<Scalars['Int']>;
    features_bags?: Maybe<Scalars['String']>;
    format?: Maybe<Scalars['Int']>;
    gender?: Maybe<Scalars['String']>;
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>;
    /** The ID number assigned to the product. */
    id?: Maybe<Scalars['Int']>;
    /** The relative path to the main image on the product page. */
    image?: Maybe<ProductImage>;
    /** A number representing the product's manufacturer. */
    manufacturer?: Maybe<Scalars['Int']>;
    material?: Maybe<Scalars['String']>;
    /** An array of Media Gallery objects. */
    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use product's `media_gallery` instead
     */
    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>;
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>;
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>;
    /** Minimum Qty Allowed in Shopping Cart */
    min_sale_qty: Scalars['Float'];
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>;
    new?: Maybe<Scalars['Int']>;
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    new_from_date?: Maybe<Scalars['String']>;
    /** The end date for new product listings. */
    new_to_date?: Maybe<Scalars['String']>;
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>;
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>;
    pattern?: Maybe<Scalars['String']>;
    performance_fabric?: Maybe<Scalars['Int']>;
    /**
     * A ProductPrices object, indicating the price of an item.
     * @deprecated Use price_range for product price information.
     */
    price?: Maybe<ProductPrices>;
    /** A PriceRange object, indicating the range of prices for the product */
    price_range: PriceRange;
    /** An array of TierPrice objects. */
    price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
    /** An array of ProductLinks objects. */
    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
    /** Related Products */
    related_products?: Maybe<Array<Maybe<ProductInterface>>>;
    sale?: Maybe<Scalars['Int']>;
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<ComplexTextValue>;
    size?: Maybe<Scalars['Int']>;
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>;
    sleeve?: Maybe<Scalars['String']>;
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<ProductImage>;
    /** The beginning date that a product has a special price. */
    special_from_date?: Maybe<Scalars['String']>;
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>;
    /** The end date that a product has a special price. */
    special_to_date?: Maybe<Scalars['String']>;
    /** Stock status of the product */
    stock_status?: Maybe<ProductStockStatus>;
    strap_bags?: Maybe<Scalars['String']>;
    style_bags?: Maybe<Scalars['String']>;
    style_bottom?: Maybe<Scalars['String']>;
    style_general?: Maybe<Scalars['String']>;
    /** The file name of a swatch image */
    swatch_image?: Maybe<Scalars['String']>;
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<ProductImage>;
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use price_tiers for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>;
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use price_tiers for product tier price information.
     */
    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use __typename instead.
     */
    type_id?: Maybe<Scalars['String']>;
    /** Timestamp indicating when the product was updated. */
    updated_at?: Maybe<Scalars['String']>;
    /** Upsell Products */
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>;
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>;
    /** URL rewrites list */
    url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
    /** The part of the product URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>;
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
    websites?: Maybe<Array<Maybe<Website>>>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterface = {
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Breadcrumbs, parent categories info. */
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    children_count?: Maybe<Scalars['String']>;
    /** Category CMS Block. */
    cms_block?: Maybe<CmsBlock>;
    /** Timestamp indicating when the category was created. */
    created_at?: Maybe<Scalars['String']>;
    custom_layout_update_file?: Maybe<Scalars['String']>;
    /** The attribute to use for sorting. */
    default_sort_by?: Maybe<Scalars['String']>;
    /** An optional description of the category. */
    description?: Maybe<Scalars['String']>;
    display_mode?: Maybe<Scalars['String']>;
    filter_price_range?: Maybe<Scalars['Float']>;
    /** An ID that uniquely identifies the category. */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    include_in_menu?: Maybe<Scalars['Int']>;
    is_anchor?: Maybe<Scalars['Int']>;
    landing_page?: Maybe<Scalars['Int']>;
    /** Indicates the depth of the category within the tree. */
    level?: Maybe<Scalars['Int']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    /** The display name of the category. */
    name?: Maybe<Scalars['String']>;
    /** Category Path. */
    path?: Maybe<Scalars['String']>;
    /** Category path in store. */
    path_in_store?: Maybe<Scalars['String']>;
    /** The position of the category relative to other categories at the same level in tree. */
    position?: Maybe<Scalars['Int']>;
    /** The number of products in the category. */
    product_count?: Maybe<Scalars['Int']>;
    /** The list of products assigned to the category. */
    products?: Maybe<CategoryProducts>;
    /** Timestamp indicating when the category was updated. */
    updated_at?: Maybe<Scalars['String']>;
    /** The url key assigned to the category. */
    url_key?: Maybe<Scalars['String']>;
    /** The url path assigned to the category. */
    url_path?: Maybe<Scalars['String']>;
    /** The part of the category URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>;
};

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export type CategoryInterfaceProductsArgs = {
    pageSize?: Maybe<Scalars['Int']>;
    currentPage?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductAttributeSortInput>;
};

/** Breadcrumb item. */
export type Breadcrumb = {
    /** Category ID. */
    category_id?: Maybe<Scalars['Int']>;
    /** Category level. */
    category_level?: Maybe<Scalars['Int']>;
    /** Category name. */
    category_name?: Maybe<Scalars['String']>;
    /** Category URL key. */
    category_url_key?: Maybe<Scalars['String']>;
    /** Category URL path. */
    category_url_path?: Maybe<Scalars['String']>;
};

/** CMS block defines all CMS block information */
export type CmsBlock = {
    /** CMS block content */
    content?: Maybe<Scalars['String']>;
    /** CMS block identifier */
    identifier?: Maybe<Scalars['String']>;
    /** CMS block title */
    title?: Maybe<Scalars['String']>;
};

/** ProductAttributeSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export type ProductAttributeSortInput = {
    /** Attribute label: Product Name */
    name?: Maybe<SortEnum>;
    /** Sort by the position assigned to each product. */
    position?: Maybe<SortEnum>;
    /** Attribute label: Price */
    price?: Maybe<SortEnum>;
    /** Sort by the search relevance score (default). */
    relevance?: Maybe<SortEnum>;
};

/** This enumeration indicates whether to return results in ascending or descending order */
export enum SortEnum {
    Asc = 'ASC',
    Desc = 'DESC'
}

/** The category products object returned in the Category query. */
export type CategoryProducts = {
    /** An array of products that are assigned to the category. */
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    /** An object that includes the page_info and currentPage values specified in the query. */
    page_info?: Maybe<SearchResultPageInfo>;
    /** The number of products returned. */
    total_count?: Maybe<Scalars['Int']>;
};

/** SearchResultPageInfo provides navigation for the query response */
export type SearchResultPageInfo = {
    /** Specifies which page of results to return */
    current_page?: Maybe<Scalars['Int']>;
    /** Specifies the maximum number of items to return */
    page_size?: Maybe<Scalars['Int']>;
    /** Total pages */
    total_pages?: Maybe<Scalars['Int']>;
};

export type ComplexTextValue = {
    /** HTML format */
    html: Scalars['String'];
};

/** Product image information. Contains the image URL and label. */
export type ProductImage = MediaGalleryInterface & {
    /** The label of the product image or video. */
    label?: Maybe<Scalars['String']>;
    /** The URL of the product image or video. */
    url?: Maybe<Scalars['String']>;
};

/** Contains basic information about a product image or video. */
export type MediaGalleryInterface = {
    /** The label of the product image or video. */
    label?: Maybe<Scalars['String']>;
    /** The URL of the product image or video. */
    url?: Maybe<Scalars['String']>;
};

/** MediaGalleryEntry defines characteristics about images and videos associated with a specific product. */
export type MediaGalleryEntry = {
    /** Contains a ProductMediaGalleryEntriesContent object. */
    content?: Maybe<ProductMediaGalleryEntriesContent>;
    /** Whether the image is hidden from vie. */
    disabled?: Maybe<Scalars['Boolean']>;
    /** The path of the image on the server. */
    file?: Maybe<Scalars['String']>;
    /** The identifier assigned to the object. */
    id?: Maybe<Scalars['Int']>;
    /** The alt text displayed on the UI when the user points to the image. */
    label?: Maybe<Scalars['String']>;
    /** image or video. */
    media_type?: Maybe<Scalars['String']>;
    /** The media item's position after it has been sorted. */
    position?: Maybe<Scalars['Int']>;
    /** Array of image types. It can have the following values: image, small_image, thumbnail. */
    types?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Contains a ProductMediaGalleryEntriesVideoContent object. */
    video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** ProductMediaGalleryEntriesContent contains an image in base64 format and basic information about the image. */
export type ProductMediaGalleryEntriesContent = {
    /** The image in base64 format. */
    base64_encoded_data?: Maybe<Scalars['String']>;
    /** The file name of the image. */
    name?: Maybe<Scalars['String']>;
    /** The MIME type of the file, such as image/png. */
    type?: Maybe<Scalars['String']>;
};

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export type ProductMediaGalleryEntriesVideoContent = {
    /** Must be external-video. */
    media_type?: Maybe<Scalars['String']>;
    /** A description of the video. */
    video_description?: Maybe<Scalars['String']>;
    /** Optional data about the video. */
    video_metadata?: Maybe<Scalars['String']>;
    /** Describes the video source. */
    video_provider?: Maybe<Scalars['String']>;
    /** The title of the video. */
    video_title?: Maybe<Scalars['String']>;
    /** The URL to the video. */
    video_url?: Maybe<Scalars['String']>;
};

/** ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export type ProductPrices = {
    /**
     * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the to value.
     * @deprecated Use PriceRange.maximum_price.
     */
    maximalPrice?: Maybe<Price>;
    /**
     * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the from value.
     * @deprecated Use PriceRange.minimum_price.
     */
    minimalPrice?: Maybe<Price>;
    /**
     * The base price of a product.
     * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
     */
    regularPrice?: Maybe<Price>;
};

/** Price is deprecated, replaced by ProductPrice. The Price object defines the price of a product as well as any tax-related adjustments. */
export type Price = {
    /**
     * An array that provides information about tax, weee, or weee_tax adjustments.
     * @deprecated Price is deprecated, use ProductPrice.
     */
    adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
    /**
     * The price of a product plus a three-letter currency code.
     * @deprecated Price is deprecated, use ProductPrice.
     */
    amount?: Maybe<Money>;
};

/** PriceAdjustment is deprecated. Taxes will be included or excluded in the price. The PricedAdjustment object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export type PriceAdjustment = {
    /** The amount of the price adjustment and its currency code. */
    amount?: Maybe<Money>;
    /**
     * Indicates whether the adjustment involves tax, weee, or weee_tax.
     * @deprecated PriceAdjustment is deprecated.
     */
    code?: Maybe<PriceAdjustmentCodesEnum>;
    /**
     * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
     * @deprecated PriceAdjustment is deprecated.
     */
    description?: Maybe<PriceAdjustmentDescriptionEnum>;
};

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum PriceAdjustmentCodesEnum {
    Tax = 'TAX',
    Weee = 'WEEE',
    WeeeTax = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
    Included = 'INCLUDED',
    Excluded = 'EXCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export type PriceRange = {
    /** The highest possible price for the product. */
    maximum_price?: Maybe<ProductPrice>;
    /** The lowest possible price for the product. */
    minimum_price: ProductPrice;
};

/** Represents a product price. */
export type ProductPrice = {
    /** The price discount. Represents the difference between the regular and final price. */
    discount?: Maybe<ProductDiscount>;
    /** The final price of the product after discounts applied. */
    final_price: Money;
    /** The multiple FPTs that can be applied to a product price. */
    fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
    /** The regular price of the product. */
    regular_price: Money;
};

/** A discount applied to a product price. */
export type ProductDiscount = {
    /** The actual value of the discount. */
    amount_off?: Maybe<Scalars['Float']>;
    /** The discount expressed a percentage. */
    percent_off?: Maybe<Scalars['Float']>;
};

/** A single FPT that can be applied to a product price. */
export type FixedProductTax = {
    /** Amount of the FPT as a money object. */
    amount?: Maybe<Money>;
    /** The label assigned to the FPT to be displayed on the frontend. */
    label?: Maybe<Scalars['String']>;
};

/** A price based on the quantity purchased. */
export type TierPrice = {
    /** The price discount that this tier represents. */
    discount?: Maybe<ProductDiscount>;
    final_price?: Maybe<Money>;
    /** The minimum number of items that must be purchased to qualify for this price tier. */
    quantity?: Maybe<Scalars['Float']>;
};

/** ProductLinks contains information about linked products, including the link type and product type of each item. */
export type ProductLinksInterface = {
    /** One of related, associated, upsell, or crosssell. */
    link_type?: Maybe<Scalars['String']>;
    /** The SKU of the linked product. */
    linked_product_sku?: Maybe<Scalars['String']>;
    /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
    linked_product_type?: Maybe<Scalars['String']>;
    /** The position within the list of product links. */
    position?: Maybe<Scalars['Int']>;
    /** The identifier of the linked product. */
    sku?: Maybe<Scalars['String']>;
};

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
    InStock = 'IN_STOCK',
    OutOfStock = 'OUT_OF_STOCK'
}

/** ProductTierPrices is deprecated and has been replaced by TierPrice. The ProductTierPrices object defines a tier price, which is a quantity discount offered to a specific customer group. */
export type ProductTierPrices = {
    /**
     * The ID of the customer group.
     * @deprecated customer_group_id is not relevant for storefront.
     */
    customer_group_id?: Maybe<Scalars['String']>;
    /**
     * The percentage discount of the item.
     * @deprecated ProductTierPrices is deprecated. Use TierPrice.discount.
     */
    percentage_value?: Maybe<Scalars['Float']>;
    /**
     * The number of items that must be purchased to qualify for tier pricing.
     * @deprecated ProductTierPrices is deprecated, use TierPrice.quantity.
     */
    qty?: Maybe<Scalars['Float']>;
    /**
     * The price of the fixed price item.
     * @deprecated ProductTierPrices is deprecated. Use TierPrice.final_price
     */
    value?: Maybe<Scalars['Float']>;
    /**
     * The ID assigned to the website.
     * @deprecated website_id is not relevant for storefront.
     */
    website_id?: Maybe<Scalars['Float']>;
};

/** The object contains URL rewrite details */
export type UrlRewrite = {
    /** Request parameters */
    parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
    /** Request URL */
    url?: Maybe<Scalars['String']>;
};

/** The object details of target path parameters */
export type HttpQueryParameter = {
    /** Parameter name */
    name?: Maybe<Scalars['String']>;
    /** Parameter value */
    value?: Maybe<Scalars['String']>;
};

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export type Website = {
    /**
     * A code assigned to the website to identify it
     * @deprecated The field should not be used on the storefront.
     */
    code?: Maybe<Scalars['String']>;
    /**
     * The default group ID that the website has
     * @deprecated The field should not be used on the storefront.
     */
    default_group_id?: Maybe<Scalars['String']>;
    /**
     * The ID number assigned to the website
     * @deprecated The field should not be used on the storefront.
     */
    id?: Maybe<Scalars['Int']>;
    /**
     * Specifies if this is the default website
     * @deprecated The field should not be used on the storefront.
     */
    is_default?: Maybe<Scalars['Boolean']>;
    /**
     * The website name. Websites use this name to identify it easier.
     * @deprecated The field should not be used on the storefront.
     */
    name?: Maybe<Scalars['String']>;
    /**
     * The attribute to use for sorting websites
     * @deprecated The field should not be used on the storefront.
     */
    sort_order?: Maybe<Scalars['Int']>;
};

export type CartPrices = {
    applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
    /** @deprecated Use discounts instead  */
    discount?: Maybe<CartDiscount>;
    /** An array of applied discounts */
    discounts?: Maybe<Array<Maybe<Discount>>>;
    grand_total?: Maybe<Money>;
    subtotal_excluding_tax?: Maybe<Money>;
    subtotal_including_tax?: Maybe<Money>;
    subtotal_with_discount_excluding_tax?: Maybe<Money>;
};

export type CartTaxItem = {
    amount: Money;
    label: Scalars['String'];
};

export type CartDiscount = {
    amount: Money;
    label: Array<Maybe<Scalars['String']>>;
};

export type SelectedPaymentMethod = {
    /** The payment method code */
    code: Scalars['String'];
    /** The purchase order number. */
    purchase_order_number?: Maybe<Scalars['String']>;
    /** The payment method title. */
    title: Scalars['String'];
};

export type ShippingCartAddress = CartAddressInterface & {
    available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
    /** @deprecated `cart_items_v2` should be used instead */
    cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
    cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: CartAddressCountry;
    /** Customer address ID */
    customer_address_id?: Maybe<Scalars['Int']>;
    customer_notes?: Maybe<Scalars['String']>;
    firstname: Scalars['String'];
    /** @deprecated This information shoud not be exposed on frontend */
    items_weight?: Maybe<Scalars['Float']>;
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<CartAddressRegion>;
    same_as_billing: Scalars['Boolean'];
    selected_shipping_method?: Maybe<SelectedShippingMethod>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type AvailableShippingMethod = {
    amount: Money;
    available: Scalars['Boolean'];
    /** @deprecated The field should not be used on the storefront */
    base_amount?: Maybe<Money>;
    carrier_code: Scalars['String'];
    carrier_title: Scalars['String'];
    error_message?: Maybe<Scalars['String']>;
    /** Could be null if method is not available */
    method_code?: Maybe<Scalars['String']>;
    /** Could be null if method is not available */
    method_title?: Maybe<Scalars['String']>;
    price_excl_tax: Money;
    price_incl_tax: Money;
};

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export type CartItemQuantity = {
    /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
    cart_item_id: Scalars['Int'];
    /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
    quantity: Scalars['Float'];
};

export type SelectedShippingMethod = {
    amount: Money;
    /** @deprecated The field should not be used on the storefront */
    base_amount?: Maybe<Money>;
    carrier_code: Scalars['String'];
    carrier_title: Scalars['String'];
    method_code: Scalars['String'];
    method_title: Scalars['String'];
};

/** Category Tree implementation. */
export type CategoryTree = CategoryInterface & {
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Breadcrumbs, parent categories info. */
    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    /** Child categories tree. */
    children?: Maybe<Array<Maybe<CategoryTree>>>;
    children_count?: Maybe<Scalars['String']>;
    /** Category CMS Block. */
    cms_block?: Maybe<CmsBlock>;
    /** Timestamp indicating when the category was created. */
    created_at?: Maybe<Scalars['String']>;
    custom_layout_update_file?: Maybe<Scalars['String']>;
    /** The attribute to use for sorting. */
    default_sort_by?: Maybe<Scalars['String']>;
    /** An optional description of the category. */
    description?: Maybe<Scalars['String']>;
    display_mode?: Maybe<Scalars['String']>;
    filter_price_range?: Maybe<Scalars['Float']>;
    /** An ID that uniquely identifies the category. */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    include_in_menu?: Maybe<Scalars['Int']>;
    is_anchor?: Maybe<Scalars['Int']>;
    landing_page?: Maybe<Scalars['Int']>;
    /** Indicates the depth of the category within the tree. */
    level?: Maybe<Scalars['Int']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    /** The display name of the category. */
    name?: Maybe<Scalars['String']>;
    /** Category Path. */
    path?: Maybe<Scalars['String']>;
    /** Category path in store. */
    path_in_store?: Maybe<Scalars['String']>;
    /** The position of the category relative to other categories at the same level in tree. */
    position?: Maybe<Scalars['Int']>;
    /** The number of products in the category. */
    product_count?: Maybe<Scalars['Int']>;
    /** The list of products assigned to the category. */
    products?: Maybe<CategoryProducts>;
    /** Timestamp indicating when the category was updated. */
    updated_at?: Maybe<Scalars['String']>;
    /** The url key assigned to the category. */
    url_key?: Maybe<Scalars['String']>;
    /** The url path assigned to the category. */
    url_path?: Maybe<Scalars['String']>;
    /** The part of the category URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>;
};

/** Category Tree implementation. */
export type CategoryTreeProductsArgs = {
    pageSize?: Maybe<Scalars['Int']>;
    currentPage?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductAttributeSortInput>;
};

/** CategoryFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type CategoryFilterInput = {
    /** Filter by category ID that uniquely identifies the category. */
    ids?: Maybe<FilterEqualTypeInput>;
    /** Filter by the display name of the category. */
    name?: Maybe<FilterMatchTypeInput>;
    /** Filter by the part of the URL that identifies the category */
    url_key?: Maybe<FilterEqualTypeInput>;
};

/** Defines a filter that matches the input exactly. */
export type FilterEqualTypeInput = {
    /** A string to filter on */
    eq?: Maybe<Scalars['String']>;
    /** An array of values to filter on */
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Defines a filter that performs a fuzzy search. */
export type FilterMatchTypeInput = {
    /** One or more words to filter on */
    match?: Maybe<Scalars['String']>;
};

/** Defines all Checkout Agreement information */
export type CheckoutAgreement = {
    /** Checkout Agreement identifier */
    agreement_id: Scalars['Int'];
    /** Checkout Agreement checkbox text */
    checkbox_text: Scalars['String'];
    /** Checkout Agreement content */
    content: Scalars['String'];
    /** Checkout Agreement content height */
    content_height?: Maybe<Scalars['String']>;
    /** Is Checkout Agreement content in HTML format */
    is_html: Scalars['Boolean'];
    mode: CheckoutAgreementMode;
    /** Checkout Agreement name */
    name: Scalars['String'];
};

export enum CheckoutAgreementMode {
    Auto = 'AUTO',
    Manual = 'MANUAL'
}

/** CMS blocks information */
export type CmsBlocks = {
    /** An array of CMS blocks */
    items?: Maybe<Array<Maybe<CmsBlock>>>;
};

/** CMS page defines all CMS page information */
export type CmsPage = {
    /** CMS page content */
    content?: Maybe<Scalars['String']>;
    /** CMS page content heading */
    content_heading?: Maybe<Scalars['String']>;
    /** Identifier of the CMS page */
    identifier?: Maybe<Scalars['String']>;
    /** CMS page meta description */
    meta_description?: Maybe<Scalars['String']>;
    /** CMS page meta keywords */
    meta_keywords?: Maybe<Scalars['String']>;
    /** CMS page meta title */
    meta_title?: Maybe<Scalars['String']>;
    /** CMS page content heading */
    page_layout?: Maybe<Scalars['String']>;
    /** CMS page title */
    title?: Maybe<Scalars['String']>;
    /** URL key of CMS page */
    url_key?: Maybe<Scalars['String']>;
};

export type Country = {
    available_regions?: Maybe<Array<Maybe<Region>>>;
    full_name_english?: Maybe<Scalars['String']>;
    full_name_locale?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    three_letter_abbreviation?: Maybe<Scalars['String']>;
    two_letter_abbreviation?: Maybe<Scalars['String']>;
};

export type Region = {
    code?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};

export type Currency = {
    available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
    base_currency_code?: Maybe<Scalars['String']>;
    base_currency_symbol?: Maybe<Scalars['String']>;
    /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
    default_display_currecy_code?: Maybe<Scalars['String']>;
    /** @deprecated Symbol was missed. Use `default_display_currency_symbol`. */
    default_display_currecy_symbol?: Maybe<Scalars['String']>;
    default_display_currency_code?: Maybe<Scalars['String']>;
    default_display_currency_symbol?: Maybe<Scalars['String']>;
    exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
};

export type ExchangeRate = {
    currency_to?: Maybe<Scalars['String']>;
    rate?: Maybe<Scalars['Float']>;
};

/** AttributeInput specifies the attribute_code and entity_type to search */
export type AttributeInput = {
    /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
    attribute_code?: Maybe<Scalars['String']>;
    /** The type of entity that defines the attribute */
    entity_type?: Maybe<Scalars['String']>;
};

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export type CustomAttributeMetadata = {
    /** An array of attributes */
    items?: Maybe<Array<Maybe<Attribute>>>;
};

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export type Attribute = {
    /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
    attribute_code?: Maybe<Scalars['String']>;
    /** Attribute options list. */
    attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
    /** The data type of the attribute */
    attribute_type?: Maybe<Scalars['String']>;
    /** The type of entity that defines the attribute */
    entity_type?: Maybe<Scalars['String']>;
    /** The frontend input type of the attribute */
    input_type?: Maybe<Scalars['String']>;
};

/** Attribute option. */
export type AttributeOption = {
    /** Attribute option label. */
    label?: Maybe<Scalars['String']>;
    /** Attribute option value. */
    value?: Maybe<Scalars['String']>;
};

/** Customer defines the customer name and address and other details */
export type Customer = {
    /** An array containing the customer's shipping and billing addresses */
    addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
    /** Timestamp indicating when the account was created */
    created_at?: Maybe<Scalars['String']>;
    /** The customer's date of birth */
    date_of_birth?: Maybe<Scalars['String']>;
    /** The ID assigned to the billing address */
    default_billing?: Maybe<Scalars['String']>;
    /** The ID assigned to the shipping address */
    default_shipping?: Maybe<Scalars['String']>;
    /**
     * The customer's date of birth
     * @deprecated Use `date_of_birth` instead
     */
    dob?: Maybe<Scalars['String']>;
    /** The customer's email address. Required */
    email?: Maybe<Scalars['String']>;
    /** The customer's first name */
    firstname?: Maybe<Scalars['String']>;
    /** The customer's gender (Male - 1, Female - 2) */
    gender?: Maybe<Scalars['Int']>;
    /** @deprecated Customer group should not be exposed in the storefront scenarios */
    group_id?: Maybe<Scalars['Int']>;
    /**
     * The ID assigned to the customer
     * @deprecated id is not needed as part of Customer because on server side it can be identified based on customer token used for authentication. There is no need to know customer ID on the client side.
     */
    id?: Maybe<Scalars['Int']>;
    /** Indicates whether the customer is subscribed to the company's newsletter */
    is_subscribed?: Maybe<Scalars['Boolean']>;
    /** The customer's family name */
    lastname?: Maybe<Scalars['String']>;
    /** The customer's middle name */
    middlename?: Maybe<Scalars['String']>;
    /** An honorific, such as Dr., Mr., or Mrs. */
    prefix?: Maybe<Scalars['String']>;
    /** A value such as Sr., Jr., or III */
    suffix?: Maybe<Scalars['String']>;
    /** The customer's Value-added tax (VAT) number (for corporate customers) */
    taxvat?: Maybe<Scalars['String']>;
    /** Phone Number */
    telephone: Scalars['String'];
    /** The wishlist query returns the contents of a customer's wish lists */
    wishlist: Wishlist;
};

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export type CustomerAddress = {
    /** Address name */
    address_name: Scalars['String'];
    /** The city or town */
    city?: Maybe<Scalars['String']>;
    /** The customer's company */
    company?: Maybe<Scalars['String']>;
    /** The customer's country */
    country_code?: Maybe<CountryCodeEnum>;
    /**
     * The customer's country
     * @deprecated Use `country_code` instead.
     */
    country_id?: Maybe<Scalars['String']>;
    /** @deprecated Custom attributes should not be put into container */
    custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
    /**
     * The customer ID
     * @deprecated customer_id is not needed as part of CustomerAddress, address ID (id) is unique identifier for the addresses.
     */
    customer_id?: Maybe<Scalars['Int']>;
    /** Customer notes */
    customer_notes?: Maybe<Scalars['String']>;
    /** Indicates whether the address is the default billing address */
    default_billing?: Maybe<Scalars['Boolean']>;
    /** Indicates whether the address is the default shipping address */
    default_shipping?: Maybe<Scalars['Boolean']>;
    /** Address extension attributes */
    extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
    /** The fax number */
    fax?: Maybe<Scalars['String']>;
    /** The first name of the person associated with the shipping/billing address */
    firstname?: Maybe<Scalars['String']>;
    /** The ID assigned to the address object */
    id?: Maybe<Scalars['Int']>;
    /** The family name of the person associated with the shipping/billing address */
    lastname?: Maybe<Scalars['String']>;
    /** The middle name of the person associated with the shipping/billing address */
    middlename?: Maybe<Scalars['String']>;
    /** The customer's ZIP or postal code */
    postcode?: Maybe<Scalars['String']>;
    /** An honorific, such as Dr., Mr., or Mrs. */
    prefix?: Maybe<Scalars['String']>;
    /** An object containing the region name, region code, and region ID */
    region?: Maybe<CustomerAddressRegion>;
    /** @deprecated Region ID is excessive on storefront and region code should suffice for all scenarios */
    region_id?: Maybe<Scalars['Int']>;
    /** An array of strings that define the street number and name */
    street?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** A value such as Sr., Jr., or III */
    suffix?: Maybe<Scalars['String']>;
    /** The telephone number */
    telephone?: Maybe<Scalars['String']>;
    /** The customer's Value-added tax (VAT) number (for corporate customers) */
    vat_id?: Maybe<Scalars['String']>;
};

/** The list of countries codes */
export enum CountryCodeEnum {
    /** Afghanistan */
    Af = 'AF',
    /** Åland Islands */
    Ax = 'AX',
    /** Albania */
    Al = 'AL',
    /** Algeria */
    Dz = 'DZ',
    /** American Samoa */
    As = 'AS',
    /** Andorra */
    Ad = 'AD',
    /** Angola */
    Ao = 'AO',
    /** Anguilla */
    Ai = 'AI',
    /** Antarctica */
    Aq = 'AQ',
    /** Antigua & Barbuda */
    Ag = 'AG',
    /** Argentina */
    Ar = 'AR',
    /** Armenia */
    Am = 'AM',
    /** Aruba */
    Aw = 'AW',
    /** Australia */
    Au = 'AU',
    /** Austria */
    At = 'AT',
    /** Azerbaijan */
    Az = 'AZ',
    /** Bahamas */
    Bs = 'BS',
    /** Bahrain */
    Bh = 'BH',
    /** Bangladesh */
    Bd = 'BD',
    /** Barbados */
    Bb = 'BB',
    /** Belarus */
    By = 'BY',
    /** Belgium */
    Be = 'BE',
    /** Belize */
    Bz = 'BZ',
    /** Benin */
    Bj = 'BJ',
    /** Bermuda */
    Bm = 'BM',
    /** Bhutan */
    Bt = 'BT',
    /** Bolivia */
    Bo = 'BO',
    /** Bosnia & Herzegovina */
    Ba = 'BA',
    /** Botswana */
    Bw = 'BW',
    /** Bouvet Island */
    Bv = 'BV',
    /** Brazil */
    Br = 'BR',
    /** British Indian Ocean Territory */
    Io = 'IO',
    /** British Virgin Islands */
    Vg = 'VG',
    /** Brunei */
    Bn = 'BN',
    /** Bulgaria */
    Bg = 'BG',
    /** Burkina Faso */
    Bf = 'BF',
    /** Burundi */
    Bi = 'BI',
    /** Cambodia */
    Kh = 'KH',
    /** Cameroon */
    Cm = 'CM',
    /** Canada */
    Ca = 'CA',
    /** Cape Verde */
    Cv = 'CV',
    /** Cayman Islands */
    Ky = 'KY',
    /** Central African Republic */
    Cf = 'CF',
    /** Chad */
    Td = 'TD',
    /** Chile */
    Cl = 'CL',
    /** China */
    Cn = 'CN',
    /** Christmas Island */
    Cx = 'CX',
    /** Cocos (Keeling) Islands */
    Cc = 'CC',
    /** Colombia */
    Co = 'CO',
    /** Comoros */
    Km = 'KM',
    /** Congo-Brazzaville */
    Cg = 'CG',
    /** Congo-Kinshasa */
    Cd = 'CD',
    /** Cook Islands */
    Ck = 'CK',
    /** Costa Rica */
    Cr = 'CR',
    /** Côte d’Ivoire */
    Ci = 'CI',
    /** Croatia */
    Hr = 'HR',
    /** Cuba */
    Cu = 'CU',
    /** Cyprus */
    Cy = 'CY',
    /** Czech Republic */
    Cz = 'CZ',
    /** Denmark */
    Dk = 'DK',
    /** Djibouti */
    Dj = 'DJ',
    /** Dominica */
    Dm = 'DM',
    /** Dominican Republic */
    Do = 'DO',
    /** Ecuador */
    Ec = 'EC',
    /** Egypt */
    Eg = 'EG',
    /** El Salvador */
    Sv = 'SV',
    /** Equatorial Guinea */
    Gq = 'GQ',
    /** Eritrea */
    Er = 'ER',
    /** Estonia */
    Ee = 'EE',
    /** Ethiopia */
    Et = 'ET',
    /** Falkland Islands */
    Fk = 'FK',
    /** Faroe Islands */
    Fo = 'FO',
    /** Fiji */
    Fj = 'FJ',
    /** Finland */
    Fi = 'FI',
    /** France */
    Fr = 'FR',
    /** French Guiana */
    Gf = 'GF',
    /** French Polynesia */
    Pf = 'PF',
    /** French Southern Territories */
    Tf = 'TF',
    /** Gabon */
    Ga = 'GA',
    /** Gambia */
    Gm = 'GM',
    /** Georgia */
    Ge = 'GE',
    /** Germany */
    De = 'DE',
    /** Ghana */
    Gh = 'GH',
    /** Gibraltar */
    Gi = 'GI',
    /** Greece */
    Gr = 'GR',
    /** Greenland */
    Gl = 'GL',
    /** Grenada */
    Gd = 'GD',
    /** Guadeloupe */
    Gp = 'GP',
    /** Guam */
    Gu = 'GU',
    /** Guatemala */
    Gt = 'GT',
    /** Guernsey */
    Gg = 'GG',
    /** Guinea */
    Gn = 'GN',
    /** Guinea-Bissau */
    Gw = 'GW',
    /** Guyana */
    Gy = 'GY',
    /** Haiti */
    Ht = 'HT',
    /** Heard &amp; McDonald Islands */
    Hm = 'HM',
    /** Honduras */
    Hn = 'HN',
    /** Hong Kong SAR China */
    Hk = 'HK',
    /** Hungary */
    Hu = 'HU',
    /** Iceland */
    Is = 'IS',
    /** India */
    In = 'IN',
    /** Indonesia */
    Id = 'ID',
    /** Iran */
    Ir = 'IR',
    /** Iraq */
    Iq = 'IQ',
    /** Ireland */
    Ie = 'IE',
    /** Isle of Man */
    Im = 'IM',
    /** Israel */
    Il = 'IL',
    /** Italy */
    It = 'IT',
    /** Jamaica */
    Jm = 'JM',
    /** Japan */
    Jp = 'JP',
    /** Jersey */
    Je = 'JE',
    /** Jordan */
    Jo = 'JO',
    /** Kazakhstan */
    Kz = 'KZ',
    /** Kenya */
    Ke = 'KE',
    /** Kiribati */
    Ki = 'KI',
    /** Kuwait */
    Kw = 'KW',
    /** Kyrgyzstan */
    Kg = 'KG',
    /** Laos */
    La = 'LA',
    /** Latvia */
    Lv = 'LV',
    /** Lebanon */
    Lb = 'LB',
    /** Lesotho */
    Ls = 'LS',
    /** Liberia */
    Lr = 'LR',
    /** Libya */
    Ly = 'LY',
    /** Liechtenstein */
    Li = 'LI',
    /** Lithuania */
    Lt = 'LT',
    /** Luxembourg */
    Lu = 'LU',
    /** Macau SAR China */
    Mo = 'MO',
    /** Macedonia */
    Mk = 'MK',
    /** Madagascar */
    Mg = 'MG',
    /** Malawi */
    Mw = 'MW',
    /** Malaysia */
    My = 'MY',
    /** Maldives */
    Mv = 'MV',
    /** Mali */
    Ml = 'ML',
    /** Malta */
    Mt = 'MT',
    /** Marshall Islands */
    Mh = 'MH',
    /** Martinique */
    Mq = 'MQ',
    /** Mauritania */
    Mr = 'MR',
    /** Mauritius */
    Mu = 'MU',
    /** Mayotte */
    Yt = 'YT',
    /** Mexico */
    Mx = 'MX',
    /** Micronesia */
    Fm = 'FM',
    /** Moldova */
    Md = 'MD',
    /** Monaco */
    Mc = 'MC',
    /** Mongolia */
    Mn = 'MN',
    /** Montenegro */
    Me = 'ME',
    /** Montserrat */
    Ms = 'MS',
    /** Morocco */
    Ma = 'MA',
    /** Mozambique */
    Mz = 'MZ',
    /** Myanmar (Burma) */
    Mm = 'MM',
    /** Namibia */
    Na = 'NA',
    /** Nauru */
    Nr = 'NR',
    /** Nepal */
    Np = 'NP',
    /** Netherlands */
    Nl = 'NL',
    /** Netherlands Antilles */
    An = 'AN',
    /** New Caledonia */
    Nc = 'NC',
    /** New Zealand */
    Nz = 'NZ',
    /** Nicaragua */
    Ni = 'NI',
    /** Niger */
    Ne = 'NE',
    /** Nigeria */
    Ng = 'NG',
    /** Niue */
    Nu = 'NU',
    /** Norfolk Island */
    Nf = 'NF',
    /** Northern Mariana Islands */
    Mp = 'MP',
    /** North Korea */
    Kp = 'KP',
    /** Norway */
    No = 'NO',
    /** Oman */
    Om = 'OM',
    /** Pakistan */
    Pk = 'PK',
    /** Palau */
    Pw = 'PW',
    /** Palestinian Territories */
    Ps = 'PS',
    /** Panama */
    Pa = 'PA',
    /** Papua New Guinea */
    Pg = 'PG',
    /** Paraguay */
    Py = 'PY',
    /** Peru */
    Pe = 'PE',
    /** Philippines */
    Ph = 'PH',
    /** Pitcairn Islands */
    Pn = 'PN',
    /** Poland */
    Pl = 'PL',
    /** Portugal */
    Pt = 'PT',
    /** Qatar */
    Qa = 'QA',
    /** Réunion */
    Re = 'RE',
    /** Romania */
    Ro = 'RO',
    /** Russia */
    Ru = 'RU',
    /** Rwanda */
    Rw = 'RW',
    /** Samoa */
    Ws = 'WS',
    /** San Marino */
    Sm = 'SM',
    /** São Tomé & Príncipe */
    St = 'ST',
    /** Saudi Arabia */
    Sa = 'SA',
    /** Senegal */
    Sn = 'SN',
    /** Serbia */
    Rs = 'RS',
    /** Seychelles */
    Sc = 'SC',
    /** Sierra Leone */
    Sl = 'SL',
    /** Singapore */
    Sg = 'SG',
    /** Slovakia */
    Sk = 'SK',
    /** Slovenia */
    Si = 'SI',
    /** Solomon Islands */
    Sb = 'SB',
    /** Somalia */
    So = 'SO',
    /** South Africa */
    Za = 'ZA',
    /** South Georgia & South Sandwich Islands */
    Gs = 'GS',
    /** South Korea */
    Kr = 'KR',
    /** Spain */
    Es = 'ES',
    /** Sri Lanka */
    Lk = 'LK',
    /** St. Barthélemy */
    Bl = 'BL',
    /** St. Helena */
    Sh = 'SH',
    /** St. Kitts & Nevis */
    Kn = 'KN',
    /** St. Lucia */
    Lc = 'LC',
    /** St. Martin */
    Mf = 'MF',
    /** St. Pierre & Miquelon */
    Pm = 'PM',
    /** St. Vincent & Grenadines */
    Vc = 'VC',
    /** Sudan */
    Sd = 'SD',
    /** Suriname */
    Sr = 'SR',
    /** Svalbard & Jan Mayen */
    Sj = 'SJ',
    /** Swaziland */
    Sz = 'SZ',
    /** Sweden */
    Se = 'SE',
    /** Switzerland */
    Ch = 'CH',
    /** Syria */
    Sy = 'SY',
    /** Taiwan */
    Tw = 'TW',
    /** Tajikistan */
    Tj = 'TJ',
    /** Tanzania */
    Tz = 'TZ',
    /** Thailand */
    Th = 'TH',
    /** Timor-Leste */
    Tl = 'TL',
    /** Togo */
    Tg = 'TG',
    /** Tokelau */
    Tk = 'TK',
    /** Tonga */
    To = 'TO',
    /** Trinidad & Tobago */
    Tt = 'TT',
    /** Tunisia */
    Tn = 'TN',
    /** Turkey */
    Tr = 'TR',
    /** Turkmenistan */
    Tm = 'TM',
    /** Turks & Caicos Islands */
    Tc = 'TC',
    /** Tuvalu */
    Tv = 'TV',
    /** Uganda */
    Ug = 'UG',
    /** Ukraine */
    Ua = 'UA',
    /** United Arab Emirates */
    Ae = 'AE',
    /** United Kingdom */
    Gb = 'GB',
    /** United States */
    Us = 'US',
    /** Uruguay */
    Uy = 'UY',
    /** U.S. Outlying Islands */
    Um = 'UM',
    /** U.S. Virgin Islands */
    Vi = 'VI',
    /** Uzbekistan */
    Uz = 'UZ',
    /** Vanuatu */
    Vu = 'VU',
    /** Vatican City */
    Va = 'VA',
    /** Venezuela */
    Ve = 'VE',
    /** Vietnam */
    Vn = 'VN',
    /** Wallis & Futuna */
    Wf = 'WF',
    /** Western Sahara */
    Eh = 'EH',
    /** Yemen */
    Ye = 'YE',
    /** Zambia */
    Zm = 'ZM',
    /** Zimbabwe */
    Zw = 'ZW'
}

export type CustomerAddressAttribute = {
    /** Attribute code */
    attribute_code?: Maybe<Scalars['String']>;
    /** Attribute value */
    value?: Maybe<Scalars['String']>;
};

/** CustomerAddressRegion defines the customer's state or province */
export type CustomerAddressRegion = {
    /** The state or province name */
    region?: Maybe<Scalars['String']>;
    /** The address region code */
    region_code?: Maybe<Scalars['String']>;
    /** @deprecated Region ID is excessive on storefront and region code should suffice for all scenarios */
    region_id?: Maybe<Scalars['Int']>;
};

export type Wishlist = {
    /** Wishlist unique identifier */
    id?: Maybe<Scalars['ID']>;
    /** An array of items in the customer's wish list */
    items?: Maybe<Array<Maybe<WishlistItem>>>;
    /** The number of items in the wish list */
    items_count?: Maybe<Scalars['Int']>;
    /** An encrypted code that Magento uses to link to the wish list */
    sharing_code?: Maybe<Scalars['String']>;
    /** The time of the last modification to the wish list */
    updated_at?: Maybe<Scalars['String']>;
};

export type WishlistItem = {
    /** The time when the customer added the item to the wish list */
    added_at?: Maybe<Scalars['String']>;
    /** The customer's comment about this item */
    description?: Maybe<Scalars['String']>;
    /** The wish list item ID */
    id?: Maybe<Scalars['Int']>;
    product?: Maybe<ProductInterface>;
    /** The quantity of this wish list item */
    qty?: Maybe<Scalars['Float']>;
};

export type CustomerDownloadableProducts = {
    /** List of purchased downloadable items */
    items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
};

export type CustomerDownloadableProduct = {
    date?: Maybe<Scalars['String']>;
    download_url?: Maybe<Scalars['String']>;
    order_increment_id?: Maybe<Scalars['String']>;
    remaining_downloads?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

/** Order filter input */
export type OrderFilterInput = {
    created_at?: Maybe<FilterTypeInput>;
    grand_total?: Maybe<FilterTypeInput>;
    /** Order Id */
    id?: Maybe<FilterTypeInput>;
    /** The order number */
    order_number?: Maybe<FilterTypeInput>;
    /** Shipping amount */
    shipping_amount?: Maybe<FilterTypeInput>;
    /** Shipping method */
    shipping_method?: Maybe<FilterTypeInput>;
    status?: Maybe<FilterTypeInput>;
    /** Subtotal */
    subtotal?: Maybe<FilterTypeInput>;
    /** Tax amount */
    tax_amount?: Maybe<FilterTypeInput>;
};

/** FilterTypeInput specifies which action will be performed in a query  */
export type FilterTypeInput = {
    /** Equals */
    eq?: Maybe<Scalars['String']>;
    finset?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** From. Must be used with 'to' */
    from?: Maybe<Scalars['String']>;
    /** Greater than */
    gt?: Maybe<Scalars['String']>;
    /** Greater than or equal to */
    gteq?: Maybe<Scalars['String']>;
    /** In. The value can contain a set of comma-separated values */
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
    like?: Maybe<Scalars['String']>;
    /** Less than */
    lt?: Maybe<Scalars['String']>;
    /** Less than or equal to */
    lteq?: Maybe<Scalars['String']>;
    /** More than or equal to */
    moreq?: Maybe<Scalars['String']>;
    /** Not equal to */
    neq?: Maybe<Scalars['String']>;
    /** Not in. The value can contain a set of comma-separated values */
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Not null */
    notnull?: Maybe<Scalars['String']>;
    /** Is null */
    null?: Maybe<Scalars['String']>;
    /** To. Must be used with 'from' */
    to?: Maybe<Scalars['String']>;
};

/** Order sort input */
export type OrderSortInput = {
    /** Sort by the created at (default DESC). */
    created_at?: Maybe<SortEnum>;
    /** Sort by the grand total */
    grand_total?: Maybe<SortEnum>;
    /** Sort by the order ID. */
    id?: Maybe<SortEnum>;
    /** Sort by the order number. */
    order_number?: Maybe<SortEnum>;
    /** Sort by the shipping amount */
    shipping_amount?: Maybe<SortEnum>;
    /** Sort by the shipping method */
    shipping_method?: Maybe<SortEnum>;
    /** Sort by the status */
    status?: Maybe<SortEnum>;
    /** Sort by the subtotal */
    subtotal?: Maybe<SortEnum>;
    /** Sort by the tax amount */
    tax_amount?: Maybe<SortEnum>;
};

export type CustomerOrders = {
    /** Array of orders */
    items?: Maybe<Array<Maybe<CustomerOrder>>>;
};

/** Order mapping fields */
export type CustomerOrder = {
    billing_address?: Maybe<OrderBillingAddress>;
    created_at?: Maybe<Scalars['String']>;
    /** Grand Total */
    grand_total?: Maybe<Money>;
    id?: Maybe<Scalars['Int']>;
    /** @deprecated Use the order_number instead. */
    increment_id?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<OrderItem>>>;
    /** The order number */
    order_number: Scalars['String'];
    payment?: Maybe<OrderPayment>;
    pdf_invoices: Array<Maybe<PdfLink>>;
    shipping_address?: Maybe<OrderShippingAddress>;
    /** Shipping amount */
    shipping_amount?: Maybe<Money>;
    /** Shipping description */
    shipping_description?: Maybe<Scalars['String']>;
    /** Shipping method */
    shipping_method?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    /** Subtotal */
    subtotal?: Maybe<Money>;
    /** Tax amount */
    tax_amount?: Maybe<Money>;
    /** Tax percent */
    tax_percent?: Maybe<Scalars['Float']>;
};

export type OrderBillingAddress = OrderAddressInterface & {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: OrderAddressCountry;
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<OrderAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type OrderAddressInterface = {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: OrderAddressCountry;
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<OrderAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type OrderAddressCountry = {
    code: Scalars['String'];
    label: Scalars['String'];
};

export type OrderAddressRegion = {
    code: Scalars['String'];
    label: Scalars['String'];
};

export type OrderItem = {
    /** Product name */
    name?: Maybe<Scalars['String']>;
    /** Price */
    price?: Maybe<Money>;
    /** Price including TAX */
    price_incl_tax?: Maybe<Money>;
    /** The ProductInterface object, which contains details about this product */
    product?: Maybe<ProductInterface>;
    /** Quantity */
    qty?: Maybe<Scalars['Float']>;
    /** Row total */
    row_total?: Maybe<Money>;
    /** Row total including TAX */
    row_total_incl_tax?: Maybe<Money>;
    /** Product name */
    sku?: Maybe<Scalars['String']>;
};

export type OrderPayment = {
    /** Payment method */
    method?: Maybe<Scalars['String']>;
};

export type PdfLink = {
    /** Link title */
    title: Scalars['String'];
    /** Link URL */
    url: Scalars['String'];
};

export type OrderShippingAddress = OrderAddressInterface & {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country: OrderAddressCountry;
    /** Notes */
    customer_notes?: Maybe<Scalars['String']>;
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<OrderAddressRegion>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type CustomerPaymentTokens = {
    /** An array of payment tokens */
    items: Array<Maybe<PaymentToken>>;
};

/** The stored payment method available to the customer */
export type PaymentToken = {
    /** Stored account details */
    details?: Maybe<Scalars['String']>;
    /** The payment method code associated with the token */
    payment_method_code: Scalars['String'];
    /** The public hash of the token */
    public_hash: Scalars['String'];
    type: PaymentTokenTypeEnum;
};

/** The list of available payment token types */
export enum PaymentTokenTypeEnum {
    Card = 'card',
    Account = 'account'
}

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export type HostedProUrlInput = {
    /** The unique ID that identifies the customer's cart */
    cart_id: Scalars['String'];
};

export type HostedProUrl = {
    /** Secure Url generated by PayPal */
    secure_form_url?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkTokenInput = {
    /** The unique ID that identifies the customer's cart */
    cart_id: Scalars['String'];
};

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkToken = {
    /** Mode for Payflow transaction */
    mode?: Maybe<PayflowLinkMode>;
    /** PayPal URL used for requesting Payflow form */
    paypal_url?: Maybe<Scalars['String']>;
    /** Secure token generated by PayPal */
    secure_token?: Maybe<Scalars['String']>;
    /** Secure token ID generated by PayPal */
    secure_token_id?: Maybe<Scalars['String']>;
};

/** Mode for payment: TEST or LIVE. Applies to Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
    Test = 'TEST',
    Live = 'LIVE'
}

export type IsEmailAvailableOutput = {
    /** Is email availabel value */
    is_email_available?: Maybe<Scalars['Boolean']>;
};

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductAttributeFilterInput = {
    /** Attribute label: Activity */
    activity?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Category Gear */
    category_gear?: Maybe<FilterEqualTypeInput>;
    /** Filter product by category id */
    category_id?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Climate */
    climate?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Collar */
    collar?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Color */
    color?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Description */
    description?: Maybe<FilterMatchTypeInput>;
    /** Attribute label: Eco Collection */
    eco_collection?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Erin Recommends */
    erin_recommends?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Features */
    features_bags?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Format */
    format?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Gender */
    gender?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Material */
    material?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Product Name */
    name?: Maybe<FilterMatchTypeInput>;
    /** Attribute label: New */
    new?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Pattern */
    pattern?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Performance Fabric */
    performance_fabric?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Price */
    price?: Maybe<FilterRangeTypeInput>;
    /** Attribute label: Sale */
    sale?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Short Description */
    short_description?: Maybe<FilterMatchTypeInput>;
    /** Attribute label: Size */
    size?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: SKU */
    sku?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Sleeve */
    sleeve?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Enable Product */
    status?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Strap/Handle */
    strap_bags?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Style Bags */
    style_bags?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Style Bottom */
    style_bottom?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Style General */
    style_general?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: Tax Class */
    tax_class_id?: Maybe<FilterEqualTypeInput>;
    /** Attribute label: URL Key */
    url_key?: Maybe<FilterEqualTypeInput>;
};

/** Defines a filter that matches a range of values, such as prices or dates. */
export type FilterRangeTypeInput = {
    /** The beginning of the range */
    from?: Maybe<Scalars['String']>;
    /** The end of the range */
    to?: Maybe<Scalars['String']>;
};

/** The Products object is the top-level object returned in a product search. */
export type Products = {
    /** Layered navigation aggregations. */
    aggregations?: Maybe<Array<Maybe<Aggregation>>>;
    /**
     * Layered navigation filters array.
     * @deprecated Use aggregations instead
     */
    filters?: Maybe<Array<Maybe<LayerFilter>>>;
    /** An array of products that match the specified search criteria. */
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    /** An object that includes the page_info and currentPage values specified in the query. */
    page_info?: Maybe<SearchResultPageInfo>;
    /** An object that includes the default sort field and all available sort fields. */
    sort_fields?: Maybe<SortFields>;
    /** The number of products returned. */
    total_count?: Maybe<Scalars['Int']>;
};

/** A bucket that contains information for each filterable option (such as price, category ID, and custom attributes). */
export type Aggregation = {
    /** Attribute code of the aggregation group. */
    attribute_code: Scalars['String'];
    /** The number of options in the aggregation group. */
    count?: Maybe<Scalars['Int']>;
    /** The aggregation display name. */
    label?: Maybe<Scalars['String']>;
    /** Array of options for the aggregation. */
    options?: Maybe<Array<Maybe<AggregationOption>>>;
};

export type AggregationOption = AggregationOptionInterface & {
    /** The number of items that match the aggregation option. */
    count?: Maybe<Scalars['Int']>;
    /** Aggregation option display label. */
    label?: Maybe<Scalars['String']>;
    /** The internal ID that represents the value of the option. */
    value: Scalars['String'];
};

export type AggregationOptionInterface = {
    /** The number of items that match the aggregation option. */
    count?: Maybe<Scalars['Int']>;
    /** Aggregation option display label. */
    label?: Maybe<Scalars['String']>;
    /** The internal ID that represents the value of the option. */
    value: Scalars['String'];
};

export type LayerFilter = {
    /**
     * Array of filter items.
     * @deprecated Use Aggregation.options instead.
     */
    filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
    /**
     * Count of filter items in filter group.
     * @deprecated Use Aggregation.count instead.
     */
    filter_items_count?: Maybe<Scalars['Int']>;
    /**
     * Layered navigation filter name.
     * @deprecated Use Aggregation.label instead.
     */
    name?: Maybe<Scalars['String']>;
    /**
     * Request variable name for filter query.
     * @deprecated Use Aggregation.attribute_code instead.
     */
    request_var?: Maybe<Scalars['String']>;
};

export type LayerFilterItemInterface = {
    /**
     * Count of items by filter.
     * @deprecated Use AggregationOption.count instead.
     */
    items_count?: Maybe<Scalars['Int']>;
    /**
     * Filter label.
     * @deprecated Use AggregationOption.label instead.
     */
    label?: Maybe<Scalars['String']>;
    /**
     * Value for filter request variable to be used in query.
     * @deprecated Use AggregationOption.value instead.
     */
    value_string?: Maybe<Scalars['String']>;
};

/** SortFields contains a default value for sort fields and all available sort fields. */
export type SortFields = {
    /** Default value of sort fields. */
    default?: Maybe<Scalars['String']>;
    /** Available sort fields. */
    options?: Maybe<Array<Maybe<SortField>>>;
};

export type SortField = {
    /** Label of sort field. */
    label?: Maybe<Scalars['String']>;
    /** Attribute code of sort field. */
    value?: Maybe<Scalars['String']>;
};

/** The type contains information about a store config */
export type StoreConfig = {
    /** Footer Miscellaneous HTML */
    absolute_footer?: Maybe<Scalars['String']>;
    /** Base currency code */
    base_currency_code?: Maybe<Scalars['String']>;
    /** Base link URL for the store */
    base_link_url?: Maybe<Scalars['String']>;
    /** Base media URL for the store */
    base_media_url?: Maybe<Scalars['String']>;
    /** Base static URL for the store */
    base_static_url?: Maybe<Scalars['String']>;
    /** Base URL for the store */
    base_url?: Maybe<Scalars['String']>;
    /** Default Sort By. */
    catalog_default_sort_by?: Maybe<Scalars['String']>;
    /** Corresponds to the 'Display Prices In Product Lists' field. It indicates how FPT information is displayed on category pages */
    category_fixed_product_tax_display_setting?: Maybe<
        FixedProductTaxDisplaySettings
    >;
    /** Category URL Suffix. */
    category_url_suffix?: Maybe<Scalars['String']>;
    /** CMS Home Page */
    cms_home_page?: Maybe<Scalars['String']>;
    /** CMS No Cookies Page */
    cms_no_cookies?: Maybe<Scalars['String']>;
    /** CMS No Route Page */
    cms_no_route?: Maybe<Scalars['String']>;
    /** A code assigned to the store to identify it */
    code?: Maybe<Scalars['String']>;
    /** Copyright */
    copyright?: Maybe<Scalars['String']>;
    /** Default Meta Description */
    default_description?: Maybe<Scalars['String']>;
    /** Default display currency code */
    default_display_currency_code?: Maybe<Scalars['String']>;
    /** Default Meta Keywords */
    default_keywords?: Maybe<Scalars['String']>;
    /** Default Page Title */
    default_title?: Maybe<Scalars['String']>;
    /** Display Demo Store Notice */
    demonotice?: Maybe<Scalars['Int']>;
    /** Default Web URL */
    front?: Maybe<Scalars['String']>;
    /** Products per Page on Grid Default Value. */
    grid_per_page?: Maybe<Scalars['Int']>;
    /** Products per Page on Grid Allowed Values. */
    grid_per_page_values?: Maybe<Scalars['String']>;
    /** Scripts and Style Sheets */
    head_includes?: Maybe<Scalars['String']>;
    /** Favicon Icon */
    head_shortcut_icon?: Maybe<Scalars['String']>;
    /** Logo Image */
    header_logo_src?: Maybe<Scalars['String']>;
    /** The ID number assigned to the store */
    id?: Maybe<Scalars['Int']>;
    /** List Mode. */
    list_mode?: Maybe<Scalars['String']>;
    /** Products per Page on List Default Value. */
    list_per_page?: Maybe<Scalars['Int']>;
    /** Products per Page on List Allowed Values. */
    list_per_page_values?: Maybe<Scalars['String']>;
    /** Store locale */
    locale?: Maybe<Scalars['String']>;
    /** Logo Image Alt */
    logo_alt?: Maybe<Scalars['String']>;
    /** Logo Attribute Height */
    logo_height?: Maybe<Scalars['Int']>;
    /** Logo Attribute Width */
    logo_width?: Maybe<Scalars['Int']>;
    /** Default No-route URL */
    no_route?: Maybe<Scalars['String']>;
    /** Corresponds to the 'Display Prices On Product View Page' field. It indicates how FPT information is displayed on product pages */
    product_fixed_product_tax_display_setting?: Maybe<
        FixedProductTaxDisplaySettings
    >;
    /** Product URL Suffix. */
    product_url_suffix?: Maybe<Scalars['String']>;
    /** The ID of the root category */
    root_category_id?: Maybe<Scalars['Int']>;
    /** Corresponds to the 'Display Prices In Sales Modules' field. It indicates how FPT information is displayed on cart, checkout, and order pages */
    sales_fixed_product_tax_display_setting?: Maybe<
        FixedProductTaxDisplaySettings
    >;
    /** Secure base link URL for the store */
    secure_base_link_url?: Maybe<Scalars['String']>;
    /** Secure base media URL for the store */
    secure_base_media_url?: Maybe<Scalars['String']>;
    /** Secure base static URL for the store */
    secure_base_static_url?: Maybe<Scalars['String']>;
    /** Secure base URL for the store */
    secure_base_url?: Maybe<Scalars['String']>;
    /** Show Breadcrumbs for CMS Pages */
    show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
    /** Name of the store */
    store_name?: Maybe<Scalars['String']>;
    /** Timezone of the store */
    timezone?: Maybe<Scalars['String']>;
    /** Page Title Prefix */
    title_prefix?: Maybe<Scalars['String']>;
    /** Page Title Separator. */
    title_separator?: Maybe<Scalars['String']>;
    /** Page Title Suffix */
    title_suffix?: Maybe<Scalars['String']>;
    /** The ID number assigned to the website store belongs */
    website_id?: Maybe<Scalars['Int']>;
    /** The unit of weight */
    weight_unit?: Maybe<Scalars['String']>;
    /** Welcome Text */
    welcome?: Maybe<Scalars['String']>;
};

/** This enumeration display settings for the fixed product tax */
export enum FixedProductTaxDisplaySettings {
    /** The displayed price includes the FPT amount without displaying the ProductPrice.fixed_product_taxes values. This value corresponds to 'Including FPT only' */
    IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
    /** The displayed price includes the FPT amount while displaying the values of ProductPrice.fixed_product_taxes separately. This value corresponds to 'Including FPT and FPT description' */
    IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS',
    /** The displayed price does not include the FPT amount. The values of ProductPrice.fixed_product_taxes and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price' */
    ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
    /** The displayed price does not include the FPT amount. The values from ProductPrice.fixed_product_taxes are not displayed. This value corresponds to 'Excluding FPT' */
    ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
    /** The FPT feature is not enabled. You can omit  ProductPrice.fixed_product_taxes from your query */
    FptDisabled = 'FPT_DISABLED'
}

/** Store information */
export type Store = {
    /** Base URL for the store */
    base_url?: Maybe<Scalars['String']>;
    /** Code of the store */
    code?: Maybe<Scalars['String']>;
    /** ID of the store */
    id?: Maybe<Scalars['Int']>;
    /** Store locale */
    locale?: Maybe<Scalars['String']>;
    /** Name of the store */
    store_name?: Maybe<Scalars['String']>;
    /** ID of the website the store belongs to */
    website_id?: Maybe<Scalars['Int']>;
};

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export type EntityUrl = {
    /** @deprecated The canonical_url field is deprecated, use relative_url instead. */
    canonical_url?: Maybe<Scalars['String']>;
    /** The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID. */
    id?: Maybe<Scalars['Int']>;
    /** 301 or 302 HTTP code for url permanent or temporary redirect or 0 for the 200 no redirect */
    redirectCode?: Maybe<Scalars['Int']>;
    /** The internal relative URL. If the specified  url is a redirect, the query returns the redirected URL, not the original. */
    relative_url?: Maybe<Scalars['String']>;
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
    type?: Maybe<UrlRewriteEntityTypeEnum>;
};

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
    CmsPage = 'CMS_PAGE',
    Product = 'PRODUCT',
    Category = 'CATEGORY'
}

/** Deprecated: `Wishlist` type should be used instead */
export type WishlistOutput = {
    /**
     * An array of items in the customer's wish list
     * @deprecated Use field `items` from type `Wishlist` instead
     */
    items?: Maybe<Array<Maybe<WishlistItem>>>;
    /**
     * The number of items in the wish list
     * @deprecated Use field `items_count` from type `Wishlist` instead
     */
    items_count?: Maybe<Scalars['Int']>;
    /**
     * When multiple wish lists are enabled, the name the customer assigns to the wishlist
     * @deprecated This field is related to Commerce functionality and is always `null` in Open Source edition
     */
    name?: Maybe<Scalars['String']>;
    /**
     * An encrypted code that Magento uses to link to the wish list
     * @deprecated Use field `sharing_code` from type `Wishlist` instead
     */
    sharing_code?: Maybe<Scalars['String']>;
    /**
     * The time of the last modification to the wish list
     * @deprecated Use field `updated_at` from type `Wishlist` instead
     */
    updated_at?: Maybe<Scalars['String']>;
};

export type Mutation = {
    addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
    addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
    addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
    addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
    addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
    applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
    /** Changes the password for the logged-in customer */
    changeCustomerPassword?: Maybe<Customer>;
    /** Creates Client Token for Braintree Javascript SDK initialization. */
    createBraintreeClientToken: Scalars['String'];
    /** Create customer account */
    createCustomer?: Maybe<CustomerOutput>;
    /** Create customer address */
    createCustomerAddress?: Maybe<CustomerAddress>;
    /** Creates an empty shopping cart for a guest or logged in user */
    createEmptyCart?: Maybe<Scalars['String']>;
    /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
    createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
    /** Initiates an Express Checkout transaction and receives a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
    createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
    /** Delete customer address */
    deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
    /** Delete a customer payment token */
    deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
    /** Retrieve the customer token */
    generateCustomerToken?: Maybe<CustomerToken>;
    /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
    handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
    /** Merges the source cart into the destination cart */
    mergeCarts: Cart;
    placeOrder?: Maybe<PlaceOrderOutput>;
    removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
    removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
    /** Revoke the customer token */
    revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
    /** Recommends Product by Sending Single/Multiple Email */
    sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
    setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
    setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
    /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
    setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
    setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
    setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
    setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
    updateCartItems?: Maybe<UpdateCartItemsOutput>;
    /** Update the customer's personal information */
    updateCustomer?: Maybe<CustomerOutput>;
    /** Update customer address */
    updateCustomerAddress?: Maybe<CustomerAddress>;
    /** Add product to Wishlist */
    wishlistAddItem?: Maybe<Wishlist>;
    /** Remove product from Wishlist */
    wishlistRemoveItem?: Maybe<Wishlist>;
};

export type MutationAddBundleProductsToCartArgs = {
    input?: Maybe<AddBundleProductsToCartInput>;
};

export type MutationAddConfigurableProductsToCartArgs = {
    input?: Maybe<AddConfigurableProductsToCartInput>;
};

export type MutationAddDownloadableProductsToCartArgs = {
    input?: Maybe<AddDownloadableProductsToCartInput>;
};

export type MutationAddSimpleProductsToCartArgs = {
    input?: Maybe<AddSimpleProductsToCartInput>;
};

export type MutationAddVirtualProductsToCartArgs = {
    input?: Maybe<AddVirtualProductsToCartInput>;
};

export type MutationApplyCouponToCartArgs = {
    input?: Maybe<ApplyCouponToCartInput>;
};

export type MutationChangeCustomerPasswordArgs = {
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
};

export type MutationCreateCustomerArgs = {
    input: CustomerInput;
};

export type MutationCreateCustomerAddressArgs = {
    input: CustomerAddressInput;
};

export type MutationCreateEmptyCartArgs = {
    input?: Maybe<CreateEmptyCartInput>;
};

export type MutationCreatePayflowProTokenArgs = {
    input: PayflowProTokenInput;
};

export type MutationCreatePaypalExpressTokenArgs = {
    input: PaypalExpressTokenInput;
};

export type MutationDeleteCustomerAddressArgs = {
    id: Scalars['Int'];
};

export type MutationDeletePaymentTokenArgs = {
    public_hash: Scalars['String'];
};

export type MutationGenerateCustomerTokenArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type MutationHandlePayflowProResponseArgs = {
    input: PayflowProResponseInput;
};

export type MutationMergeCartsArgs = {
    source_cart_id: Scalars['String'];
    destination_cart_id: Scalars['String'];
};

export type MutationPlaceOrderArgs = {
    input?: Maybe<PlaceOrderInput>;
};

export type MutationRemoveCouponFromCartArgs = {
    input?: Maybe<RemoveCouponFromCartInput>;
};

export type MutationRemoveItemFromCartArgs = {
    input?: Maybe<RemoveItemFromCartInput>;
};

export type MutationSendEmailToFriendArgs = {
    input?: Maybe<SendEmailToFriendInput>;
};

export type MutationSetBillingAddressOnCartArgs = {
    input?: Maybe<SetBillingAddressOnCartInput>;
};

export type MutationSetGuestEmailOnCartArgs = {
    input?: Maybe<SetGuestEmailOnCartInput>;
};

export type MutationSetPaymentMethodAndPlaceOrderArgs = {
    input?: Maybe<SetPaymentMethodAndPlaceOrderInput>;
};

export type MutationSetPaymentMethodOnCartArgs = {
    input?: Maybe<SetPaymentMethodOnCartInput>;
};

export type MutationSetShippingAddressesOnCartArgs = {
    input?: Maybe<SetShippingAddressesOnCartInput>;
};

export type MutationSetShippingMethodsOnCartArgs = {
    input?: Maybe<SetShippingMethodsOnCartInput>;
};

export type MutationUpdateCartItemsArgs = {
    input?: Maybe<UpdateCartItemsInput>;
};

export type MutationUpdateCustomerArgs = {
    input: CustomerInput;
};

export type MutationUpdateCustomerAddressArgs = {
    id: Scalars['Int'];
    input?: Maybe<CustomerAddressInput>;
};

export type MutationWishlistAddItemArgs = {
    input: WishlistItemInput;
};

export type MutationWishlistRemoveItemArgs = {
    input: WishlistItemInput;
};

export type AddBundleProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<BundleProductCartItemInput>>;
};

export type BundleProductCartItemInput = {
    bundle_options: Array<Maybe<BundleOptionInput>>;
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    data: CartItemInput;
};

export type BundleOptionInput = {
    id: Scalars['Int'];
    quantity: Scalars['Float'];
    value: Array<Maybe<Scalars['String']>>;
};

export type CustomizableOptionInput = {
    id: Scalars['Int'];
    value_string: Scalars['String'];
};

export type CartItemInput = {
    quantity: Scalars['Float'];
    sku: Scalars['String'];
};

export type AddBundleProductsToCartOutput = {
    cart: Cart;
};

export type AddConfigurableProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<ConfigurableProductCartItemInput>>;
};

export type ConfigurableProductCartItemInput = {
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    data: CartItemInput;
    /** Configurable product SKU. */
    parent_sku?: Maybe<Scalars['String']>;
    variant_sku?: Maybe<Scalars['String']>;
};

export type AddConfigurableProductsToCartOutput = {
    cart: Cart;
};

export type AddDownloadableProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<DownloadableProductCartItemInput>>;
};

export type DownloadableProductCartItemInput = {
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    data: CartItemInput;
    downloadable_product_links?: Maybe<
        Array<Maybe<DownloadableProductLinksInput>>
    >;
};

export type DownloadableProductLinksInput = {
    link_id: Scalars['Int'];
};

export type AddDownloadableProductsToCartOutput = {
    cart: Cart;
};

export type AddSimpleProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<SimpleProductCartItemInput>>;
};

export type SimpleProductCartItemInput = {
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    data: CartItemInput;
};

export type AddSimpleProductsToCartOutput = {
    cart: Cart;
};

export type AddVirtualProductsToCartInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<VirtualProductCartItemInput>>;
};

export type VirtualProductCartItemInput = {
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    data: CartItemInput;
};

export type AddVirtualProductsToCartOutput = {
    cart: Cart;
};

export type ApplyCouponToCartInput = {
    cart_id: Scalars['String'];
    coupon_code: Scalars['String'];
};

export type ApplyCouponToCartOutput = {
    cart: Cart;
};

export type CustomerInput = {
    /** The customer's date of birth */
    date_of_birth?: Maybe<Scalars['String']>;
    /** Deprecated: Use `date_of_birth` instead */
    dob?: Maybe<Scalars['String']>;
    /** The customer's email address. Required for customer creation */
    email?: Maybe<Scalars['String']>;
    /** The customer's first name */
    firstname?: Maybe<Scalars['String']>;
    /** The customer's gender (Male - 1, Female - 2) */
    gender?: Maybe<Scalars['Int']>;
    /** Indicates whether the customer is subscribed to the company's newsletter */
    is_subscribed?: Maybe<Scalars['Boolean']>;
    /** The customer's family name */
    lastname?: Maybe<Scalars['String']>;
    /** The customer's middle name */
    middlename?: Maybe<Scalars['String']>;
    /** The customer's password */
    password?: Maybe<Scalars['String']>;
    /** An honorific, such as Dr., Mr., or Mrs. */
    prefix?: Maybe<Scalars['String']>;
    /** A value such as Sr., Jr., or III */
    suffix?: Maybe<Scalars['String']>;
    /** The customer's Tax/VAT number (for corporate customers) */
    taxvat?: Maybe<Scalars['String']>;
};

export type CustomerOutput = {
    customer: Customer;
};

export type CustomerAddressInput = {
    /** Address name */
    address_name: Scalars['String'];
    /** The city or town */
    city?: Maybe<Scalars['String']>;
    /** The customer's company */
    company?: Maybe<Scalars['String']>;
    /** The customer's country */
    country_code?: Maybe<CountryCodeEnum>;
    /** Deprecated: use `country_code` instead. */
    country_id?: Maybe<CountryCodeEnum>;
    /** Deprecated: Custom attributes should not be put into container. */
    custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttributeInput>>>;
    /** Customer notes */
    customer_notes?: Maybe<Scalars['String']>;
    /** Indicates whether the address is the default billing address */
    default_billing?: Maybe<Scalars['Boolean']>;
    /** Indicates whether the address is the default shipping address */
    default_shipping?: Maybe<Scalars['Boolean']>;
    /** The fax number */
    fax?: Maybe<Scalars['String']>;
    /** The first name of the person associated with the shipping/billing address */
    firstname?: Maybe<Scalars['String']>;
    /** The family name of the person associated with the shipping/billing address */
    lastname?: Maybe<Scalars['String']>;
    /** The middle name of the person associated with the shipping/billing address */
    middlename?: Maybe<Scalars['String']>;
    /** The customer's ZIP or postal code */
    postcode?: Maybe<Scalars['String']>;
    /** An honorific, such as Dr., Mr., or Mrs. */
    prefix?: Maybe<Scalars['String']>;
    /** An object containing the region name, region code, and region ID */
    region?: Maybe<CustomerAddressRegionInput>;
    /** An array of strings that define the street number and name */
    street?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** A value such as Sr., Jr., or III */
    suffix?: Maybe<Scalars['String']>;
    /** The telephone number */
    telephone?: Maybe<Scalars['String']>;
    /** The customer's Tax/VAT number (for corporate customers) */
    vat_id?: Maybe<Scalars['String']>;
};

export type CustomerAddressAttributeInput = {
    /** Attribute code */
    attribute_code: Scalars['String'];
    /** Attribute value */
    value: Scalars['String'];
};

/** CustomerAddressRegionInput defines the customer's state or province */
export type CustomerAddressRegionInput = {
    /** The state or province name */
    region?: Maybe<Scalars['String']>;
    /** The address region code */
    region_code?: Maybe<Scalars['String']>;
    /** region_id is deprecated. Region ID is excessive on storefront and region code should suffice for all scenarios */
    region_id?: Maybe<Scalars['Int']>;
};

export type CreateEmptyCartInput = {
    cart_id?: Maybe<Scalars['String']>;
};

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export type PayflowProTokenInput = {
    /** The unique ID that identifies the customer's cart */
    cart_id: Scalars['String'];
    /** A set of relative URLs that PayPal uses for callback. */
    urls: PayflowProUrlInput;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods. */
export type PayflowProUrlInput = {
    /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String'];
    /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
    error_url: Scalars['String'];
    /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String'];
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type CreatePayflowProTokenOutput = {
    response_message: Scalars['String'];
    result: Scalars['Int'];
    result_code: Scalars['Int'];
    secure_token: Scalars['String'];
    secure_token_id: Scalars['String'];
};

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenInput = {
    /** The unique ID that identifies the customer's cart */
    cart_id: Scalars['String'];
    /** Payment method code */
    code: Scalars['String'];
    /** Indicates whether the buyer selected the quick checkout button. The default value is false */
    express_button?: Maybe<Scalars['Boolean']>;
    /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
    urls: PaypalExpressUrlsInput;
    /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
    use_paypal_credit?: Maybe<Scalars['Boolean']>;
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export type PaypalExpressUrlsInput = {
    /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String'];
    /** The relative URL of the page that PayPal will redirect to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html.  */
    pending_url?: Maybe<Scalars['String']>;
    /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String'];
    /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
    success_url?: Maybe<Scalars['String']>;
};

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export type PaypalExpressTokenOutput = {
    /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
    paypal_urls?: Maybe<PaypalExpressUrlList>;
    /** The token returned by PayPal */
    token?: Maybe<Scalars['String']>;
};

/** A set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export type PaypalExpressUrlList = {
    /** The PayPal URL that allows the buyer to edit their checkout details */
    edit?: Maybe<Scalars['String']>;
    /** The URL to the PayPal login page */
    start?: Maybe<Scalars['String']>;
};

export type DeletePaymentTokenOutput = {
    customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
    result: Scalars['Boolean'];
};

export type CustomerToken = {
    /** The customer token */
    token?: Maybe<Scalars['String']>;
};

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProResponseInput = {
    cart_id: Scalars['String'];
    paypal_payload: Scalars['String'];
};

export type PayflowProResponseOutput = {
    cart: Cart;
};

export type PlaceOrderInput = {
    cart_id: Scalars['String'];
};

export type PlaceOrderOutput = {
    order: Order;
};

export type Order = {
    /** @deprecated The order_id field is deprecated, use order_number instead. */
    order_id?: Maybe<Scalars['String']>;
    order_number: Scalars['String'];
};

export type RemoveCouponFromCartInput = {
    cart_id: Scalars['String'];
};

export type RemoveCouponFromCartOutput = {
    cart?: Maybe<Cart>;
};

export type RemoveItemFromCartInput = {
    cart_id: Scalars['String'];
    cart_item_id: Scalars['Int'];
};

export type RemoveItemFromCartOutput = {
    cart: Cart;
};

export type RevokeCustomerTokenOutput = {
    result: Scalars['Boolean'];
};

export type SendEmailToFriendInput = {
    product_id: Scalars['Int'];
    recipients: Array<Maybe<SendEmailToFriendRecipientInput>>;
    sender: SendEmailToFriendSenderInput;
};

export type SendEmailToFriendRecipientInput = {
    email: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendSenderInput = {
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendOutput = {
    recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
    sender?: Maybe<SendEmailToFriendSender>;
};

export type SendEmailToFriendRecipient = {
    email: Scalars['String'];
    name: Scalars['String'];
};

export type SendEmailToFriendSender = {
    email: Scalars['String'];
    message: Scalars['String'];
    name: Scalars['String'];
};

export type SetBillingAddressOnCartInput = {
    billing_address: BillingAddressInput;
    cart_id: Scalars['String'];
};

export type BillingAddressInput = {
    address?: Maybe<CartAddressInput>;
    customer_address_id?: Maybe<Scalars['Int']>;
    /** Set billing address same as shipping */
    same_as_shipping?: Maybe<Scalars['Boolean']>;
    /** Deprecated: use `same_as_shipping` field instead */
    use_for_shipping?: Maybe<Scalars['Boolean']>;
};

export type CartAddressInput = {
    city: Scalars['String'];
    company?: Maybe<Scalars['String']>;
    country_code: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    postcode?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    save_in_address_book?: Maybe<Scalars['Boolean']>;
    street: Array<Maybe<Scalars['String']>>;
    telephone: Scalars['String'];
};

export type SetBillingAddressOnCartOutput = {
    cart: Cart;
};

export type SetGuestEmailOnCartInput = {
    cart_id: Scalars['String'];
    email: Scalars['String'];
};

export type SetGuestEmailOnCartOutput = {
    cart: Cart;
};

export type SetPaymentMethodAndPlaceOrderInput = {
    cart_id: Scalars['String'];
    payment_method: PaymentMethodInput;
};

export type PaymentMethodInput = {
    /** Defines the required attributes for Authorize.Net payments */
    authorizenet_acceptjs?: Maybe<AuthorizenetInput>;
    braintree?: Maybe<BraintreeInput>;
    braintree_cc_vault?: Maybe<BraintreeCcVaultInput>;
    /** Payment method code */
    code: Scalars['String'];
    /** Required input for PayPal Hosted pro payments */
    hosted_pro?: Maybe<HostedProInput>;
    /** Required input for Payflow Express Checkout payments */
    payflow_express?: Maybe<PayflowExpressInput>;
    /** Required input for PayPal Payflow Link and Payments Advanced payments */
    payflow_link?: Maybe<PayflowLinkInput>;
    /** Required input type for PayPal Payflow Pro and Payment Pro payments */
    payflowpro?: Maybe<PayflowProInput>;
    /** Required input for Express Checkout and Payments Standard payments */
    paypal_express?: Maybe<PaypalExpressInput>;
    /** Purchase order number */
    purchase_order_number?: Maybe<Scalars['String']>;
};

export type AuthorizenetInput = {
    /** The last four digits of the credit or debit card */
    cc_last_4: Scalars['Int'];
    /** Authorize.Net's description of the transaction request */
    opaque_data_descriptor: Scalars['String'];
    /** The nonce returned by Authorize.Net */
    opaque_data_value: Scalars['String'];
};

export type BraintreeInput = {
    /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. Should be specified only in a case if Kount (advanced fraud protection) is enabled for Braintree payment integration. */
    device_data?: Maybe<Scalars['String']>;
    /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
    is_active_payment_token_enabler: Scalars['Boolean'];
    /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
    payment_method_nonce: Scalars['String'];
};

export type BraintreeCcVaultInput = {
    device_data?: Maybe<Scalars['String']>;
    public_hash: Scalars['String'];
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export type HostedProInput = {
    /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String'];
    /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String'];
};

/** Required input for Payflow Express Checkout payments */
export type PayflowExpressInput = {
    /** The unique ID of the PayPal user */
    payer_id: Scalars['String'];
    /** The token returned by the createPaypalExpressToken mutation */
    token: Scalars['String'];
};

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export type PayflowLinkInput = {
    /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
    cancel_url: Scalars['String'];
    /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
    error_url: Scalars['String'];
    /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
    return_url: Scalars['String'];
};

/** Required input for Payflow Pro and Payments Pro payment methods. */
export type PayflowProInput = {
    /** Required input for credit card related information */
    cc_details: CreditCardDetailsInput;
};

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export type CreditCardDetailsInput = {
    /** Credit card expiration month */
    cc_exp_month: Scalars['Int'];
    /** Credit card expiration year */
    cc_exp_year: Scalars['Int'];
    /** Last 4 digits of the credit card */
    cc_last_4: Scalars['Int'];
    /** Credit card type */
    cc_type: Scalars['String'];
};

/** Required input for Express Checkout and Payments Standard payments */
export type PaypalExpressInput = {
    /** The unique ID of the PayPal user */
    payer_id: Scalars['String'];
    /** The token returned by the createPaypalExpressToken mutation */
    token: Scalars['String'];
};

export type SetPaymentMethodOnCartInput = {
    cart_id: Scalars['String'];
    payment_method: PaymentMethodInput;
};

export type SetPaymentMethodOnCartOutput = {
    cart: Cart;
};

export type SetShippingAddressesOnCartInput = {
    cart_id: Scalars['String'];
    shipping_addresses: Array<Maybe<ShippingAddressInput>>;
};

export type ShippingAddressInput = {
    address?: Maybe<CartAddressInput>;
    customer_address_id?: Maybe<Scalars['Int']>;
    customer_notes?: Maybe<Scalars['String']>;
};

export type SetShippingAddressesOnCartOutput = {
    cart: Cart;
};

export type SetShippingMethodsOnCartInput = {
    cart_id: Scalars['String'];
    shipping_methods: Array<Maybe<ShippingMethodInput>>;
};

export type ShippingMethodInput = {
    carrier_code: Scalars['String'];
    method_code: Scalars['String'];
};

export type SetShippingMethodsOnCartOutput = {
    cart: Cart;
};

export type UpdateCartItemsInput = {
    cart_id: Scalars['String'];
    cart_items: Array<Maybe<CartItemUpdateInput>>;
};

export type CartItemUpdateInput = {
    cart_item_id: Scalars['Int'];
    customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
    quantity?: Maybe<Scalars['Float']>;
};

export type UpdateCartItemsOutput = {
    cart: Cart;
};

export type WishlistItemInput = {
    /** Product ID */
    product_id: Scalars['Int'];
    /** Wishlist unique identifier */
    wishlist_id: Scalars['ID'];
};

/** This enumeration the price type. */
export enum PriceTypeEnum {
    Fixed = 'FIXED',
    Percent = 'PERCENT',
    Dynamic = 'DYNAMIC'
}

/** ProductLinks is an implementation of ProductLinksInterface. */
export type ProductLinks = ProductLinksInterface & {
    /** One of related, associated, upsell, or crosssell. */
    link_type?: Maybe<Scalars['String']>;
    /** The SKU of the linked product. */
    linked_product_sku?: Maybe<Scalars['String']>;
    /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
    linked_product_type?: Maybe<Scalars['String']>;
    /** The position within the list of product links. */
    position?: Maybe<Scalars['Int']>;
    /** The identifier of the linked product. */
    sku?: Maybe<Scalars['String']>;
};

/** PhysicalProductInterface contains attributes specific to tangible products. */
export type PhysicalProductInterface = {
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<Scalars['Float']>;
};

/** CustomizableAreaOption contains information about a text area that is defined as part of a customizable option. */
export type CustomizableAreaOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** The Stock Keeping Unit of the base product. */
    product_sku?: Maybe<Scalars['String']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An object that defines a text area. */
    value?: Maybe<CustomizableAreaValue>;
};

/** The CustomizableOptionInterface contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export type CustomizableOptionInterface = {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
};

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export type CustomizableAreaValue = {
    /** The maximum number of characters that can be entered for this customizable option. */
    max_characters?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
};

/** CustomizableDateOption contains information about a date picker that is defined as part of a customizable option. */
export type CustomizableDateOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** The Stock Keeping Unit of the base product. */
    product_sku?: Maybe<Scalars['String']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An object that defines a date field in a customizable option. */
    value?: Maybe<CustomizableDateValue>;
};

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export type CustomizableDateValue = {
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
};

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export type CustomizableDropDownOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An array that defines the set of options for a drop down menu. */
    value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
};

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export type CustomizableDropDownValue = {
    /** The ID assigned to the value. */
    option_type_id?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
};

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export type CustomizableMultipleOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An array that defines the set of options for a multiselect. */
    value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
};

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export type CustomizableMultipleValue = {
    /** The ID assigned to the value. */
    option_type_id?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
};

/** CustomizableFieldOption contains information about a text field that is defined as part of a customizable option. */
export type CustomizableFieldOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** The Stock Keeping Unit of the base product. */
    product_sku?: Maybe<Scalars['String']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An object that defines a text field. */
    value?: Maybe<CustomizableFieldValue>;
};

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export type CustomizableFieldValue = {
    /** The maximum number of characters that can be entered for this customizable option. */
    max_characters?: Maybe<Scalars['Int']>;
    /** The price of the custom value. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
};

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export type CustomizableFileOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** The Stock Keeping Unit of the base product. */
    product_sku?: Maybe<Scalars['String']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An object that defines a file value. */
    value?: Maybe<CustomizableFileValue>;
};

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export type CustomizableFileValue = {
    /** The file extension to accept. */
    file_extension?: Maybe<Scalars['String']>;
    /** The maximum width of an image. */
    image_size_x?: Maybe<Scalars['Int']>;
    /** The maximum height of an image. */
    image_size_y?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
};

/** CustomizableProductInterface contains information about customizable product options. */
export type CustomizableProductInterface = {
    /** An array of options for a customizable product. */
    options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
};

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export type CustomizableRadioOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An array that defines a set of radio buttons. */
    value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
};

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export type CustomizableRadioValue = {
    /** The ID assigned to the value. */
    option_type_id?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
    /** The order in which the radio button is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
};

/** CustomizableCheckbbixOption contains information about a set of checkbox values that are defined as part of a customizable option. */
export type CustomizableCheckboxOption = CustomizableOptionInterface & {
    /** Option ID. */
    option_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is required. */
    required?: Maybe<Scalars['Boolean']>;
    /** The order in which the option is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
    /** An array that defines a set of checkbox values. */
    value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
};

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export type CustomizableCheckboxValue = {
    /** The ID assigned to the value. */
    option_type_id?: Maybe<Scalars['Int']>;
    /** The price assigned to this option. */
    price?: Maybe<Scalars['Float']>;
    /** FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** The Stock Keeping Unit for this option. */
    sku?: Maybe<Scalars['String']>;
    /** The order in which the checkbox value is displayed. */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name for this option. */
    title?: Maybe<Scalars['String']>;
};

/** A virtual product is non-tangible product that does not require shipping and is not kept in inventory. */
export type VirtualProduct = ProductInterface &
    CustomizableProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** An array of options for a customizable product. */
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
    };

/** A simple product is tangible and are usually sold as single units or in fixed quantities. */
export type SimpleProduct = ProductInterface &
    PhysicalProductInterface &
    CustomizableProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** An array of options for a customizable product. */
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
        /** The weight of the item, in units defined by the store. */
        weight?: Maybe<Scalars['Float']>;
    };

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export type ProductFilterInput = {
    /** Category ID the product belongs to. */
    category_id?: Maybe<FilterTypeInput>;
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<FilterTypeInput>;
    /** Timestamp indicating when the product was created. */
    created_at?: Maybe<FilterTypeInput>;
    /** The name of a custom layout. */
    custom_layout?: Maybe<FilterTypeInput>;
    /** XML code that is applied as a layout update to the product page. */
    custom_layout_update?: Maybe<FilterTypeInput>;
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<FilterTypeInput>;
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<FilterTypeInput>;
    /** Indicates whether additional attributes have been created for the product. */
    has_options?: Maybe<FilterTypeInput>;
    /** The relative path to the main image on the product page. */
    image?: Maybe<FilterTypeInput>;
    /** The label assigned to a product image. */
    image_label?: Maybe<FilterTypeInput>;
    /** A number representing the product's manufacturer. */
    manufacturer?: Maybe<FilterTypeInput>;
    /** The numeric maximal price of the product. Do not include the currency code. */
    max_price?: Maybe<FilterTypeInput>;
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<FilterTypeInput>;
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<FilterTypeInput>;
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<FilterTypeInput>;
    /** The numeric minimal price of the product. Do not include the currency code. */
    min_price?: Maybe<FilterTypeInput>;
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<FilterTypeInput>;
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    news_from_date?: Maybe<FilterTypeInput>;
    /** The end date for new product listings. */
    news_to_date?: Maybe<FilterTypeInput>;
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<FilterTypeInput>;
    /** The keyword required to perform a logical OR comparison. */
    or?: Maybe<ProductFilterInput>;
    /** The price of an item. */
    price?: Maybe<FilterTypeInput>;
    /** Indicates whether the product has required options. */
    required_options?: Maybe<FilterTypeInput>;
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<FilterTypeInput>;
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<FilterTypeInput>;
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<FilterTypeInput>;
    /** The label assigned to a product's small image. */
    small_image_label?: Maybe<FilterTypeInput>;
    /** The beginning date that a product has a special price. */
    special_from_date?: Maybe<FilterTypeInput>;
    /** The discounted price of the product. Do not include the currency code. */
    special_price?: Maybe<FilterTypeInput>;
    /** The end date that a product has a special price. */
    special_to_date?: Maybe<FilterTypeInput>;
    /** The file name of a swatch image */
    swatch_image?: Maybe<FilterTypeInput>;
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<FilterTypeInput>;
    /** The label assigned to a product's thumbnail image. */
    thumbnail_label?: Maybe<FilterTypeInput>;
    /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
    tier_price?: Maybe<FilterTypeInput>;
    /** Timestamp indicating when the product was updated. */
    updated_at?: Maybe<FilterTypeInput>;
    /** The part of the URL that identifies the product */
    url_key?: Maybe<FilterTypeInput>;
    url_path?: Maybe<FilterTypeInput>;
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<FilterTypeInput>;
};

/** ProductSortInput is deprecated, use @ProductAttributeSortInput instead. ProductSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export type ProductSortInput = {
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<SortEnum>;
    /** Timestamp indicating when the product was created. */
    created_at?: Maybe<SortEnum>;
    /** The name of a custom layout. */
    custom_layout?: Maybe<SortEnum>;
    /** XML code that is applied as a layout update to the product page. */
    custom_layout_update?: Maybe<SortEnum>;
    /** Detailed information about the product. The value can include simple HTML tags. */
    description?: Maybe<SortEnum>;
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<SortEnum>;
    /** Indicates whether additional attributes have been created for the product. */
    has_options?: Maybe<SortEnum>;
    /** The relative path to the main image on the product page. */
    image?: Maybe<SortEnum>;
    /** The label assigned to a product image. */
    image_label?: Maybe<SortEnum>;
    /** A number representing the product's manufacturer. */
    manufacturer?: Maybe<SortEnum>;
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<SortEnum>;
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<SortEnum>;
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<SortEnum>;
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<SortEnum>;
    /** The beginning date for new product listings, and determines if the product is featured as a new product. */
    news_from_date?: Maybe<SortEnum>;
    /** The end date for new product listings. */
    news_to_date?: Maybe<SortEnum>;
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<SortEnum>;
    /** The price of the item. */
    price?: Maybe<SortEnum>;
    /** Indicates whether the product has required options. */
    required_options?: Maybe<SortEnum>;
    /** A short description of the product. Its use depends on the theme. */
    short_description?: Maybe<SortEnum>;
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<SortEnum>;
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<SortEnum>;
    /** The label assigned to a product's small image. */
    small_image_label?: Maybe<SortEnum>;
    /** The beginning date that a product has a special price. */
    special_from_date?: Maybe<SortEnum>;
    /** The discounted price of the product. */
    special_price?: Maybe<SortEnum>;
    /** The end date that a product has a special price. */
    special_to_date?: Maybe<SortEnum>;
    /** The file name of a swatch image */
    swatch_image?: Maybe<SortEnum>;
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<SortEnum>;
    /** The label assigned to a product's thumbnail image. */
    thumbnail_label?: Maybe<SortEnum>;
    /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
    tier_price?: Maybe<SortEnum>;
    /** Timestamp indicating when the product was updated. */
    updated_at?: Maybe<SortEnum>;
    /** The part of the URL that identifies the product */
    url_key?: Maybe<SortEnum>;
    url_path?: Maybe<SortEnum>;
    /** The weight of the item, in units defined by the store. */
    weight?: Maybe<SortEnum>;
};

export type LayerFilterItem = LayerFilterItemInterface & {
    /**
     * Count of items by filter.
     * @deprecated Use AggregationOption.count instead.
     */
    items_count?: Maybe<Scalars['Int']>;
    /**
     * Filter label.
     * @deprecated Use AggregationOption.label instead.
     */
    label?: Maybe<Scalars['String']>;
    /**
     * Value for filter request variable to be used in query.
     * @deprecated Use AggregationOption.value instead.
     */
    value_string?: Maybe<Scalars['String']>;
};

/** Contains information about a product video. */
export type ProductVideo = MediaGalleryInterface & {
    /** The label of the product image or video. */
    label?: Maybe<Scalars['String']>;
    /** The URL of the product image or video. */
    url?: Maybe<Scalars['String']>;
    /** Contains a ProductMediaGalleryEntriesVideoContent object. */
    video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
};

/** Simple Cart Item */
export type SimpleCartItem = CartItemInterface & {
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
};

export type SelectedCustomizableOption = {
    id: Scalars['Int'];
    is_required: Scalars['Boolean'];
    label: Scalars['String'];
    sort_order: Scalars['Int'];
    values: Array<Maybe<SelectedCustomizableOptionValue>>;
};

export type SelectedCustomizableOptionValue = {
    id: Scalars['Int'];
    label: Scalars['String'];
    price: CartItemSelectedOptionValuePrice;
    value: Scalars['String'];
};

export type CartItemSelectedOptionValuePrice = {
    type: PriceTypeEnum;
    units: Scalars['String'];
    value: Scalars['Float'];
};

/** Virtual Cart Item */
export type VirtualCartItem = CartItemInterface & {
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
};

/** Downloadable Cart Item */
export type DownloadableCartItem = CartItemInterface & {
    customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
    id: Scalars['String'];
    /** An array containing information about the links for the added to cart downloadable product */
    links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
    /** DownloadableProductSamples defines characteristics of a downloadable product */
    samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
};

/** DownloadableProductLinks defines characteristics of a downloadable product */
export type DownloadableProductLinks = {
    /** @deprecated This information should not be exposed on frontend */
    id?: Maybe<Scalars['Int']>;
    /** @deprecated This information should not be exposed on frontend */
    is_shareable?: Maybe<Scalars['Boolean']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    link_type?: Maybe<DownloadableFileTypeEnum>;
    /** @deprecated This information should not be exposed on frontend */
    number_of_downloads?: Maybe<Scalars['Int']>;
    /** The price of the downloadable product */
    price?: Maybe<Scalars['Float']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_file?: Maybe<Scalars['String']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_type?: Maybe<DownloadableFileTypeEnum>;
    /** URL to the downloadable sample */
    sample_url?: Maybe<Scalars['String']>;
    /** A number indicating the sort order */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name of the link */
    title?: Maybe<Scalars['String']>;
};

export enum DownloadableFileTypeEnum {
    File = 'FILE',
    Url = 'URL'
}

/** DownloadableProductSamples defines characteristics of a downloadable product */
export type DownloadableProductSamples = {
    /** @deprecated This information should not be exposed on frontend */
    id?: Maybe<Scalars['Int']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_file?: Maybe<Scalars['String']>;
    /** @deprecated `sample_url` serves to get the downloadable sample */
    sample_type?: Maybe<DownloadableFileTypeEnum>;
    /** URL to the downloadable sample */
    sample_url?: Maybe<Scalars['String']>;
    /** A number indicating the sort order */
    sort_order?: Maybe<Scalars['Int']>;
    /** The display name of the sample */
    title?: Maybe<Scalars['String']>;
};

/** DownloadableProduct defines a product that the customer downloads */
export type DownloadableProduct = ProductInterface &
    CustomizableProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        /** An array containing information about the links for this downloadable product */
        downloadable_product_links?: Maybe<
            Array<Maybe<DownloadableProductLinks>>
        >;
        /** An array containing information about samples of this downloadable product. */
        downloadable_product_samples?: Maybe<
            Array<Maybe<DownloadableProductSamples>>
        >;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** A value of 1 indicates that each link in the array must be purchased separately */
        links_purchased_separately?: Maybe<Scalars['Int']>;
        /** The heading above the list of downloadable products */
        links_title?: Maybe<Scalars['String']>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** An array of options for a customizable product. */
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
    };

export type BundleCartItem = CartItemInterface & {
    bundle_options: Array<Maybe<SelectedBundleOption>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
};

export type SelectedBundleOption = {
    id: Scalars['Int'];
    label: Scalars['String'];
    type: Scalars['String'];
    values: Array<Maybe<SelectedBundleOptionValue>>;
};

export type SelectedBundleOptionValue = {
    id: Scalars['Int'];
    label: Scalars['String'];
    price: Scalars['Float'];
    quantity: Scalars['Float'];
};

/** BundleItem defines an individual item in a bundle product. */
export type BundleItem = {
    /** An ID assigned to each type of item in a bundle product. */
    option_id?: Maybe<Scalars['Int']>;
    /** An array of additional options for this bundle item. */
    options?: Maybe<Array<Maybe<BundleItemOption>>>;
    /** he relative position of this item compared to the other bundle items. */
    position?: Maybe<Scalars['Int']>;
    /** Indicates whether the item must be included in the bundle. */
    required?: Maybe<Scalars['Boolean']>;
    /** The SKU of the bundle product. */
    sku?: Maybe<Scalars['String']>;
    /** The display name of the item. */
    title?: Maybe<Scalars['String']>;
    /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
    type?: Maybe<Scalars['String']>;
};

/** BundleItemOption defines characteristics and options for a specific bundle item. */
export type BundleItemOption = {
    /** Indicates whether the customer can change the number of items for this option. */
    can_change_quantity?: Maybe<Scalars['Boolean']>;
    /** The ID assigned to the bundled item option. */
    id?: Maybe<Scalars['Int']>;
    /** Indicates whether this option is the default option. */
    is_default?: Maybe<Scalars['Boolean']>;
    /** The text that identifies the bundled item option. */
    label?: Maybe<Scalars['String']>;
    /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
    position?: Maybe<Scalars['Int']>;
    /** The price of the selected option. */
    price?: Maybe<Scalars['Float']>;
    /** One of FIXED, PERCENT, or DYNAMIC. */
    price_type?: Maybe<PriceTypeEnum>;
    /** Contains details about this product option. */
    product?: Maybe<ProductInterface>;
    /**
     * Indicates the quantity of this specific bundle item.
     * @deprecated The `qty` is deprecated. Use `quantity` instead.
     */
    qty?: Maybe<Scalars['Float']>;
    /** Indicates the quantity of this specific bundle item. */
    quantity?: Maybe<Scalars['Float']>;
};

/** BundleProduct defines basic features of a bundle product and contains multiple BundleItems. */
export type BundleProduct = ProductInterface &
    PhysicalProductInterface &
    CustomizableProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        /** Indicates whether the bundle product has a dynamic price. */
        dynamic_price?: Maybe<Scalars['Boolean']>;
        /** Indicates whether the bundle product has a dynamic SK. */
        dynamic_sku?: Maybe<Scalars['Boolean']>;
        /** Indicates whether the bundle product has a dynamically calculated weight. */
        dynamic_weight?: Maybe<Scalars['Boolean']>;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** An array containing information about individual bundle items. */
        items?: Maybe<Array<Maybe<BundleItem>>>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** An array of options for a customizable product. */
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** One of PRICE_RANGE or AS_LOW_AS. */
        price_view?: Maybe<PriceViewEnum>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** Indicates whether to ship bundle items together or individually. */
        ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
        /** The weight of the item, in units defined by the store. */
        weight?: Maybe<Scalars['Float']>;
    };

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
    PriceRange = 'PRICE_RANGE',
    AsLowAs = 'AS_LOW_AS'
}

/** This enumeration defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
    Together = 'TOGETHER',
    Separately = 'SEPARATELY'
}

/** GroupedProduct defines a grouped product */
export type GroupedProduct = ProductInterface &
    PhysicalProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** An array containing grouped product items */
        items?: Maybe<Array<Maybe<GroupedProductItem>>>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
        /** The weight of the item, in units defined by the store. */
        weight?: Maybe<Scalars['Float']>;
    };

/** GroupedProductItem contains information about an individual grouped product item */
export type GroupedProductItem = {
    /** The relative position of this item compared to the other group items */
    position?: Maybe<Scalars['Int']>;
    /** The ProductInterface object, which contains details about this product option */
    product?: Maybe<ProductInterface>;
    /** The quantity of this grouped product item */
    qty?: Maybe<Scalars['Float']>;
};

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export type PaypalExpressToken = {
    /**
     * A set of URLs that allow the buyer to authorize payment and adjust checkout details
     * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
     */
    paypal_urls?: Maybe<PaypalExpressUrlList>;
    /**
     * The token returned by PayPal
     * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
     */
    token?: Maybe<Scalars['String']>;
};

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export type PayflowProToken = {
    response_message: Scalars['String'];
    result: Scalars['Int'];
    result_code: Scalars['Int'];
    secure_token: Scalars['String'];
    secure_token_id: Scalars['String'];
};

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export type ConfigurableProduct = ProductInterface &
    PhysicalProductInterface &
    CustomizableProductInterface & {
        activity?: Maybe<Scalars['String']>;
        /** The attribute set assigned to the product. */
        attribute_set_id?: Maybe<Scalars['Int']>;
        /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
        canonical_url?: Maybe<Scalars['String']>;
        /** The categories assigned to a product. */
        categories?: Maybe<Array<Maybe<CategoryInterface>>>;
        category_gear?: Maybe<Scalars['String']>;
        climate?: Maybe<Scalars['String']>;
        collar?: Maybe<Scalars['String']>;
        color?: Maybe<Scalars['Int']>;
        /** An array of linked simple product items */
        configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
        /** The product's country of origin. */
        country_of_manufacture?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was created. */
        created_at?: Maybe<Scalars['String']>;
        /** Crosssell Products */
        crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** Detailed information about the product. The value can include simple HTML tags. */
        description?: Maybe<ComplexTextValue>;
        eco_collection?: Maybe<Scalars['Int']>;
        erin_recommends?: Maybe<Scalars['Int']>;
        features_bags?: Maybe<Scalars['String']>;
        format?: Maybe<Scalars['Int']>;
        gender?: Maybe<Scalars['String']>;
        /** Indicates whether a gift message is available. */
        gift_message_available?: Maybe<Scalars['String']>;
        /** The ID number assigned to the product. */
        id?: Maybe<Scalars['Int']>;
        /** The relative path to the main image on the product page. */
        image?: Maybe<ProductImage>;
        /** A number representing the product's manufacturer. */
        manufacturer?: Maybe<Scalars['Int']>;
        material?: Maybe<Scalars['String']>;
        /** An array of Media Gallery objects. */
        media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
        /**
         * An array of MediaGalleryEntry objects.
         * @deprecated Use product's `media_gallery` instead
         */
        media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
        /** A brief overview of the product for search results listings, maximum 255 characters. */
        meta_description?: Maybe<Scalars['String']>;
        /** A comma-separated list of keywords that are visible only to search engines. */
        meta_keyword?: Maybe<Scalars['String']>;
        /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
        meta_title?: Maybe<Scalars['String']>;
        /** Minimum Qty Allowed in Shopping Cart */
        min_sale_qty: Scalars['Float'];
        /** The product name. Customers use this name to identify the product. */
        name?: Maybe<Scalars['String']>;
        new?: Maybe<Scalars['Int']>;
        /** The beginning date for new product listings, and determines if the product is featured as a new product. */
        new_from_date?: Maybe<Scalars['String']>;
        /** The end date for new product listings. */
        new_to_date?: Maybe<Scalars['String']>;
        /** Product stock only x left count */
        only_x_left_in_stock?: Maybe<Scalars['Float']>;
        /** An array of options for a customizable product. */
        options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
        /** If the product has multiple options, determines where they appear on the product page. */
        options_container?: Maybe<Scalars['String']>;
        pattern?: Maybe<Scalars['String']>;
        performance_fabric?: Maybe<Scalars['Int']>;
        /**
         * A ProductPrices object, indicating the price of an item.
         * @deprecated Use price_range for product price information.
         */
        price?: Maybe<ProductPrices>;
        /** A PriceRange object, indicating the range of prices for the product */
        price_range: PriceRange;
        /** An array of TierPrice objects. */
        price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
        /** An array of ProductLinks objects. */
        product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
        /** Related Products */
        related_products?: Maybe<Array<Maybe<ProductInterface>>>;
        sale?: Maybe<Scalars['Int']>;
        /** A short description of the product. Its use depends on the theme. */
        short_description?: Maybe<ComplexTextValue>;
        size?: Maybe<Scalars['Int']>;
        /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
        sku?: Maybe<Scalars['String']>;
        sleeve?: Maybe<Scalars['String']>;
        /** The relative path to the small image, which is used on catalog pages. */
        small_image?: Maybe<ProductImage>;
        /** The beginning date that a product has a special price. */
        special_from_date?: Maybe<Scalars['String']>;
        /** The discounted price of the product. */
        special_price?: Maybe<Scalars['Float']>;
        /** The end date that a product has a special price. */
        special_to_date?: Maybe<Scalars['String']>;
        /** Stock status of the product */
        stock_status?: Maybe<ProductStockStatus>;
        strap_bags?: Maybe<Scalars['String']>;
        style_bags?: Maybe<Scalars['String']>;
        style_bottom?: Maybe<Scalars['String']>;
        style_general?: Maybe<Scalars['String']>;
        /** The file name of a swatch image */
        swatch_image?: Maybe<Scalars['String']>;
        /** The relative path to the product's thumbnail image. */
        thumbnail?: Maybe<ProductImage>;
        /**
         * The price when tier pricing is in effect and the items purchased threshold has been reached.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_price?: Maybe<Scalars['Float']>;
        /**
         * An array of ProductTierPrices objects.
         * @deprecated Use price_tiers for product tier price information.
         */
        tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
        /**
         * One of simple, virtual, bundle, downloadable, grouped, or configurable.
         * @deprecated Use __typename instead.
         */
        type_id?: Maybe<Scalars['String']>;
        /** Timestamp indicating when the product was updated. */
        updated_at?: Maybe<Scalars['String']>;
        /** Upsell Products */
        upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
        /** The part of the URL that identifies the product */
        url_key?: Maybe<Scalars['String']>;
        /** @deprecated Use product's `canonical_url` or url rewrites instead */
        url_path?: Maybe<Scalars['String']>;
        /** URL rewrites list */
        url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
        /** The part of the product URL that is appended after the url key */
        url_suffix?: Maybe<Scalars['String']>;
        /** An array of variants of products */
        variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
        /**
         * An array of websites in which the product is available.
         * @deprecated The field should not be used on the storefront.
         */
        websites?: Maybe<Array<Maybe<Website>>>;
        /** The weight of the item, in units defined by the store. */
        weight?: Maybe<Scalars['Float']>;
    };

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export type ConfigurableProductOptions = {
    /** A string that identifies the attribute */
    attribute_code?: Maybe<Scalars['String']>;
    /** The ID assigned to the attribute */
    attribute_id?: Maybe<Scalars['String']>;
    /** The configurable option ID number assigned by the system */
    id?: Maybe<Scalars['Int']>;
    /** A string that describes the configurable product option, which is displayed on the UI */
    label?: Maybe<Scalars['String']>;
    /** A number that indicates the order in which the attribute is displayed */
    position?: Maybe<Scalars['Int']>;
    /** This is the same as a product's id field */
    product_id?: Maybe<Scalars['Int']>;
    /** Indicates whether the option is the default */
    use_default?: Maybe<Scalars['Boolean']>;
    /** An array that defines the value_index codes assigned to the configurable product */
    values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
};

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export type ConfigurableProductOptionsValues = {
    /** The label of the product on the default store */
    default_label?: Maybe<Scalars['String']>;
    /** The label of the product */
    label?: Maybe<Scalars['String']>;
    /** The label of the product on the current store */
    store_label?: Maybe<Scalars['String']>;
    /** Indicates whether to use the default_label */
    use_default_value?: Maybe<Scalars['Boolean']>;
    /** A unique index number assigned to the configurable product option */
    value_index?: Maybe<Scalars['Int']>;
};

/** An array containing all the simple product variants of a configurable product */
export type ConfigurableVariant = {
    attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
    product?: Maybe<SimpleProduct>;
};

/** ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option */
export type ConfigurableAttributeOption = {
    /** The ID assigned to the attribute */
    code?: Maybe<Scalars['String']>;
    /** A string that describes the configurable attribute option */
    label?: Maybe<Scalars['String']>;
    /** A unique index number assigned to the configurable product option */
    value_index?: Maybe<Scalars['Int']>;
};

export type ConfigurableCartItem = CartItemInterface & {
    configurable_options: Array<Maybe<SelectedConfigurableOption>>;
    customizable_options: Array<Maybe<SelectedCustomizableOption>>;
    id: Scalars['String'];
    prices?: Maybe<CartItemPrices>;
    product: ProductInterface;
    quantity: Scalars['Float'];
};

export type SelectedConfigurableOption = {
    id: Scalars['Int'];
    option_label: Scalars['String'];
    value_id: Scalars['Int'];
    value_label: Scalars['String'];
};

export type SwatchLayerFilterItemInterface = {
    /** Data required to render swatch filter item */
    swatch_data?: Maybe<SwatchData>;
};

export type SwatchData = {
    /** Type of swatch filter item: 1 - text, 2 - image */
    type?: Maybe<Scalars['String']>;
    /** Value for swatch item (text or image link) */
    value?: Maybe<Scalars['String']>;
};

export type SwatchLayerFilterItem = LayerFilterItemInterface &
    SwatchLayerFilterItemInterface & {
        /**
         * Count of items by filter.
         * @deprecated Use AggregationOption.count instead.
         */
        items_count?: Maybe<Scalars['Int']>;
        /**
         * Filter label.
         * @deprecated Use AggregationOption.label instead.
         */
        label?: Maybe<Scalars['String']>;
        /** Data required to render swatch filter item */
        swatch_data?: Maybe<SwatchData>;
        /**
         * Value for filter request variable to be used in query.
         * @deprecated Use AggregationOption.value instead.
         */
        value_string?: Maybe<Scalars['String']>;
    };
