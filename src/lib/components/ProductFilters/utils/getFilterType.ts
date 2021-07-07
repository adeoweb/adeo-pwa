import { TAggregation } from 'src/lib/types/graphql/Aggregation';

import { ProductFilterType } from '../ProductFilterTypes';

const getFilterType = (filter: TAggregation): ProductFilterType => {
    // TODO: add field to identify range filters?
    if (filter.attribute_code === 'price') {
        return ProductFilterType.Range;
    }

    // TODO: add field to identify swatch filters?
    if (filter.attribute_code === 'color') {
        return ProductFilterType.Swatch;
    }

    // TODO: add field to identify radio filters?
    if (
        filter.options &&
        filter.options.length === 2 &&
        filter.options[0]?.value === '0' &&
        filter.options[1]?.value === '1'
    ) {
        return ProductFilterType.Radio;
    }

    return ProductFilterType.List;
};

export default getFilterType;
