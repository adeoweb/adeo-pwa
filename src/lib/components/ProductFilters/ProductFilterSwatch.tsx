import React, { FunctionComponent } from 'react';

import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

import { TProductFilterProps } from './ProductFilterTypes';

const ProductFilterSwatch: FunctionComponent<TProductFilterProps> = ({
    filter,
    isActive,
    toggleOption
}) => {
    const options = filterOutNullableValues(filter.options);

    if (!options || !options.length) {
        return null;
    }

    return (
        <ul className="config-swatch-list">
            {options.map(option => {
                const { value, count, label } = option;
                const style = {
                    // TODO: temp, representational solution
                    // refactor to use actual color code/image from backend
                    backgroundColor: (label || '').toLowerCase()
                };
                const text = `${label}${count ? ' (' + count + ')' : ''}`;

                return (
                    <li key={value} className={isActive(value) ? 'active' : ''}>
                        <button onClick={() => toggleOption(value)}>
                            <span className="color-panel" style={style} />
                            <span>{text}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

ProductFilterSwatch.displayName = 'ProductFilterSwatch';

export default ProductFilterSwatch;
