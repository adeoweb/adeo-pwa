import { DocumentNode } from 'graphql';

import { useLazyQuery } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';

import {
    ProductSortDirections,
    ProductSortFields
} from 'src/lib/constants/product';
import {
    GetCategoryContentQuery,
    GetCategoryContentQueryVariables
} from 'src/lib/queries/getCategoryContent.generated';
import { TAggregation } from 'src/lib/types/graphql/Aggregation';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { TProduct } from 'src/lib/types/graphql/Product';
import { usePageSize } from 'src/peregrine/lib/talons/adeoweb/Product/usePageSize';
import { useProductFilters } from 'src/peregrine/lib/talons/adeoweb/Product/useProductFilters';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

const CATEGORY_ATTRIBUTE_CODE = 'category_id';

type TUseCategoryContentProps = {
    query: DocumentNode;
    currentPage: number;
    categoryId: number;
    sortField: ProductSortFields;
    sortDir: ProductSortDirections;
    setTotalPages: (count: number) => void;
};

type TUseCategoryContent = {
    error?: string;
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

export const useCategoryContent = (
    props: TUseCategoryContentProps
): TUseCategoryContent => {
    const {
        query,
        currentPage,
        categoryId,
        sortField,
        sortDir,
        setTotalPages
    } = props;

    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const {
        getFilterQuery,
        activeFilters,
        setFilter,
        toggleFilter,
        setActiveFilters
    } = useProductFilters();

    const handleToggleFilter = useCallback(
        (attributeCode: string, value: string) => {
            if (attributeCode === CATEGORY_ATTRIBUTE_CODE) {
                const values = activeFilters.get(attributeCode) || [];
                const valueIndex = values.indexOf(value);
                const newValues: string[] = [];

                if (valueIndex === -1) {
                    newValues.push(value);
                } else {
                    if (activeCategory) {
                        newValues.push(activeCategory.toString());
                    }
                }

                setFilter(attributeCode, newValues);
            } else {
                toggleFilter(attributeCode, value);
            }
        },
        [toggleFilter, setFilter, activeFilters, activeCategory]
    );

    const { pageSize, setPageSize } = usePageSize();
    const [data, setData] = useState<GetCategoryContentQuery | null>(null);
    const [runQuery, queryResponse] = useLazyQuery<
        GetCategoryContentQuery,
        GetCategoryContentQueryVariables
    >(query, {
        fetchPolicy: fetchPolicy.queries.default,
        onCompleted: data => {
            setData(data);
        }
    });

    // Run the category query immediately and whenever its variable values change.
    useEffect(() => {
        runQuery({
            variables: {
                currentPage: Number(currentPage),
                id: String(activeCategory),
                onServer: false,
                pageSize: Number(pageSize),
                sort: {
                    [sortField]: sortDir
                },
                // @ts-expect-error
                filter: getFilterQuery()
            }
        });
    }, [
        currentPage,
        activeCategory,
        pageSize,
        sortField,
        sortDir,
        runQuery,
        getFilterQuery,
        activeFilters,
        setActiveFilters
    ]);

    const { loading, error } = queryResponse;
    const [firstCategory] = filterOutNullableValues(data?.categoryList);

    const category = firstCategory;
    const products = filterOutNullableValues(
        data?.products?.items
    ) as unknown as TProduct[];
    const filters = filterOutNullableValues(data?.products?.aggregations);

    const totalPages = data?.products?.page_info?.total_pages ?? 0;
    const totalCount = data?.products?.total_count ?? 0;

    useEffect(() => {
        setTotalPages(totalPages);
    }, [setTotalPages, totalPages]);

    useEffect(() => {
        setActiveCategory(categoryId);
        setActiveFilters(
            new Map([[CATEGORY_ATTRIBUTE_CODE, [categoryId.toString()]]])
        );
    }, [categoryId, setActiveCategory, setActiveFilters]);

    return {
        loading,
        error: error?.message,
        category,
        products,
        filters,
        totalCount,
        activeFilters,
        setFilter,
        toggleFilter: handleToggleFilter,
        pageSize,
        setPageSize
    };
};
