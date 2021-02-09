import { TMessageCardState } from 'src/peregrine/lib/store/reducers/adeoweb/messageCard';
import { TMessageCardActions } from 'src/peregrine/lib/store/actions/adeoweb/messageCard/actions';
import { TMessageCardAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/messageCard/asyncActions';

export type TMessageCardContext = [
    TMessageCardState,
    { actions: TMessageCardActions } & TMessageCardAsyncActions
];

export function useMessageCardContext(): TMessageCardContext;
