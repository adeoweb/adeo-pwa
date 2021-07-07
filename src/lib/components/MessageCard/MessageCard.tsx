import React, { FunctionComponent } from 'react';

import MessageType, { MessageTypeKeys } from 'src/lib/constants/message';
import { IMessageBlocks } from 'src/peregrine/lib/store/reducers/adeoweb/messageCard';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';

import MessageBlock from './MessageBlock';

const shouldShowCard = (messageBlocks: IMessageBlocks) =>
    Boolean(
        messageBlocks[MessageType.INFO].length ||
            messageBlocks[MessageType.ERROR].length ||
            messageBlocks[MessageType.SUCCESS].length ||
            messageBlocks[MessageType.WARNING].length
    );

const renderMessageBlocks = (messageBlocks: IMessageBlocks) => {
    const keys = Object.keys(MessageType) as MessageTypeKeys[];

    return keys.map((key, index) => {
        const messageKey = MessageType[key];

        if (!messageBlocks[messageKey].length) {
            return null;
        }

        return (
            <MessageBlock
                key={`${index}-${messageKey}`}
                type={messageKey}
                messages={messageBlocks[messageKey]}
            />
        );
    });
};

const MessageCard: FunctionComponent = () => {
    const { messageBlocks } = useMessageCard();
    const showCard = shouldShowCard(messageBlocks);
    const display = showCard ? 'd-block' : 'd-none';

    if (showCard) {
        window.scrollTo(0, 0);
    }

    return (
        <div
            className={`ss-card alert alert-dismissible fade show p-0 ${display}`}
            role="alert"
        >
            {renderMessageBlocks(messageBlocks)}
        </div>
    );
};

export default MessageCard;
