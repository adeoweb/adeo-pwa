import { Cart } from '../graphql-types.generated';
import { TCartItem } from './CartItem';

export {
    AvailablePaymentMethod as TAvailablePaymentMethod,
    AvailableShippingMethod as TAvailableShippingMethod,
    BillingCartAddress as TBillingCartAddress,
    CartAddressInput as TCartAddressInput,
    CartPrices as TCartPrices,
    CartTaxItem as TCartTaxItem,
    SelectedPaymentMethod as TSelectedPaymentMethod,
    SelectedShippingMethod as TSelectedShippingMethod,
    ShippingCartAddress as TShippingCartAddress,
    BillingAddressInput as TBillingAddressInput
} from '../graphql-types.generated';

export type TCart = Omit<Cart, 'items'> & {
    items?: TCartItem[];
};
