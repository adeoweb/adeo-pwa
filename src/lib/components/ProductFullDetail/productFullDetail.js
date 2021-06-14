import { arrayOf, bool, number, shape, string } from 'prop-types';

import React, { Fragment, Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import AddToWishlist from 'src/lib/components/AddToWishlist';
import { AddToCompare } from 'src/lib/components/Compare';
import PriceBox from 'src/lib/components/PriceBox';
import PriceTiers from 'src/lib/components/PriceTiers';
import FeaturedProductsWidget from 'src/lib/components/ProductFullDetail/FeaturedProductsWidget';
import ProductTabs from 'src/lib/components/ProductFullDetail/ProductTabs';
import RelatedProductsSection from 'src/lib/components/ProductFullDetail/RelatedProductsSection';
import ShortDescription from 'src/lib/components/ProductFullDetail/ShortDescription';
import { CustomerModalTypes } from 'src/lib/constants/customer';
import MessageType from 'src/lib/constants/message';
import { SHOW_PRICE_TIERS } from 'src/lib/constants/product';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';
import { useProductFullDetail } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useProductFullDetail';
import { useWishlist } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlist';
import { isProductCustomizable } from 'src/peregrine/lib/util/adeoweb/isProductCustomizable';

import ADD_CONFIGURABLE_MUTATION from '../../queries/addConfigurableProductsToCart.graphql';
import ADD_SIMPLE_MUTATION from '../../queries/addSimpleProductsToCart.graphql';
import CREATE_CART_MUTATION from '../../queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from '../../queries/getCartDetails.graphql';
import Breadcrumbs from '../Breadcrumbs';
import Button from '../Button';
import LoadingIndicator, {
    FullPageLoadingIndicator
} from '../LoadingIndicator';
import Carousel from '../ProductImageCarousel';
import ProductQuantity from '../ProductQuantity';

const Options = React.lazy(() => import('../ProductOptions'));
const CustomOptions = React.lazy(() => import('../CustomOptions'));

const ProductFullDetail = props => {
    const { product } = props;
    const { t } = useTranslation();
    const [, { setCustomerModal }] = useAppContext();
    const { addMessage, clearAllMessages } = useMessageCard();
    const talonProps = useProductFullDetail({
        addConfigurableProductToCartMutation: ADD_CONFIGURABLE_MUTATION,
        addSimpleProductToCartMutation: ADD_SIMPLE_MUTATION,
        createCartMutation: CREATE_CART_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        product
    });
    const {
        isAddingToWishlist,
        addToWishlistError,
        isRemovingFromWishlist,
        removeFromWishlistError
    } = useWishlist();

    const {
        breadcrumbCategoryId,
        handleAddToCart,
        handleSelectionChange,
        handleSetQuantity,
        isSupportedProductType,
        isAddToCartDisabled,
        mediaGallery,
        productDetails,
        quantity,
        customOptions,
        handleCustomOptionChange,
        handleCustomOptionBlur,
        setCustomOptionFieldValue,
        customOptionValues,
        customOptionErrors,
        customOptionTouched,
        customOptionsPrice
    } = talonProps;

    const options = isProductConfigurable(product) ? (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <Options
                onSelectionChange={handleSelectionChange}
                options={product.configurable_options}
            />
        </Suspense>
    ) : null;

    const customOptionsBlock = isProductCustomizable(product) ? (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <CustomOptions
                customOptions={customOptions}
                handleChange={handleCustomOptionChange}
                handleBlur={handleCustomOptionBlur}
                setFieldValue={setCustomOptionFieldValue}
                values={customOptionValues}
                errors={customOptionErrors}
                touched={customOptionTouched}
            />
        </Suspense>
    ) : null;

    const description =
        productDetails.description && productDetails.description.html;
    const shortDescription =
        productDetails.shortDescription && productDetails.shortDescription.html;

    useEffect(() => {
        if (!isSupportedProductType) {
            addMessage({
                type: MessageType.ERROR,
                message: t('This type of product is not supported')
            });
        }
    }, [isSupportedProductType, addMessage, t]);

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

    const handleNotLoggedIn = () => {
        setCustomerModal(CustomerModalTypes.LOG_IN);
    };

    return (
        <Fragment>
            {(isAddingToWishlist || isRemovingFromWishlist) && (
                <LoadingIndicator />
            )}
            <Breadcrumbs
                categoryId={breadcrumbCategoryId || null}
                currentProduct={productDetails.name}
            />
            <Container>
                <Row>
                    <Col lg={9}>
                        <div className="product-single-container product-single-default">
                            <Row>
                                {/*TODO: product slider, maybe we can use owl here, same as in theme*/}
                                <Col
                                    lg={7}
                                    md={6}
                                    className="product-single-gallery"
                                >
                                    <Carousel images={mediaGallery} />
                                </Col>
                                {/*TODO: end*/}

                                <Col lg={5} md={6}>
                                    <div className="product-single-details">
                                        <h1 className="product-title">
                                            {productDetails.name}
                                        </h1>

                                        {/*TODO: Change with Rating component*/}
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" />
                                            </div>
                                            {/*TODO: add this to Rating component*/}
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a href="#" className="rating-link">
                                                ( 6 Reviews )
                                            </a>
                                        </div>
                                        {/*TODO: end*/}

                                        <PriceBox
                                            priceRange={
                                                productDetails.priceRange
                                            }
                                            additional={customOptionsPrice}
                                        />

                                        <PriceTiers
                                            priceTiers={product.price_tiers}
                                            priceRange={product.price_range}
                                            isVisible={SHOW_PRICE_TIERS}
                                        />

                                        <ShortDescription
                                            shortDescription={shortDescription}
                                        />

                                        {options}
                                        {customOptionsBlock}

                                        {isProductCustomizable(product) && (
                                            <PriceBox
                                                priceRange={
                                                    productDetails.priceRange
                                                }
                                                additional={customOptionsPrice}
                                            />
                                        )}

                                        <div className="product-action product-all-icons">
                                            <ProductQuantity
                                                initialValue={quantity}
                                                onValueChange={
                                                    handleSetQuantity
                                                }
                                            />
                                            {/*TODO: Change with AddToCartButton*/}
                                            <Button
                                                className={'paction add-cart'}
                                                priority="high"
                                                onClick={handleAddToCart}
                                                disabled={isAddToCartDisabled}
                                                title="Add to Cart"
                                            >
                                                Add to Cart
                                            </Button>
                                            {/*TODO: end*/}
                                            {/* TODO: handleNotLoggedIn */}
                                            <AddToWishlist
                                                product={product}
                                                handleNotLoggedIn={
                                                    handleNotLoggedIn
                                                }
                                            />
                                            <AddToCompare product={product} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <ProductTabs description={description} />
                    </Col>

                    {/*TODO: SideBar*/}
                    <div className="sidebar-overlay" />

                    <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                        <div className="sidebar-wrapper">
                            {/*TODO: Make InfoWidget*/}
                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        <i className="icon-shipping" />
                                        <h4>
                                            FREE
                                            <br />
                                            SHIPPING
                                        </h4>
                                    </li>
                                    <li>
                                        <i className="icon-us-dollar" />
                                        <h4>
                                            100% MONEY
                                            <br />
                                            BACK GUARANTEE
                                        </h4>
                                    </li>
                                    <li>
                                        <i className="icon-online-support" />
                                        <h4>
                                            ONLINE
                                            <br />
                                            SUPPORT 24/7
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                            {/*TODO: end*/}

                            {product.crosssell_products && (
                                <FeaturedProductsWidget
                                    items={product.crosssell_products}
                                />
                            )}
                        </div>
                    </aside>
                    {/*TODO: end*/}
                </Row>
            </Container>

            {product.crosssell_products && (
                <RelatedProductsSection items={product.crosssell_products} />
            )}
        </Fragment>
    );
};

ProductFullDetail.propTypes = {
    classes: shape({
        cartActions: string,
        description: string,
        descriptionTitle: string,
        details: string,
        detailsTitle: string,
        imageCarousel: string,
        options: string,
        productName: string,
        productPrice: string,
        quantity: string,
        quantityTitle: string,
        root: string,
        title: string
    }),
    product: shape({
        __typename: string,
        id: number,
        sku: string.isRequired,
        media_gallery_entries: arrayOf(
            shape({
                label: string,
                position: number,
                disabled: bool,
                file: string.isRequired
            })
        )
    }).isRequired
};

export default ProductFullDetail;
