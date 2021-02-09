import React, { FunctionComponent } from 'react';
import { TProductFilterProps } from './ProductFilterTypes';

const ProductFilterList: FunctionComponent<TProductFilterProps> = ({
    filter,
    isActive,
    toggleOption
}) => {
    const { options } = filter;

    if (!options || !options.length) {
        return null;
    }

    const getIcon = (value: string) =>
        isActive(value) ? (
            <i className="icon-check" />
        ) : (
            <i className="icon-check-empty" />
        );

    return (
        <ul className="cat-list">
            {options.map(option => {
                const { value, count, label } = option;
                const icon = getIcon(value);
                const text = `${label}${count ? ' (' + count + ')' : ''}`;

                return (
                    <li key={value}>
                        <button onClick={() => toggleOption(value)}>
                            {icon}
                            <span dangerouslySetInnerHTML={{ __html: text }} />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

ProductFilterList.displayName = 'ProductFilterList';

export default ProductFilterList;
