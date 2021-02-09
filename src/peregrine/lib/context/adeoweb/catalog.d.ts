import { TCategoryState } from 'src/peregrine/lib/store/reducers/adeoweb/catalog';
import { TCartAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/cart/asyncActions';
import { TCatalogActions } from 'src/peregrine/lib/store/actions/adeoweb/catalog/actions';

export type TCatalogContext = [
    TCategoryState,
    { actions: TCatalogActions } & TCartAsyncActions
];

export function useCatalogContext(): TCatalogContext;
