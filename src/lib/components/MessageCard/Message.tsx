import React, { FunctionComponent } from 'react';
import { errorIcon } from 'src/lib/components/MessageCard/icons';
import MessageType from 'src/lib/constants/message';
import defaultClasses from './Message.scss';

interface IMessageProps {
    type: MessageType;
    message: string;
}

const getThemeIcon = (type: MessageType) => {
    switch (type) {
        case MessageType.ERROR:
            return errorIcon;
        default:
            return null;
    }
};

const Message: FunctionComponent<IMessageProps> = ({ type, message }) => (
    <p className={`mb-0 pl-4 pr-5 ${defaultClasses.message}`}>
        <strong>
            {getThemeIcon(type)}
            {message}
        </strong>
    </p>
);

export default Message;
