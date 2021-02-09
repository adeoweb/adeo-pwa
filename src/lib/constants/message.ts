enum MessageType {
    ERROR = 'error',
    WARNING = 'warning',
    SUCCESS = 'success',
    INFO = 'info'
}

export type MessageTypeKeys = keyof typeof MessageType;

export default MessageType;
