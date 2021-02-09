import React, { FunctionComponent } from 'react';
import { TSelectedCustomizableOption } from 'src/lib/types/graphql/CartItem';
import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';

type TSelectedCustomOptionsProps = {
    options: TSelectedCustomizableOption[];
};

const SelectedCustomOptions: FunctionComponent<TSelectedCustomOptionsProps> = ({
    options
}) => {
    const sortedOptions = options.sort(optionSort);

    return sortedOptions.length ? (
        <ul className="product-options">
            {sortedOptions.map(({ id, label, values }) => {
                if (!Array.isArray(values) || !values.length) {
                    return null;
                }

                const { id: valueId, value, label: valueLabel } = values[0];
                const key = `${id}-${valueId}`;
                let optionText = '';
                if (values.length === 1) {
                    optionText = valueLabel || value;
                } else {
                    optionText = values.map(item => item.label).join(', ');
                }

                return (
                    <li key={key}>
                        <div>
                            <strong>{label}</strong>: {optionText}
                        </div>
                    </li>
                );
            })}
        </ul>
    ) : null;
};

export default SelectedCustomOptions;
