import { handleActions } from 'redux-actions';

import actions from '../../actions/adeoweb/messageCard';

export const name = 'messageCard';

const initialState = {
    messageBlocks: {
        error: [],
        warning: [],
        success: [],
        info: []
    }
};

const reducerMap = {
    [actions.addMessage]: (state, { payload: { type, message } }) => {
        const existingMessages = state.messageBlocks[type];

        return {
            ...state,
            messageBlocks: {
                ...state.messageBlocks,
                [type]: [...existingMessages, message]
            }
        };
    },
    [actions.addMultipleMessages]: (state, { payload: { messages } }) => {
        // To preserve specific message order, destructure initial state
        const newMessageBlocks = { ...initialState.messageBlocks };
        Object.keys(messages).forEach(key => {
            const existingMessages = state.messageBlocks[key] || [];
            newMessageBlocks[key] = [...existingMessages, ...messages[key]];
        });

        return {
            ...state,
            messageBlocks: newMessageBlocks
        };
    },
    [actions.clearBlock]: (state, { payload }) => {
        return {
            ...state,
            messageBlocks: {
                ...state.messageBlocks,
                [payload.type]: []
            }
        };
    },
    [actions.clearAllMessages]: state => {
        return {
            ...state,
            messageBlocks: {
                ...initialState.messageBlocks
            }
        };
    }
};

export default handleActions(reducerMap, initialState);
