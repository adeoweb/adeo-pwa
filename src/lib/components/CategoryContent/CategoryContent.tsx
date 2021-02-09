import React, { Fragment, FunctionComponent, useEffect } from 'react';
import Pagination from 'src/lib/components/Pagination';
import { Col, Container, Row } from 'react-bootstrap';
import { ICategoryContentProps } from 'src/lib/components/CategoryContent';
import ProductGrid from 'src/lib/components/ProductGrid';
import ProductList from 'src/lib/components/ProductList';
import RichText from 'src/lib/components/RichText';
import ProductResults from 'src/lib/components/ProductResults';
import ProductsSort from 'src/lib/components/ProductsSort';
import LayoutModes from 'src/lib/components/LayoutModes';
import { LAYOUT_MODE_GRID } from 'src/lib/constants/layoutModes';
import LoadingIndicator, {
    FullPageLoadingIndicator
} from '../../components/LoadingIndicator';
import Breadcrumbs from 'src/lib/components/Breadcrumbs';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import ProductsSidebar from 'src/lib/components/ProductsSidebar';
import ProductFilters from 'src/lib/components/ProductFilters';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';
import { useWishlist } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlist';
import MessageType from 'src/lib/constants/message';

const CategoryContent: FunctionComponent<ICategoryContentProps> = ({
    categoryId,
    category,
    pageControl,
    pageSize,
    sortControl,
    products,
    totalCount,
    filterControl,
    isLoading
}) => {
    const { filters, activeFilters, setFilter, toggleFilter } = filterControl;
    const description = category && category.description;
    const { currentPage, setPage, totalPages } = pageControl;
    const totalProducts = totalCount;
    const [{ layoutMode }] = useAppContext();
    const { addMessage, clearAllMessages } = useMessageCard();
    const {
        isAddingToWishlist,
        addToWishlistError,
        isRemovingFromWishlist,
        removeFromWishlistError
    } = useWishlist();

    useEffect(() => {
        if (addToWishlistError || removeFromWishlistError) {
            clearAllMessages();
            addMessage({
                type: MessageType.ERROR,
                message: String(addToWishlistError || removeFromWishlistError)
            });
        }
    }, [
        addMessage,
        clearAllMessages,
        addToWishlistError,
        removeFromWishlistError
    ]);

    return (
        <Fragment>
            {(isAddingToWishlist || isRemovingFromWishlist) && (
                <LoadingIndicator />
            )}
            {isLoading && <FullPageLoadingIndicator />}
            <Breadcrumbs categoryId={categoryId} />
            <Container>
                <Row>
                    <Col lg={9}>
                        {description && <RichText content={description} />}
                        <nav className="toolbox">
                            <div className="toolbox-left">
                                <ProductsSort sortControl={sortControl} />
                            </div>
                            <ProductResults
                                totalProducts={totalProducts}
                                pageSize={pageSize}
                                currentPage={currentPage}
                            />
                            <LayoutModes />
                        </nav>
                        {layoutMode === LAYOUT_MODE_GRID ? (
                            <ProductGrid items={products} category={category} />
                        ) : (
                            <ProductList items={products} category={category} />
                        )}
                        {totalPages > 1 && (
                            <nav className="toolbox toolbox-pagination">
                                <ProductResults
                                    totalProducts={totalProducts}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                />
                                <Pagination
                                    currentPage={currentPage}
                                    setPage={setPage}
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

export default CategoryContent;
