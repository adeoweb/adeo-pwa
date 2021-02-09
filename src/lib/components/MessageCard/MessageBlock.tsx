import React, { FunctionComponent } from 'react';
import Message from './Message';
import CloseButton from './CloseButton';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';
import MessageType from 'src/lib/constants/message';

interface IMessageBlock {
    type: MessageType;
    messages: string[];
}

const getThemeClass = (type: MessageType): string => {
    switch (type) {
        case MessageType.ERROR:
            return 'alert-danger';
        case MessageType.WARNING:
            return 'alert-danger';
        case MessageType.SUCCESS:
            return 'alert-success';
        case MessageType.INFO:
            return 'alert-info';
        default:
            return 'alert-info';
    }
};

const renderMessages = ({
    type,
    messages
}: {
    type: MessageType;
    messages: string[];
}) =>
    messages.map((message, index) => {
        if (!message) {
            return null;
        }

        return (
            <Message
                key={`${index}-${message}`}
                type={type}
                message={message}
            />
        );
    });

const MessageBlock: FunctionComponent<IMessageBlock> = ({ type, messages }) => {
    const { clearBlock } = useMessageCard();

    const handleClearBlock = () => {
        clearBlock({ type });
    };

    return (
        <div className={`position-relative ${getThemeClass(type)}`}>
            {renderMessages({ type, messages })}
            <CloseButton handleCloseMessage={handleClearBlock} />
        </div>
    );
};

export default MessageBlock;
