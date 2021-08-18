import { DocumentNode } from 'graphql';

import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';
import {
    ProductSearchQuery,
    ProductSearchQueryVariables
} from 'src/lib/queries/productSearch.generated';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TProduct } from 'src/lib/types/graphql/Product';
import { usePageSize } from 'src/peregrine/lib/talons/adeoweb/Product/usePageSize';
import { useProductFilters } from 'src/peregrine/lib/talons/adeoweb/Product/useProductFilters';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseSearchPageProps = {
    query: DocumentNode;
    currentPage: number;
    sortField: ProductSortFields;
    sortDir: ProductSortDirections;
    setTotalPages: (count: number) => void;
};

type TUseSearchPage = {
    isLoading: boolean;
    error?: Error;
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

export const useSearchPage = (props: TUseSearchPageProps): TUseSearchPage => {
    const { query, setTotalPages, currentPage, sortField, sortDir } = props;
    const location = useLocation();
    const inputText = getSearchParam('query', location);
    const { getFilterQuery, activeFilters, setFilter, toggleFilter } =
        useProductFilters({});

    const { pageSize, setPageSize } = usePageSize();
    const [data, setData] = useState<ProductSearchQuery | null>(null);
    const [runQuery, queryResponse] = useLazyQuery<
        ProductSearchQuery,
        ProductSearchQueryVariables
    >(query, {
        fetchPolicy: fetchPolicy.queries.default,
        onCompleted: data => {
            setData(data);
        }
    });

    useEffect(() => {
        runQuery({
            variables: {
                currentPage: Number(currentPage),
                onServer: false,
                pageSize: Number(pageSize),
                sort: {
                    [sortField]: sortDir
                },
                // @ts-expect-error
                filter: getFilterQuery(),
                inputText
            }
        });
    }, [
        runQuery,
        currentPage,
        pageSize,
        sortField,
        sortDir,
        getFilterQuery,
        activeFilters,
        inputText
    ]);

    const { loading: isLoading, error } = queryResponse;

    const products = filterOutNullableValues(
        data?.products?.items
    ) as unknown as TProduct[];

    const filters = filterOutNullableValues(data?.products?.aggregations);

    const totalPages = data?.products?.page_info?.total_pages ?? 0;

    let totalCount = 0;
    if (data && data.products && data.products.total_count) {
        totalCount = data.products.total_count;
    }

    useEffect(() => {
        setTotalPages(totalPages);
    }, [setTotalPages, totalPages]);

    return {
        isLoading,
        error,
        products,
        filters,
        totalCount,
        inputText,
        activeFilters,
        setFilter,
        toggleFilter,
        pageSize,
        setPageSize
    };
};
