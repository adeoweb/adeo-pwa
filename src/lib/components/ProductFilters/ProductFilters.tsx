import React, { Fragment, FunctionComponent } from 'react';

import { TAggregation } from 'src/lib/types/graphql/Aggregation';

import ProductFilterWrapper from './ProductFilterWrapper';

export type TProductFiltersProps = {
    filters: TAggregation[];
    activeFilters: Map<string, string[]>;
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
};

const ProductFilters: FunctionComponent<TProductFiltersProps> = ({
    filters,
    activeFilters,
    setFilter,
    toggleFilter
}) => {
    if (!filters.length) {
        return null;
    }

    return (
        <Fragment>
            {filters.map(filter => {
                const { attribute_code: attributeCode } = filter;
                const filterProps = {
                    filter: filter,
                    activeOptions: activeFilters.get(attributeCode) || [],
                    setFilter,
                    toggleFilter
                };
                return (
                    <ProductFilterWrapper
                        key={attributeCode}
                        {...filterProps}
                    />
                );
            })}
        </Fragment>
    );
};

export default ProductFilters;
