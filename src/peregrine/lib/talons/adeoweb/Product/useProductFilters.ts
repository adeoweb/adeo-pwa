import { useCallback, useState } from 'react';

type TUseProductFiltersProps = {
    initialValues?: Map<string, string[]>;
};

type TUseProductFilters = {
    getFilterQuery: () => Map<string, string[]>;
    activeFilters: Map<string, string[]>;
    setActiveFilters: (filters: Map<string, string[]>) => void;
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
};

export const useProductFilters = (
    props?: TUseProductFiltersProps
): TUseProductFilters => {
    const [activeFilters, setActiveFilters] = useState(
        props?.initialValues || new Map()
    );

    const getFilterQuery = useCallback(() => {
        const filter = new Map<string, string[]>();

        activeFilters.forEach((values, key) => {
            if (values.length === 1) {
                filter[key] = {
                    eq: values[0]
                };
            } else {
                filter[key] = {
                    in: values
                };
            }
        });

        return filter;
    }, [activeFilters]);

    const toggleFilter = useCallback(
        (attributeCode, value) => {
            const newActiveFilters = new Map(activeFilters);
            const values = newActiveFilters.get(attributeCode) || [];
            const valueIndex = values.indexOf(value);

            if (valueIndex !== -1) {
                values.splice(valueIndex, 1);
            } else {
                values.push(value);
            }

            if (values.length) {
                newActiveFilters.set(attributeCode, values);
            } else {
                newActiveFilters.delete(attributeCode);
            }

            setActiveFilters(newActiveFilters);
        },
        [activeFilters, setActiveFilters]
    );

    const setFilter = useCallback(
        (attributeCode, values = []) => {
            const newActiveFilters = new Map(activeFilters);

            if (values.length) {
                newActiveFilters.set(attributeCode, values);
            } else {
                newActiveFilters.delete(attributeCode);
            }

            setActiveFilters(newActiveFilters);
        },
        [activeFilters, setActiveFilters]
    );

    return {
        getFilterQuery,
        activeFilters,
        setFilter,
        toggleFilter,
        setActiveFilters
    };
};
