import { DocumentNode } from 'graphql';

import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseSearchPageProps = {
    query: DocumentNode;
    currentPage: number;
    sortField: ProductSortFields;
    sortDir: ProductSortDirections;
    setTotalPages: (count: number) => void;
};

type TUseSearchPage = {
    isLoading: boolean;
    error: Error | null;
    products: TProduct[];
    filters: TAggregation[];
    totalCount: number;
    inputText: string;
    activeFilters: Map<string, string[]>;
    setFilter: (attributeCode: string, values: string[]) => void;
    toggleFilter: (attributeCode: string, value: string) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
};

export function useSearchPage(props: TUseSearchPageProps): TUseSearchPage;
