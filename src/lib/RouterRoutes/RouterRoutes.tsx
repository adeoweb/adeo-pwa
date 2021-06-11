import { lazy } from 'react';

import { rootCustomerRoute } from 'src/lib/components/Customer/CustomerRoutes';
import { IRoutes } from 'src/lib/types/Routes';

const CreateAccountPage = lazy(
    () => import('../components/Customer/pages/CreateAccountPage')
);
const LoginPage = lazy(() => import('../components/Customer/pages/LoginPage'));
const Search = lazy(() => import('../RootComponents/Search'));
const Customer = lazy(() => import('../components/Customer'));
const Cart = lazy(() => import('../components/Cart'));
const Compare = lazy(() => import('../components/Compare'));
const Contact = lazy(() => import('../components/Contact'));

export const RouterRoutes: IRoutes = {
    loginPage: {
        url: rootCustomerRoute + '/login',
        component: LoginPage,
        exact: true
    },
    createAccountPage: {
        url: rootCustomerRoute + '/register',
        component: CreateAccountPage,
        exact: true
    },
    search: {
        url: '/search.html',
        component: Search,
        exact: true
    },
    cart: {
        url: '/cart',
        component: Cart,
        exact: true
    },
    customer: {
        url: rootCustomerRoute,
        component: Customer,
        exact: false
    },
    compare: {
        url: '/catalog/product_compare/index',
        component: Compare,
        exact: true
    },
    contact: {
        url: '/contactus',
        component: Contact,
        exact: true
    }
};

export default RouterRoutes;
