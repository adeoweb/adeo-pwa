import React, { FunctionComponent } from 'react';

import { optionSort } from 'src/lib/components/CustomOptions/utils/optionSort';
import { TSelectedCustomizableOption } from 'src/lib/types/graphql/CartItem';

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

                const optionValue = values[0];

                if (!optionValue) {
                    return null;
                }

                const key = `${id}-${optionValue?.id}`;
                let optionText = '';

                if (values.length === 1) {
                    optionText = optionValue.label;
                } else {
                    optionText = values
                        .map(item => item?.value && item?.label)
                        .join(', ');
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
