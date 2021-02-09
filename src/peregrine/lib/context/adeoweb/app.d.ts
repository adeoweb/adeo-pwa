import { TAppState } from 'src/peregrine/lib/store/reducers/adeoweb/app';
import { TAppActions } from 'src/peregrine/lib/store/actions/adeoweb/app/actions';
import { TAppAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/app/asyncActions';

export type TAppContext = [
    TAppState,
    { actions: TAppActions } & TAppAsyncActions
];

export function useAppContext(): TAppContext;
