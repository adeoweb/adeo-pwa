import { FunctionComponent } from 'react';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { ProductFilterType, TProductFilterProps } from '../ProductFilterTypes';
import getFilterType from './getFilterType';
import ProductFilterList from '../ProductFilterList';
import ProductFilterRadio from '../ProductFilterRadio';
import ProductFilterSwatch from '../ProductFilterSwatch';

const getFilterComponent = (
    filter: TAggregation
): FunctionComponent<TProductFilterProps> | null => {
    const type = getFilterType(filter);

    switch (type) {
        case ProductFilterType.List:
            return ProductFilterList;
        case ProductFilterType.Radio:
            return ProductFilterRadio;
        // TODO: implement range filter
        // case ProductFilterType.Range:
        //     return ProductFilterRange;
        case ProductFilterType.Swatch:
            return ProductFilterSwatch;
        default:
            return null;
    }
};

export default getFilterComponent;
