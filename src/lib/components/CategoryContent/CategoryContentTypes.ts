import { IProductsSortControl } from 'src/lib/components/ProductsSort';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { TProduct } from 'src/lib/types/graphql/Product';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';

export interface ICategoryPageControl {
    currentPage: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export interface ICategoryFilterControl {
    filters: TAggregation[];
    activeFilters: Map<string, string[]>;
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
}

export interface ICategoryContentProps {
    categoryId: number;
    category: TCategoryInterface;
    pageControl: ICategoryPageControl;
    pageSize: number;
    sortControl: IProductsSortControl;
    products: TProduct[];
    totalCount: number;
    filterControl: ICategoryFilterControl;
    isLoading: boolean;
}
