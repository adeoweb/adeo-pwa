import { TCheckoutActions } from 'src/peregrine/lib/store/actions/adeoweb/checkout/actions';
import { TCheckoutAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/checkout/asyncActions';
import { TCheckoutState } from 'src/peregrine/lib/store/reducers/adeoweb/checkout';

export type TCheckoutContext = [
    TCheckoutState,
    { actions: TCheckoutActions } & TCheckoutAsyncActions
];

export function useCheckoutContext(): TCheckoutContext;
