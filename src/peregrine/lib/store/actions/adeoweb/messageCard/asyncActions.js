import actions from './actions';

export const addMessage = payload => async dispatch =>
    dispatch(actions.addMessage(payload));

export const addMultipleMessages = messages => async dispatch => {
    try {
        const sortedMessages = sortMessages(messages);
        dispatch(actions.addMultipleMessages({ messages: sortedMessages }));
    } catch (e) {
        dispatch(actions.addMultipleMessages({ messages: {} }));
    }
};

export const clearBlock = payload => async dispatch =>
    dispatch(actions.clearBlock(payload));

export const clearAllMessages = payload => async dispatch =>
    dispatch(actions.clearAllMessages(payload));

const sortMessages = messages => {
    const sortedMessages = {};
    messages.forEach(({ type, message }) => {
        if (sortedMessages[type]) {
            sortedMessages[type].push(message);
        } else {
            sortedMessages[type] = [message];
        }
    });
    return sortedMessages;
};
