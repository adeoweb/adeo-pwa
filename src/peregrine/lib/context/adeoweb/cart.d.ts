import { ICartState } from 'src/peregrine/lib/store/reducers/adeoweb/cart';
import { TCartActions } from 'src/peregrine/lib/store/actions/adeoweb/cart/actions';
import { TCartAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/cart/asyncActions';

export type TCartContext = [
    ICartState,
    { actions: TCartActions } & TCartAsyncActions
];

export function useCartContext(): TCartContext;
