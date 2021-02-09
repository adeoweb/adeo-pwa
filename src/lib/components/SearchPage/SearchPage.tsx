import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { useSearchPage } from 'src/peregrine/lib/talons/adeoweb/SearchPage/useSearchPage';
import PRODUCT_SEARCH from 'src/lib/queries/productSearch.graphql';
import { FullPageLoadingIndicator } from 'src/lib/components/LoadingIndicator';
import { usePagination } from '@magento/peregrine/lib/hooks/usePagination';
import { useProductsSort } from 'src/peregrine/lib/talons/adeoweb/Product/useProductsSort';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsSort from 'src/lib/components/ProductsSort';
import ProductResults from 'src/lib/components/ProductResults';
import LayoutModes from 'src/lib/components/LayoutModes';
import { LAYOUT_MODE_GRID } from 'src/lib/constants/layoutModes';
import ProductGrid from 'src/lib/components/ProductGrid';
import ProductList from 'src/lib/components/ProductList';
import Pagination from 'src/lib/components/Pagination';
import ProductFilters from 'src/lib/components/ProductFilters';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import ProductsSidebar from 'src/lib/components/ProductsSidebar';

const SearchPage: FunctionComponent = () => {
    const [paginationValues, paginationApi] = usePagination();
    const { currentPage, totalPages } = paginationValues;
    const { setCurrentPage, setTotalPages } = paginationApi;
    const sortControl = useProductsSort();
    const { field, dir } = sortControl;
    const [{ layoutMode }] = useAppContext();
    const {
        isLoading,
        error,
        products,
        totalCount,
        filters,
        activeFilters,
        setFilter,
        toggleFilter,
        pageSize
    } = useSearchPage({
        query: PRODUCT_SEARCH,
        currentPage,
        sortField: field,
        sortDir: dir,
        setTotalPages
    });

    // If we get an error after loading we should try to reset to page 1.
    // If we continue to have errors after that, render an error message.
    useEffect(() => {
        if (error && !isLoading && currentPage !== 1) {
            setCurrentPage(1);
        }
    }, [currentPage, error, isLoading, setCurrentPage]);

    if (error && currentPage === 1 && !isLoading) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Data Fetch Error</div>;
    }

    if (!isLoading && totalCount === 0) {
        return <div>No products found.</div>;
    }

    return (
        <Fragment>
            <div className="mt-3" />
            {isLoading && <FullPageLoadingIndicator />}
            <Container>
                <Row>
                    <Col lg={9}>
                        <nav className="toolbox">
                            <div className="toolbox-left">
                                <ProductsSort sortControl={sortControl} />
                            </div>
                            <ProductResults
                                totalProducts={totalCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                            />
                            <LayoutModes />
                        </nav>
                        {layoutMode === LAYOUT_MODE_GRID ? (
                            <ProductGrid items={products} />
                        ) : (
                            <ProductList items={products} />
                        )}
                        {totalPages > 1 && (
                            <nav className="toolbox toolbox-pagination">
                                <ProductResults
                                    totalProducts={totalCount}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                />
                                <Pagination
                                    currentPage={currentPage}
                                    setPage={setCurrentPage}
                                    totalPages={totalPages}
                                />
                            </nav>
                        )}
                    </Col>
                    <ProductsSidebar>
                        <ProductFilters
                            filters={filters}
                            activeFilters={activeFilters}
                            setFilter={setFilter}
                            toggleFilter={toggleFilter}
                        />
                    </ProductsSidebar>
                </Row>
            </Container>
            <div className="mb-5" />
        </Fragment>
    );
};

export default SearchPage;
