export type TCatalogAsyncActions = {
    setCurrentPage: (payload: number) => Promise<void>;
    setPrevPageTotal: (payload: number) => Promise<void>;
};
