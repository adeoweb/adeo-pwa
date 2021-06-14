import { TProductCompareActions } from 'src/peregrine/lib/store/actions/adeoweb/productCompare/actions';
import { TProductCompareAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/productCompare/asyncActions';
import { TProductCompareState } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';

export type TProductCompareContext = [
    TProductCompareState,
    { actions: TProductCompareActions } & TProductCompareAsyncActions
];

export function useProductCompareContext(): TProductCompareContext;
