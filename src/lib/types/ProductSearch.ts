import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TSimpleProduct } from 'src/lib/types/graphql/Product';

export type TProductSearch = TSimpleProduct;

export type TProductsSearch = {
    aggregations: TAggregation[];
    items: TProductSearch[];
    total_count: number;
};
