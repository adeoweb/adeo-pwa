const filterOutNullableValues = <T extends Record<string, unknown>>(
    data: (T | undefined)[] | undefined,
    filterByKey?: keyof T
): T[] => {
    return (
        data?.filter((item): item is T =>
            filterByKey ? item?.[filterByKey] != null : item != null
        ) ?? []
    );
};

export default filterOutNullableValues;
