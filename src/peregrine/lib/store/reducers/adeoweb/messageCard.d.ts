export interface IMessageBlocks {
    error: string[];
    warning: string[];
    success: string[];
    info: string[];
}

export type TMessageCardState = {
    messageBlocks: IMessageBlocks;
};
