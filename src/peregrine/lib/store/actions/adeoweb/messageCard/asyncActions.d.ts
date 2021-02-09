import MessageType from 'src//lib/constants/message';

interface IMessageContainer {
    type: MessageType;
    message: string;
}

export type TMessageCardAsyncActions = {
    addMessage(payload: IMessageContainer): Promise<void>;
    clearBlock: (payload: { type: string }) => Promise<void>;
    clearAllMessages(): Promise<void>;
    addMultipleMessages(payload: IMessageContainer[]): Promise<void>;
};
