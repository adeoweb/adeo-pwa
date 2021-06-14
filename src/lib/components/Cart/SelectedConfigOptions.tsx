import React, { FunctionComponent } from 'react';

import { TSelectedConfigurableOption } from 'src/lib/types/graphql/CartItem';

type TSelectedConfigOptionsProps = {
    options: TSelectedConfigurableOption[];
};

const SelectedConfigOptions: FunctionComponent<TSelectedConfigOptionsProps> = ({
    options
}) => {
    return options.length ? (
        <ul className="product-options">
            {options.map(
                ({
                    id,
                    option_label: optionLabel,
                    value_label: valueLabel
                }) => (
                    <li key={id}>
                        <div>
                            {optionLabel}: {valueLabel}
                        </div>
                    </li>
                )
            )}
        </ul>
    ) : null;
};

export default SelectedConfigOptions;
