import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useProduct = props => {
    const {
        beginEditItem,
        createCartMutation,
        getCartDetailsQuery,
        item,
        removeItemMutation
    } = props;

    const {
        configurable_options: options,
        product: {
            small_image: image,
            name = '',
            price_range: priceRange,
            url_key: urlKey = '',
            url_suffix: urlSuffix = ''
        },
        quantity = 0
    } = item;

    const productPrice =
        (priceRange &&
            priceRange.minimum_price &&
            priceRange.minimum_price.regular_price &&
            priceRange.minimum_price.regular_price.value) ||
        0;

    const productImage = (image && image.url) || '';

    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [, { removeItemFromCart }] = useCartContext();

    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [removeItem] = useMutation(removeItemMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    const handleFavoriteItem = useCallback(() => {
        setIsFavorite(!isFavorite);
    }, [isFavorite]);

    const handleEditItem = useCallback(() => {
        beginEditItem(item);
    }, [beginEditItem, item]);

    const handleRemoveItem = useCallback(() => {
        setIsLoading(true);
        removeItemFromCart({
            item,
            fetchCartDetails,
            fetchCartId,
            removeItem
        });
    }, [fetchCartDetails, fetchCartId, item, removeItem, removeItemFromCart]);

    return {
        handleEditItem,
        handleFavoriteItem,
        handleRemoveItem,
        isFavorite,
        isLoading,
        productImage,
        productName: name,
        productOptions: options,
        productPrice,
        productQuantity: quantity,
        productUrlKey: `${urlKey}${urlSuffix}`
    };
};
