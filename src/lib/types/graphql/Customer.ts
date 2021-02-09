import { CountryCodeEnum } from 'src/lib/types/graphql/CountryEnum';
import { TMoney } from 'src/lib/types/graphql/Money';
import { TSearchResultPageInfo } from 'src/lib/types/graphql/SearchResultPageInfo';
import { TProductInterface } from 'src/lib/types/graphql/Product';

export type TCustomer = {
    addresses?: TCustomerAddress[];
    created_at?: string;
    date_of_birth?: string;
    default_billing?: string;
    default_shipping?: string;
    email: string;
    firstname: string;
    gender?: number;
    is_subscribed?: boolean;
    lastname: string;
    middlename?: string;
    prefix?: string;
    store_credit?: TCustomerStoreCredit;
    suffix?: string;
    taxvat?: string;
    wishlist?: TWishlist;
    // Deprecated: Customer group should not be exposed in the storefront scenarios
    // But we use it for caching/profiling users so for us it's not deprecated
    group_id: number;
};

export type TCustomerInput = {
    date_of_birth?: string;
    dob?: string;
    email?: string;
    firstname?: string;
    gender?: number;
    is_subscribed?: boolean;
    lastname?: string;
    middlename?: string;
    password?: string;
    prefix?: string;
    suffix?: string;
    taxvat?: string;
};

export type TCustomerAddress = {
    city: string;
    company: string;
    country_code: CountryCodeEnum;
    default_billing: boolean;
    default_shipping: boolean;
    extension_attributes: TCustomerAddressAttribute[];
    fax: string;
    firstname: string;
    id: number;
    lastname: string;
    middlename: string;
    postcode: string;
    prefix: string;
    region: TCustomerAddressRegion;
    street: string[];
    suffix: string;
    telephone: string;
    vat_id: string;
};

export type TCustomerAddressInput = {
    city?: string;
    company?: string;
    country_code?: CountryCodeEnum;
    country_id?: CountryCodeEnum;
    custom_attributes?: TCustomerAddressAttributeInput[];
    default_billing?: boolean;
    default_shipping?: boolean;
    fax?: string;
    firstname?: string;
    lastname?: string;
    middlename?: string;
    postcode?: string;
    prefix?: string;
    region?: TCustomerAddressRegionInput;
    street?: string[];
    suffix?: string;
    telephone?: string;
    vat_id?: string;
};

export type TCustomerAddressAttribute = {
    attribute_code: string;
    value: string;
};

export type TCustomerAddressAttributeInput = {
    attribute_code: string;
    value: string;
};

export type TCustomerAddressRegion = {
    region: string;
    region_code: string;
};

export type TCustomerAddressRegionInput = {
    region?: string;
    region_code?: string;
    region_id?: number;
};

export type TCustomerStoreCredit = {
    balance_history: TCustomerStoreCreditHistory;
    current_balance: TMoney;
    enabled: boolean;
};

export type TCustomerStoreCreditHistory = {
    items: TCustomerStoreCreditHistoryItem[];
    page_info: TSearchResultPageInfo;
    total_count: number;
};

export type TCustomerStoreCreditHistoryItem = {
    action: string;
    actual_balance: TMoney;
    balance_change: TMoney;
    date_time_changed: string;
};

export type TWishlist = {
    id: string | number;
    items: TWishlistItem[];
    items_count: number;
    sharing_code: string;
    updated_at: string;
};

export type TWishlistItem = {
    added_at: string;
    description: string;
    id: number;
    product: TProductInterface;
    qty: number;
};

type TOrderAddressCountry = {
    code: string;
    label: string;
};

type TOrderAddressRegion = {
    code: string;
    label: string;
};

type TOrderAddressInterface = {
    city: string;
    company: string;
    country: TOrderAddressCountry;
    firstname: string;
    lastname: string;
    postcode: string;
    region: TOrderAddressRegion;
    street: string[];
    telephone: string;
};

export type TOrderBillingAddress = TOrderAddressInterface;

export type TOrderShippingAddress = TOrderAddressInterface & {
    customer_notes: string;
};

export type TOrderItem = {
    name: string;
    price: number;
    price_incl_tax: number;
    qty: number;
    row_total: number;
    row_total_incl_tax: number;
    sku: string;
};

export type TOrderPayment = {
    method: string;
};

export type TCustomerOrder = {
    created_at: string;
    grand_total: number;
    id: number;
    order_number: number;
    status: string;
    billing_address: TOrderBillingAddress;
    items: TOrderItem[];
    payment: TOrderPayment;
    shipping_address: TOrderShippingAddress;
    shipping_amount: number;
    shipping_method: string;
    subtotal: number;
    tax_amount: number;
    tax_percent: number;
};
