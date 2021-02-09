import { useLazyQuery } from '@apollo/react-hooks';
import { useCallback, useEffect, useState } from 'react';
import { useProductFilters } from 'src/peregrine/lib/talons/adeoweb/Product/useProductFilters';
import { usePageSize } from 'src/peregrine/lib/talons/adeoweb/Product/usePageSize';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

const CATEGORY_ATTRIBUTE_CODE = 'category_id';

export const useCategoryContent = props => {
    const {
        query,
        currentPage,
        categoryId,
        sortField,
        sortDir,
        setTotalPages
    } = props;

    const [activeCategory, setActiveCategory] = useState(null);
    const {
        getFilterQuery,
        activeFilters,
        setFilter,
        toggleFilter,
        setActiveFilters
    } = useProductFilters();

    const handleToggleFilter = useCallback(
        (attributeCode, value) => {
            if (attributeCode === CATEGORY_ATTRIBUTE_CODE) {
                const values = activeFilters.get(attributeCode) || [];
                const valueIndex = values.indexOf(value);
                const newValues = [];

                if (valueIndex === -1) {
                    newValues.push(value);
                } else {
                    newValues.push(activeCategory.toString());
                }

                setFilter(attributeCode, newValues);
            } else {
                toggleFilter(attributeCode, value);
            }
        },
        [toggleFilter, setFilter, activeFilters, activeCategory]
    );

    const { pageSize, setPageSize } = usePageSize();
    const [data, setData] = useState(null);
    const [runQuery, queryResponse] = useLazyQuery(query, {
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

    let category = null;
    if (data && data.categoryList && Array.isArray(data.categoryList)) {
        const [firstCategory] = data.categoryList;
        category = firstCategory;
    }

    let products = [];
    if (data && data.products && Array.isArray(data.products.items)) {
        products = data.products.items;
    }

    let filters = [];
    if (data && data.products && Array.isArray(data.products.aggregations)) {
        filters = data.products.aggregations;
    }

    let totalPages = 0;
    if (
        data &&
        data.products &&
        data.products.page_info &&
        data.products.page_info.total_pages
    ) {
        totalPages = data.products.page_info.total_pages;
    }

    let totalCount = 0;
    if (data && data.products && data.products.total_count) {
        totalCount = data.products.total_count;
    }

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
        error,
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
