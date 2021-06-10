import React, { FunctionComponent, useMemo } from 'react';
import { useOption } from '@magento/peregrine/lib/talons/ProductOptions/useOption';
import { TConfigurableProductOptions } from 'src/lib/types/graphql/Product';
import getItemKey from 'src/lib/components/ProductOptions/utils/getItemKey';
import getListComponent from 'src/lib/components/ProductOptions/utils/getListComponent';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TProductOptionProps = {
    option: TConfigurableProductOptions;
    onSelectionChange: (optionId: string, selection: number) => void;
    selectedValue?: string;
};

const Option: FunctionComponent<TProductOptionProps> = ({
    option: {
        attribute_code: attributeCode,
        attribute_id: attributeId,
        label,
        values
    },
    onSelectionChange,
    selectedValue
}) => {
    const { handleSelectionChange, initialSelection } = useOption({
        attribute_id: attributeId,
        label,
        onSelectionChange,
        selectedValue,
        values
    });
    const optionValues = filterOutNullableValues(values);
    const ValueList = useMemo(() => getListComponent(attributeCode), [
        attributeCode
    ]);

    if (!attributeCode || !attributeId || !label || !optionValues.length) {
        return null;
    }

    return (
        <div className="product-single-filter">
            <label>{label}</label>
            <ValueList
                getItemKey={getItemKey}
                selectedValue={initialSelection}
                items={optionValues}
                onSelectionChange={handleSelectionChange}
            />
        </div>
    );
};

export default Option;
