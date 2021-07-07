import { DocumentNode } from 'graphql';

import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseCategoryContentProps = {
    query: DocumentNode;
    currentPage: number;
    categoryId: number;
    sortField: ProductSortFields;
    sortDir: ProductSortDirections;
    setTotalPages: (count: number) => void;
};

type TUseCategoryContent = {
    error: null | Error;
    loading: boolean;
    category: TCategoryInterface | null;
    products: TProduct[];
    filters: TAggregation[];
    totalCount: number;
    activeFilters: Map<string, string[]>;
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
};

export function useCategoryContent(
    props: TUseCategoryContentProps
): TUseCategoryContent;
