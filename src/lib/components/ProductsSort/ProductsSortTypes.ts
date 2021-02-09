import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';

export interface IProductsSortControl {
    field: ProductSortFields;
    dir: ProductSortDirections;
    setSort: (args: IProductSetSortArgs) => void;
}

export interface IProductSetSortArgs {
    field?: ProductSortFields;
    dir?: ProductSortDirections;
}

export interface IProductSort {
    name?: ProductSortDirections;
    position?: ProductSortDirections;
    price?: ProductSortDirections;
    relevance?: ProductSortDirections;
}
