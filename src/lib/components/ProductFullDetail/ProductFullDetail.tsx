import React, { Fragment, Suspense, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import AddToWishlist from 'src/lib/components/AddToWishlist';
import Breadcrumbs from 'src/lib/components/Breadcrumbs';
import { AddToCompare } from 'src/lib/components/Compare';
import PriceBox from 'src/lib/components/PriceBox';
import PriceTiers from 'src/lib/components/PriceTiers';
import ProductTabs from 'src/lib/components/ProductFullDetail/ProductTabs';
import RelatedProductsSection from 'src/lib/components/ProductFullDetail/RelatedProductsSection';
import ShortDescription from 'src/lib/components/ProductFullDetail/ShortDescription';
import Rating from 'src/lib/components/Rating';
import { CustomerModalTypes } from 'src/lib/constants/customer';
import MessageType from 'src/lib/constants/message';
import { SHOW_PRICE_TIERS } from 'src/lib/constants/product';
import ADD_CONFIGURABLE_MUTATION from 'src/lib/queries/addConfigurableProductsToCart.graphql';
import ADD_SIMPLE_MUTATION from 'src/lib/queries/addSimpleProductsToCart.graphql';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import { TProduct } from 'src/lib/types/graphql/Product';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useMessageCard } from 'src/peregrine/lib/talons/adeoweb/MessageCard/useMessageCard';
import { useProductFullDetail } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useProductFullDetail';
import { useWishlist } from 'src/peregrine/lib/talons/adeoweb/Wishlist/useWishlist';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';
import { isProductCustomizable } from 'src/peregrine/lib/util/adeoweb/isProductCustomizable';

import LoadingIndicator, {
    FullPageLoadingIndicator
} from '../LoadingIndicator';
import Carousel from '../ProductImageCarousel';
import ProductQuantity from '../ProductQuantity';
import AddToCartButton from './AddToCartButton';
import ProductSidebar from './ProductSidebar';

const Options = React.lazy(() => import('../ProductOptions'));
const CustomOptions = React.lazy(() => import('../CustomOptions'));

interface IProductFullDetailProps {
    product: TProduct;
}

const ProductFullDetail = (props: IProductFullDetailProps): JSX.Element => {
    const { product } = props;
    const { t } = useTranslation('product');
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

    const configurableOptions = filterOutNullableValues(
        product.configurable_options
    );
    const priceTiers = filterOutNullableValues(product.price_tiers);
    const crosssellProducts = filterOutNullableValues(
        product.crosssell_products
    );

    const options = isProductConfigurable(product) ? (
        <Suspense fallback={<FullPageLoadingIndicator />}>
            <Options
                onSelectionChange={handleSelectionChange}
                options={configurableOptions}
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
                                        <Rating />
                                        <PriceBox
                                            priceRange={
                                                productDetails.priceRange
                                            }
                                            additional={customOptionsPrice}
                                        />
                                        <PriceTiers
                                            priceTiers={priceTiers}
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
                                            <AddToCartButton
                                                handleAddToCart={
                                                    handleAddToCart
                                                }
                                                isAddToCartDisabled={
                                                    isAddToCartDisabled
                                                }
                                            />

                                            <AddToWishlist
                                                product={product}
                                                handleNotLoggedIn={
                                                    handleNotLoggedIn
                                                }
                                                isProductAction
                                            />
                                            <AddToCompare product={product} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <ProductTabs description={description} />
                    </Col>
                    <ProductSidebar items={crosssellProducts} />
                </Row>
            </Container>
            {Boolean(crosssellProducts.length) && (
                <RelatedProductsSection items={crosssellProducts} />
            )}
        </Fragment>
    );
};

export default ProductFullDetail;
