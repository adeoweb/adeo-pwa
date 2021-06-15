import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { appendOptionsToPayload } from '@magento/peregrine/lib/util/appendOptionsToPayload';
import { findMatchingVariant } from '@magento/peregrine/lib/util/findMatchingProductVariant';
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import MessageType from 'src/lib/constants/message';
import scrollTo from 'src/lib/util/scrollTo';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useCustomProduct } from 'src/peregrine/lib/talons/adeoweb/ProductFullDetail/useCustomProduct';
import { appendCustomizableOptions } from 'src/peregrine/lib/util/adeoweb/appendCustomizableOptions';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import { isProductCustomizable } from 'src/peregrine/lib/util/adeoweb/isProductCustomizable';

const INITIAL_OPTION_CODES = new Map();
const INITIAL_OPTION_SELECTIONS = new Map();
const INITIAL_QUANTITY = 1;

const deriveOptionCodesFromProduct = product => {
    // If this is a simple product it has no option codes.
    if (!isProductConfigurable(product)) {
        return INITIAL_OPTION_CODES;
    }

    // Initialize optionCodes based on the options of the product.
    const initialOptionCodes = new Map();
    for (const {
        attribute_id,
        attribute_code
    } of product.configurable_options) {
        initialOptionCodes.set(attribute_id, attribute_code);
    }

    return initialOptionCodes;
};

// Similar to deriving the initial codes for each option.
const deriveOptionSelectionsFromProduct = product => {
    if (!isProductConfigurable(product)) {
        return INITIAL_OPTION_SELECTIONS;
    }

    const initialOptionSelections = new Map();
    for (const { attribute_id } of product.configurable_options) {
        initialOptionSelections.set(attribute_id, undefined);
    }

    return initialOptionSelections;
};

const getIsMissingOptions = (product, optionSelections) => {
    // Non-configurable products can't be missing options.
    if (!isProductConfigurable(product)) {
        return false;
    }

    // Configurable products are missing options if we have fewer
    // option selections than the product has options.
    const { configurable_options } = product;
    const numProductOptions = configurable_options.length;
    const numProductSelections = Array.from(optionSelections.values()).filter(
        value => !!value
    ).length;

    return numProductSelections < numProductOptions;
};

const getMediaGallery = (product, optionCodes, optionSelections) => {
    let value = [];

    const { media_gallery: mediaGallery, variants } = product;
    const isConfigurable = isProductConfigurable(product);

    // Selections are initialized to "code => undefined". Once we select a value, like color, the selections change. This filters out unselected options.
    const optionsSelected =
        Array.from(optionSelections.values()).filter(value => !!value).length >
        0;

    value = mediaGallery;
    if (isConfigurable && optionsSelected) {
        // If any of the possible variants matches the selection add that
        // variant's image to the media gallery. NOTE: This _can_, and does,
        // include variants such as size. If Magento is configured to display
        // an image for a size attribute, it will render that image.
        const item = findMatchingVariant({
            optionCodes,
            optionSelections,
            variants
        });

        if (item && item.product && item.product.media_gallery) {
            const {
                product: { media_gallery: variantMediaGallery }
            } = item;
            value = [...variantMediaGallery, ...mediaGallery];
        }
    }

    return value;
};

const getBreadcrumbCategoryId = (categories = []) => {
    const categoryPath = window.location.pathname.substr(
        0,
        window.location.pathname.lastIndexOf('/')
    );

    for (let i = 0; i < categories.length; i++) {
        const { id: categoryId, url_key: urlKey, breadcrumbs } = categories[i];
        const parts = (breadcrumbs || []).map(
            ({ category_url_key: categoryUrlKey }) => categoryUrlKey
        );
        parts.push(urlKey);

        if (categoryPath === `/${parts.join('/')}`) {
            return categoryId;
        }
    }

    return categories[0] ? categories[0].id : null;
};

const getConfigPrice = (product, optionCodes, optionSelections) => {
    let value;

    const { variants } = product;
    const isConfigurable = isProductConfigurable(product);

    const optionsSelected =
        Array.from(optionSelections.values()).filter(value => !!value).length >
        0;

    if (product && product.price_range && product.price_range.minimum_price) {
        value = product.price_range;
    }

    if (isConfigurable || optionsSelected) {
        const item = findMatchingVariant({
            optionCodes,
            optionSelections,
            variants
        });

        if (
            item &&
            item.product &&
            item.product.price_range &&
            item.product.price_range.minimum_price
        ) {
            value = item.product.price_range;
        }
    }

    return value;
};

const SUPPORTED_PRODUCT_TYPES = ['SimpleProduct', 'ConfigurableProduct'];

export const useProductFullDetail = ({
    addConfigurableProductToCartMutation,
    addSimpleProductToCartMutation,
    createCartMutation,
    getCartDetailsQuery,
    product
}) => {
    const productType = product.__typename;

    const isSupportedProductType =
        SUPPORTED_PRODUCT_TYPES.includes(productType);

    const [, { toggleDrawer }] = useAppContext();
    const [{ isAddingItem }, { addItemToCart }] = useCartContext();
    const [, { addMessage }] = useMessageCardContext();
    const { t } = useTranslation('product');

    const {
        customOptions,
        handleBlur: handleCustomOptionBlur,
        handleChange: handleCustomOptionChange,
        setFieldValue: setCustomOptionFieldValue,
        isValid: isCustomOptionsValid,
        dirty: isCustomOptionsDirty,
        values: customOptionValues,
        errors: customOptionErrors,
        touched: customOptionTouched,
        price: customOptionsPrice
    } = useCustomProduct({ product });

    const [addConfigurableProductToCart] = useMutation(
        addConfigurableProductToCartMutation,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    const [addSimpleProductToCart] = useMutation(
        addSimpleProductToCartMutation,
        { fetchPolicy: fetchPolicy.mutations.default }
    );

    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    const [quantity, setQuantity] = useState(INITIAL_QUANTITY);

    const breadcrumbCategoryId = useMemo(
        () => getBreadcrumbCategoryId(product.categories),
        [product.categories]
    );

    const derivedOptionSelections = useMemo(
        () => deriveOptionSelectionsFromProduct(product),
        [product]
    );

    const [optionSelections, setOptionSelections] = useState(
        derivedOptionSelections
    );

    const derivedOptionCodes = useMemo(
        () => deriveOptionCodesFromProduct(product),
        [product]
    );
    const [optionCodes] = useState(derivedOptionCodes);

    const isMissingOptions = useMemo(
        () => getIsMissingOptions(product, optionSelections),
        [product, optionSelections]
    );
    const mediaGallery = useMemo(
        () => getMediaGallery(product, optionCodes, optionSelections),
        [product, optionCodes, optionSelections]
    );

    const handleAddToCart = useCallback(async () => {
        if (isMissingOptions || !isCustomOptionsValid) {
            addMessage({
                type: MessageType.WARNING,
                message: t('Product options not selected')
            });

            return;
        }

        const payload = {
            item: product,
            productType,
            quantity
        };

        if (isProductConfigurable(product)) {
            appendOptionsToPayload(payload, optionSelections, optionCodes);
        }

        if (isProductCustomizable(product)) {
            appendCustomizableOptions(payload, customOptionValues);
        }

        if (isSupportedProductType) {
            let addItemMutation;
            // Use the proper mutation for the type.
            if (productType === 'SimpleProduct') {
                addItemMutation = addSimpleProductToCart;
            } else if (productType === 'ConfigurableProduct') {
                addItemMutation = addConfigurableProductToCart;
            }

            const addItemSuccessCallback = () => {
                toggleDrawer({ name: 'cart' });
                scrollTo();
            };

            const addItemErrorCallback = errorMessage => {
                addMessage({
                    type: MessageType.ERROR,
                    message: errorMessage
                });
            };

            await addItemToCart({
                ...payload,
                addItemMutation,
                fetchCartDetails,
                fetchCartId,
                addItemSuccessCallback,
                addItemErrorCallback
            });
        } else {
            console.error('Unsupported product type. Cannot add to cart.');
        }
    }, [
        addConfigurableProductToCart,
        addItemToCart,
        addSimpleProductToCart,
        fetchCartDetails,
        fetchCartId,
        isSupportedProductType,
        isMissingOptions,
        optionCodes,
        optionSelections,
        product,
        productType,
        quantity,
        toggleDrawer,
        addMessage,
        t,
        isCustomOptionsValid,
        customOptionValues
    ]);

    const handleSelectionChange = useCallback(
        (optionId, selection) => {
            // We must create a new Map here so that React knows that the value
            // of optionSelections has changed.
            const nextOptionSelections = new Map([...optionSelections]);
            nextOptionSelections.set(optionId, selection);
            setOptionSelections(nextOptionSelections);
        },
        [optionSelections]
    );

    const handleSetQuantity = useCallback(
        value => {
            setQuantity(value);
        },
        [setQuantity]
    );

    const productPriceRange = useMemo(
        () => getConfigPrice(product, optionCodes, optionSelections),
        [product, optionCodes, optionSelections]
    );

    // Normalization object for product details we need for rendering.
    const productDetails = {
        description: product.description,
        shortDescription: product.short_description,
        name: product.name,
        priceRange: productPriceRange,
        sku: product.sku
    };

    return {
        breadcrumbCategoryId,
        handleAddToCart,
        handleSelectionChange,
        handleSetQuantity,
        isSupportedProductType,
        isAddToCartDisabled:
            !isSupportedProductType ||
            isAddingItem ||
            isMissingOptions ||
            !isCustomOptionsValid,
        mediaGallery,
        productDetails,
        quantity,
        customOptions,
        handleCustomOptionBlur,
        handleCustomOptionChange,
        setCustomOptionFieldValue,
        isCustomOptionsValid,
        isCustomOptionsDirty,
        customOptionValues,
        customOptionErrors,
        customOptionTouched,
        customOptionsPrice
    };
};
