import React, { FunctionComponent, useMemo } from 'react';
import Tile from 'src/lib/components/ProductOptions/Tile';
import { TValueListProps } from 'src/lib/components/ProductOptions/ProductOptionsTypes';

const TileList: FunctionComponent<TValueListProps> = ({
    getItemKey,
    selectedValue,
    items,
    onSelectionChange
}) => {
    const tiles = useMemo(
        () =>
            items.map(item => {
                const isSelected =
                    Boolean(selectedValue.label) &&
                    item.label === selectedValue.label;

                return (
                    <Tile
                        key={getItemKey(item)}
                        isSelected={isSelected}
                        item={item}
                        onClick={onSelectionChange}
                    />
                );
            }),
        [getItemKey, selectedValue.label, items, onSelectionChange]
    );

    return <ul className="config-size-list">{tiles}</ul>;
};

TileList.displayName = 'TileList';

export default TileList;
