import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { TMessageCardAsyncActions } from 'src/peregrine/lib/store/actions/adeoweb/messageCard/asyncActions';
import { IMessageBlocks } from 'src/peregrine/lib/store/reducers/adeoweb/messageCard';

export interface IUseMessageCard extends TMessageCardAsyncActions {
    messageBlocks: IMessageBlocks;
}

export const useMessageCard = (): IUseMessageCard => {
    const [
        { messageBlocks },
        { clearBlock, addMessage, addMultipleMessages, clearAllMessages }
    ] = useMessageCardContext();

    return {
        messageBlocks,
        addMessage,
        addMultipleMessages,
        clearBlock,
        clearAllMessages
    };
};
