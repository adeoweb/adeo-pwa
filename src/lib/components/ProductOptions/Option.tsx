import React, { FunctionComponent, useMemo } from 'react';
import { useOption } from '@magento/peregrine/lib/talons/ProductOptions/useOption';
import { TConfigurableProductOption } from 'src/lib/types/graphql/Product';
import getItemKey from 'src/lib/components/ProductOptions/utils/getItemKey';
import getListComponent from 'src/lib/components/ProductOptions/utils/getListComponent';

type TProductOptionProps = {
    option: TConfigurableProductOption;
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

    const ValueList = useMemo(() => getListComponent(attributeCode), [
        attributeCode
    ]);

    if (!attributeCode || !attributeId || !label || !values) {
        return null;
    }

    return (
        <div className="product-single-filter">
            <label>{label}</label>
            <ValueList
                getItemKey={getItemKey}
                selectedValue={initialSelection}
                items={values}
                onSelectionChange={handleSelectionChange}
            />
        </div>
    );
};

export default Option;
