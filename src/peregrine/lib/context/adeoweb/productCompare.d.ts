import { TProductCompareState } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';
import { TProductCompareAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/productCompare/asyncActions';
import { TProductCompareActions } from 'src/peregrine/lib/store/actions/adeoweb/productCompare/actions';

export type TProductCompareContext = [
    TProductCompareState,
    { actions: TProductCompareActions } & TProductCompareAsyncActions
];

export function useProductCompareContext(): TProductCompareContext;
