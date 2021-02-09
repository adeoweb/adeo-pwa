import { TCartTaxItem } from 'src/lib/types/graphql/Cart';
import { TDiscount } from 'src/lib/types/graphql/Discount';

export type TUseCartSummary = {
    currencyCode: string;
    grandTotal: number;
    taxes: TCartTaxItem[];
    discounts: TDiscount[];
    subTotal: number;
    shippingPrice: number | null;
};

export function useCartSummary(): TUseCartSummary;
