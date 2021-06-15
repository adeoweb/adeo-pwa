type TSortableOption = {
    sort_order?: number;
};

export const optionSort = <T extends TSortableOption>(a?: T, b?: T): number => {
    if (!a?.sort_order || !b?.sort_order) {
        return 0;
    }

    return a.sort_order - b.sort_order;
};
