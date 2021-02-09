export type TUseLayoutModes = {
    layoutMode: string;
    setGrid: () => void;
    setList: () => void;
};

export function useLayoutModes(): TUseLayoutModes;
