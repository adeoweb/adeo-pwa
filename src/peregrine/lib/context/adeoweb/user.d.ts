import { TUserState } from 'src/peregrine/lib/store/reducers/adeoweb/user';
import { TUserActions } from 'src/peregrine/lib/store/actions/adeoweb/user/actions';
import { TUserAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/user/asyncActions';

export type TUserContext = [
    TUserState,
    { actions: TUserActions } & TUserAsyncActions
];

export function useUserContext(): TUserContext;
