import { WishlistItem } from '../graphql-types.generated';
import { TMoney } from './Money';
import { TProduct } from './Product';
import { TSearchResultPageInfo } from './SearchResultPageInfo';

export {
    CustomerAddressAttribute as TCustomerAddressAttribute,
    CustomerAddressAttributeInput as TCustomerAddressAttributeInput,
    CustomerAddressInput as TCustomerAddressInput,
    CustomerAddressRegion as TCustomerAddressRegion,
    CustomerAddressRegionInput as TCustomerAddressRegionInput,
    CustomerOrder as TCustomerOrder,
    OrderBillingAddress as TOrderBillingAddress,
    OrderItem as TOrderItem,
    OrderPayment as TOrderPayment,
    OrderShippingAddress as TOrderShippingAddress,
    Wishlist as TWishlist,
    Customer as TCustomer,
    CustomerAddress as TCustomerAddress,
    CustomerInput as TCustomerInput
} from '../graphql-types.generated';

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

export type TWishlistItem = Omit<WishlistItem, 'product'> & {
    product?: TProduct;
};
