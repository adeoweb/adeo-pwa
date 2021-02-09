export enum ProductSortFields {
    Name = 'name',
    Position = 'position',
    Price = 'price',
    Relevance = 'relevance'
}

export enum ProductSortDirections {
    Ascending = 'ASC',
    Descending = 'DESC'
}

export const DEFAULT_PRODUCT_SORT_FIELD = ProductSortFields.Relevance;
export const DEFAULT_PRODUCT_SORT_DIR = ProductSortDirections.Descending;
export const SHOW_PRICE_TIERS = true;
export const PRODUCT_MINIMUM_QUANTITY = 1;
