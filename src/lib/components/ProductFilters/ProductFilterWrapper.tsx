import React, { FunctionComponent, useCallback, useState } from 'react';

import { TAggregation } from 'src/lib/types/graphql/Aggregation';

import { getFilterComponent } from './utils';

type TProductFilterWrapperProps = {
    filter: TAggregation;
    activeOptions: string[];
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
};

const ProductFilterWrapper: FunctionComponent<TProductFilterWrapperProps> = ({
    filter,
    activeOptions,
    setFilter,
    toggleFilter
}) => {
    const { label, attribute_code: attributeCode, options } = filter;
    const [isExpanded, setIsExpanded] = useState(true);
    const setOptions = useCallback(
        (values: string[]) => {
            setFilter(attributeCode, values);
        },
        [attributeCode, setFilter]
    );
    const toggleOption = useCallback(
        (value: string) => {
            toggleFilter(attributeCode, value);
        },
        [attributeCode, toggleFilter]
    );
    const isActive = useCallback(
        (value: string) => {
            return activeOptions.indexOf(value) !== -1;
        },
        [activeOptions]
    );

    if (!options || !options.length) {
        return null;
    }

    const filterProps = {
        filter,
        isActive,
        setOptions,
        toggleOption
    };
    const ProductFilter = getFilterComponent(filter);

    if (!ProductFilter) {
        return null;
    }

    return (
        <div className="widget">
            <h3 className="widget-title">
                <button
                    aria-expanded={isExpanded}
                    className={!isExpanded ? 'collapsed' : ''}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {label}
                </button>
            </h3>

            <div className={`collapse${isExpanded ? ' show' : ''}`}>
                <div className="widget-body">
                    <ProductFilter {...filterProps} />
                </div>
            </div>
        </div>
    );
};

export default ProductFilterWrapper;
