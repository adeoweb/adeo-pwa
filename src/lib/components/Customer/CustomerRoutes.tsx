import { lazy } from 'react';
import { IRoutes } from 'src/lib/types/Routes';

const AccountInfo = lazy(() => import('./pages/AccountInfoPage'));
const ChangePassword = lazy(() => import('./pages/ChangePasswordPage'));
const EditCustomerInfo = lazy(() => import('./pages/EditCustomerInfoPage'));
const ShippingInfo = lazy(() => import('./pages/ShippingInfoPage'));
const AddShippingAddress = lazy(() => import('./pages/AddShippingAddressPage'));
const EditShippingAddress = lazy(
    () => import('./pages/EditShippingAddressPage')
);
const BillingInfo = lazy(() => import('./pages/BillingInfoPage'));
const AddBillingAddress = lazy(() => import('./pages/AddBillingAddressPage'));
const EditBillingAddress = lazy(() => import('./pages/EditBillingAddressPage'));
const Newsletters = lazy(() => import('./pages/NewslettersPage'));
const Orders = lazy(() => import('./pages/OrdersPage'));
const OrderDetails = lazy(() => import('./pages/OrderDetailsPage'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

export const rootCustomerRoute = '/customer';
export const CustomerRoutes: IRoutes = {
    account: {
        url: rootCustomerRoute + '/account',
        component: AccountInfo,
        exact: true
    },
    changePassword: {
        url: rootCustomerRoute + '/account/change-password',
        component: ChangePassword,
        exact: true
    },
    editCustomer: {
        url: rootCustomerRoute + '/account/edit-customer',
        component: EditCustomerInfo,
        exact: true
    },
    shipping: {
        url: rootCustomerRoute + '/shipping',
        component: ShippingInfo,
        exact: true
    },
    addShipping: {
        url: rootCustomerRoute + '/shipping/add',
        component: AddShippingAddress,
        exact: true
    },
    editShipping: {
        url: rootCustomerRoute + '/shipping/edit',
        component: EditShippingAddress,
        exact: true
    },
    billing: {
        url: rootCustomerRoute + '/billing',
        component: BillingInfo,
        exact: true
    },
    addBilling: {
        url: rootCustomerRoute + '/billing/add',
        component: AddBillingAddress,
        exact: true
    },
    editBilling: {
        url: rootCustomerRoute + '/billing/edit',
        component: EditBillingAddress,
        exact: true
    },
    newsletters: {
        url: rootCustomerRoute + '/newsletters',
        component: Newsletters,
        exact: true
    },
    orders: {
        url: rootCustomerRoute + '/orders',
        component: Orders,
        exact: true
    },
    orderDetails: {
        url: rootCustomerRoute + '/orders/details',
        component: OrderDetails,
        exact: true
    },
    wishlist: {
        url: rootCustomerRoute + '/wishlist',
        component: Wishlist,
        exact: true
    }
};
export const defaultCustomerRoute = CustomerRoutes.account;
