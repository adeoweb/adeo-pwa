import { IUseMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';

interface TMockUseMessageCard extends IUseMessageCard {
    addMessage: any;
    addMultipleMessages: any;
    clearBlock: any;
    clearAllMessages: any;
}

const mockMethods = {
    addMessage: () => {},
    addMultipleMessages: () => {},
    clearBlock: () => {},
    clearAllMessages: () => {}
};

export const mockWithMessages: TMockUseMessageCard = {
    messageBlocks: {
        error: ['test message', 'test message', 'test message'],
        warning: ['test message', 'test message'],
        success: ['test message'],
        info: []
    },
    ...mockMethods
};

export const mockNoMessages: TMockUseMessageCard = {
    messageBlocks: {
        error: [],
        warning: [],
        success: [],
        info: []
    },
    ...mockMethods
};
