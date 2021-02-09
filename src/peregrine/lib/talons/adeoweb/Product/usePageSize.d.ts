type TUsePageSize = {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
};

export function usePageSize(): TUsePageSize;
