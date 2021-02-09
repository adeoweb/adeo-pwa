import React, { FunctionComponent, useEffect } from 'react';
import { usePagination } from '@magento/peregrine/lib/hooks/usePagination';
import { FullPageLoadingIndicator } from '../../components/LoadingIndicator';
import GET_CATEGORY_CONTENT from '../../queries/getCategoryContent.graphql';
import CategoryContent, {
    ICategoryPageControl
} from 'src/lib/components/CategoryContent';
import NoProductsFound from 'src/lib/components/NoProductsFound';
import { Meta } from '../../components/Head';
import { useProductsSort } from 'src/peregrine/lib/talons/adeoweb/Product/useProductsSort';
import { useCategoryContent } from 'src/peregrine/lib/talons/adeoweb/CategoryContent/useCategoryContent';
import { ICategoryFilterControl } from 'src/lib/components/CategoryContent/CategoryContentTypes';
import { ROOT_CATEGORY_ID } from 'src/lib/constants/category';

interface ICategoryProps {
    id: number;
}

const Category: FunctionComponent<ICategoryProps> = ({
    id = ROOT_CATEGORY_ID
}) => {
    const [paginationValues, paginationApi] = usePagination();
    const { currentPage, totalPages } = paginationValues;
    const { setCurrentPage, setTotalPages } = paginationApi;
    const sortControl = useProductsSort();
    const { field, dir } = sortControl;
    const {
        loading,
        error,
        category,
        products,
        totalCount,
        filters,
        activeFilters,
        setFilter,
        toggleFilter,
        pageSize
    } = useCategoryContent({
        query: GET_CATEGORY_CONTENT,
        currentPage,
        categoryId: id,
        sortField: field,
        sortDir: dir,
        setTotalPages
    });

    const pageControl: ICategoryPageControl = {
        currentPage,
        setPage: setCurrentPage,
        totalPages
    };

    const filterControl: ICategoryFilterControl = {
        filters,
        activeFilters,
        setFilter,
        toggleFilter
    };

    // If we get an error after loading we should try to reset to page 1.
    // If we continue to have errors after that, render an error message.
    useEffect(() => {
        if (error && !loading && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [currentPage, error, loading, setCurrentPage]);

    if (error && currentPage === 1 && !loading) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Data Fetch Error</div>;
    }

    // Show the loading indicator until data has been fetched.
    if (loading && !category) {
        return <FullPageLoadingIndicator />;
    }

    if (!Array.isArray(products) || !products.length) {
        return <NoProductsFound />;
    }

    let content = <div>Category not found!</div>;
    if (category) {
        content = (
            <CategoryContent
                categoryId={id}
                category={category}
                pageControl={pageControl}
                pageSize={pageSize}
                sortControl={sortControl}
                products={products}
                totalCount={totalCount}
                filterControl={filterControl}
                isLoading={loading}
            />
        );
    }

    let meta: JSX.Element | null = null;
    if (category && category.meta_description) {
        meta = <Meta name="description" content={category.meta_description} />;
    }

    return (
        <>
            {meta}
            {content}
        </>
    );
};

export default Category;
