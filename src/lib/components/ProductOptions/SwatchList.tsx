import React, { FunctionComponent, useMemo } from 'react';
import Swatch from './Swatch';
import { TValueListProps } from 'src/lib/components/ProductOptions/ProductOptionsTypes';

const SwatchList: FunctionComponent<TValueListProps> = ({
    getItemKey,
    selectedValue,
    items,
    onSelectionChange
}) => {
    const swatches = useMemo(
        () =>
            items.map(item => {
                const isSelected =
                    Boolean(selectedValue.label) &&
                    item.label === selectedValue.label;

                return (
                    <Swatch
                        key={getItemKey(item)}
                        isSelected={isSelected}
                        item={item}
                        onClick={onSelectionChange}
                    />
                );
            }),
        [getItemKey, selectedValue.label, items, onSelectionChange]
    );

    return <ul className="config-swatch-list">{swatches}</ul>;
};

SwatchList.displayName = 'SwatchList';

export default SwatchList;
