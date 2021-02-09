import { TMoney } from 'src/lib/types/graphql/Money';
import { TDiscount } from 'src/lib/types/graphql/Discount';
import { TCartItem } from 'src/lib/types/graphql/CartItem';

type TAppliedCoupon = {
    code: string;
};

type TAppliedGiftCards = {
    applied_balance?: TMoney;
    code?: string;
    current_balance?: TMoney;
    expiration_date?: string;
};

type TAppliedStoreCredit = {
    applied_balance?: TMoney;
    current_balance?: TMoney;
    enabled?: boolean;
};

export type TAvailablePaymentMethod = {
    code: string;
    title: string;
};

type TCartAddressCountry = {
    code: string;
    label: string;
};

type TCartAddressRegion = {
    code: string;
    label: string;
};

export type TBillingCartAddress = {
    city: string;
    company?: string;
    country: TCartAddressCountry;
    customer_address_id?: number;
    firstname: string;
    lastname: string;
    postcode?: string;
    region?: TCartAddressRegion;
    street: string[];
    telephone: string;
};

export type TCartTaxItem = {
    amount: TMoney;
    label: string;
};

export type TCartPrices = {
    applied_taxes?: TCartTaxItem[];
    discounts?: TDiscount[];
    grand_total?: TMoney;
    subtotal_excluding_tax?: TMoney;
    subtotal_including_tax?: TMoney;
    subtotal_with_discount_excluding_tax?: TMoney;
};

export type TSelectedPaymentMethod = {
    code: string;
    purchase_order_number?: string;
    title: string;
};

export type TSelectedShippingMethod = {
    amount: TMoney;
    carrier_code: string;
    carrier_title: string;
    method_code: string;
    method_title: string;
};

export type TAvailableShippingMethod = {
    amount: TMoney;
    available: boolean;
    carrier_code: string;
    carrier_title: string;
    error_message?: string;
    method_code?: string;
    method_title?: string;
    price_excl_tax: TMoney;
    price_incl_tax: TMoney;
};

export type TShippingCartAddress = {
    available_shipping_methods?: TAvailableShippingMethod[];
    cart_items_v2?: TCartItem[];
    city: string;
    company?: string;
    country: TCartAddressCountry;
    customer_address_id?: number;
    customer_notes?: string;
    firstname: string;
    lastname: string;
    postcode?: string;
    region?: TCartAddressRegion;
    selected_shipping_method?: TSelectedShippingMethod;
    street: string[];
    telephone: string;
};

export type TCartAddressInput = {
    city: string;
    company?: string;
    country_code: string;
    firstname: string;
    lastname: string;
    postcode: string;
    region: string;
    save_in_address_book?: boolean;
    street: [string, string];
    telephone: string;
};

export type TCart = {
    applied_coupons?: TAppliedCoupon[];
    applied_gift_cards?: TAppliedGiftCards[];
    applied_store_credit?: TAppliedStoreCredit;
    available_payment_methods?: TAvailablePaymentMethod[];
    billing_address?: TBillingCartAddress;
    email?: string;
    id: string | number;
    is_virtual: boolean;
    items?: TCartItem[];
    prices?: TCartPrices;
    selected_payment_method?: TSelectedPaymentMethod;
    shipping_addresses: TShippingCartAddress[];
    total_quantity?: number;
};
