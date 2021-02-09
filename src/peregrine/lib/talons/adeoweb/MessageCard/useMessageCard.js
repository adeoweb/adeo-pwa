import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';

export const useMessageCard = () => {
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
