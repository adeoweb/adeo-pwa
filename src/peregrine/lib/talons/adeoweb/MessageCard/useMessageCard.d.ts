import { TMessageCardAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/messageCard/asyncActions';
import { IMessageBlocks } from 'src/peregrine/lib/store/reducers/adeoweb/messageCard';

export interface IUseMessageCard extends TMessageCardAsyncActions {
    messageBlocks: IMessageBlocks;
}

export function useMessageCard(): IUseMessageCard;
