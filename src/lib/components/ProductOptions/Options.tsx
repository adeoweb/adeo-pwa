import React, { FunctionComponent } from 'react';
import { TConfigurableProductOptions } from 'src/lib/types/graphql/Product';
import { TSelectedConfigurableOption } from 'src/lib/types/graphql/CartItem';
import { useOptions } from '@magento/peregrine/lib/talons/ProductOptions/useOptions';
import Option from './Option';

type TProductOptionsProps = {
    onSelectionChange: (optionId: string, selection: number) => void;
    options: TConfigurableProductOptions[];
    selectedValues?: TSelectedConfigurableOption[];
};

const Options: FunctionComponent<TProductOptionsProps> = ({
    onSelectionChange,
    options,
    selectedValues = []
}) => {
    const { handleSelectionChange, selectedValueMap } = useOptions({
        onSelectionChange,
        selectedValues
    });

    return (
        <div className="product-filters-container">
            {options.map(option => {
                const selectedValue = option.label
                    ? selectedValueMap.get(option.label)
                    : undefined;

                return (
                    <Option
                        option={option}
                        key={option.attribute_id}
                        onSelectionChange={handleSelectionChange}
                        selectedValue={selectedValue}
                    />
                );
            })}
        </div>
    );
};

export default Options;
