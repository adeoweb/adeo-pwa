import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchParam } from '@magento/peregrine/lib/hooks/useSearchParam';

import { usePageSize } from 'src/peregrine/lib/talons/adeoweb/Product/usePageSize';
import { useProductFilters } from 'src/peregrine/lib/talons/adeoweb/Product/useProductFilters';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useSearchPage = props => {
    const { query, setTotalPages, currentPage, sortField, sortDir } = props;
    const location = useLocation();
    const inputText = getSearchParam('query', location);
    const { getFilterQuery, activeFilters, setFilter, toggleFilter } =
        useProductFilters();

    const { pageSize, setPageSize } = usePageSize();
    const [data, setData] = useState(null);
    const [runQuery, queryResponse] = useLazyQuery(query, {
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
