import { TSimpleProduct } from 'src/lib/types/graphql/Product';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';

export type TProductSearch = TSimpleProduct;

export type TProductsSearch = {
    aggregations: TAggregation[];
    items: TProductSearch[];
    total_count: number;
};
