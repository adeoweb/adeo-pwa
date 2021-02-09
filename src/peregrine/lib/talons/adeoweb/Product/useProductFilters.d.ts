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

export function useProductFilters(
    props: TUseProductFiltersProps
): TUseProductFilters;
