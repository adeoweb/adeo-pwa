import { FunctionComponent } from 'react';

import SwatchList from 'src/lib/components/ProductOptions/SwatchList';
import TileList from 'src/lib/components/ProductOptions/TileList';
import getOptionType from 'src/lib/components/ProductOptions/utils/getOptionType';

import { TValueListProps } from '../ProductOptionsTypes';

const DEFAULT_LIST_COMPONENT = TileList;

const getListComponent = (
    attributeCode?: string
): FunctionComponent<TValueListProps> => {
    if (!attributeCode) {
        return DEFAULT_LIST_COMPONENT;
    }

    // TODO: get an explicit field from the API
    // that identifies an attribute as a swatch
    const optionType = getOptionType(attributeCode);
    switch (optionType) {
        case 'swatch': {
            return SwatchList;
        }
        default: {
            return DEFAULT_LIST_COMPONENT;
        }
    }
};

export default getListComponent;
