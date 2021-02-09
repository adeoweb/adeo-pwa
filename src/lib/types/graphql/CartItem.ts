import { TProduct } from 'src/lib/types/graphql/Product';
import { TMoney } from 'src/lib/types/graphql/Money';
import { PriceTypeEnum } from 'src/lib/types/graphql/PriceTypeEnum';
import { TDiscount } from 'src/lib/types/graphql/Discount';

type TCartItemInterface = {
    id: string;
    prices?: TCartItemPrices;
    product: TProduct;
    quantity: number;
};

type TCartItemPrices = {
    discounts?: TDiscount[];
    price: TMoney;
    row_total: TMoney;
    row_total_including_tax: TMoney;
    total_item_discount?: TMoney;
};

export type TSelectedCustomizableOption = {
    id: number;
    is_required: boolean;
    label: string;
    sort_order: number;
    values: TSelectedCustomizableOptionValue[];
};

type TSelectedCustomizableOptionValue = {
    id: number;
    label: string;
    price: TCartItemSelectedOptionValuePrice;
    value: string;
};

type TCartItemSelectedOptionValuePrice = {
    type: PriceTypeEnum;
    units: string;
    value: number;
};

export type TSelectedConfigurableOption = {
    id: number;
    option_label: string;
    value_id: number;
    value_label: string;
};

type TSimpleCartItem = {
    customizable_options?: TSelectedCustomizableOption[];
    // Alias
    custom_options?: TSelectedCustomizableOption[];
} & TCartItemInterface;

export type TConfigurableCartItem = {
    customizable_options?: TSelectedCustomizableOption[];
    configurable_options?: TSelectedConfigurableOption[];
} & TCartItemInterface;

export type TCartItem = TSimpleCartItem & TConfigurableCartItem;
