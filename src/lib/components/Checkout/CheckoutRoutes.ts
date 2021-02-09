import { IRoutes } from 'src/lib/types/Routes';
import Shipping from 'src/lib/components/Checkout/Shipping';
import Payment from 'src/lib/components/Checkout/Payment';
import Review from 'src/lib/components/Checkout/Review';
import Success from 'src/lib/components/Checkout/Success';
import Failure from 'src/lib/components/Checkout/Failure';

export const rootCheckoutRoute = '/checkout';
export const CheckoutRoutes: IRoutes = {
    shipping: {
        url: rootCheckoutRoute + '/shipping',
        component: Shipping,
        exact: true
    },
    payment: {
        url: rootCheckoutRoute + '/payment',
        component: Payment,
        exact: true
    },
    review: {
        url: rootCheckoutRoute + '/review',
        component: Review,
        exact: true
    },
    success: {
        url: rootCheckoutRoute + '/success',
        component: Success,
        exact: true
    },
    failure: {
        url: rootCheckoutRoute + '/failure',
        component: Failure,
        exact: true
    }
};
export const defaultCheckoutRoute = CheckoutRoutes.shipping;
