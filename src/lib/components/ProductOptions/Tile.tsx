import React, { FunctionComponent } from 'react';

import { useTile } from '@magento/peregrine/lib/talons/ProductOptions/useTile';

import { TConfigurableProductOptionsValues } from 'src/lib/types/graphql/Product';

type TTileProps = {
    isSelected: boolean;
    item: TConfigurableProductOptionsValues;
    onClick: (selection: number) => void;
};

const Tile: FunctionComponent<TTileProps> = ({
    isSelected,
    item: { label, value_index },
    onClick
}) => {
    const talonProps = useTile({
        onClick,
        value_index
    });

    const { handleClick } = talonProps;

    return (
        <li className={isSelected ? 'active' : ''}>
            <button onClick={handleClick}>{label}</button>
        </li>
    );
};

export default Tile;
