import React, { FunctionComponent } from 'react';
import { useSwatch } from '@magento/peregrine/lib/talons/ProductOptions/useSwatch';
import { TConfigurableProductOptionsValues } from 'src/lib/types/graphql/Product';

type TSwatchProps = {
    isSelected: boolean;
    item: TConfigurableProductOptionsValues;
    onClick: (selection: number) => void;
};

const Swatch: FunctionComponent<TSwatchProps> = ({
    isSelected = false,
    item: { label, value_index },
    onClick
}) => {
    const talonProps = useSwatch({
        onClick,
        value_index
    });

    const { handleClick } = talonProps;

    const style = {
        // TODO: temp, representational solution
        // refactor to use actual color code/image from backend
        backgroundColor: (label || '').toLowerCase()
    };

    return (
        <li className={isSelected ? 'active' : ''}>
            <button style={style} onClick={handleClick} title={label} />
        </li>
    );
};

export default Swatch;
