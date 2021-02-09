import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCartProduct = props => {
    const {
        createCartMutation,
        getCartDetailsQuery,
        item,
        removeItemMutation
    } = props;

    const {
        configurable_options: options = [],
        custom_options: simpleCustomOptions,
        customizable_options: configCustomOptions,
        product: {
            small_image: smallImage,
            name = '',
            url_key: urlKey = '',
            url_suffix: urlSuffix = ''
        },
        prices
    } = item;

    const price = (prices && prices.price && prices.price.value) || 0;

    const subtotal =
        (prices && prices.row_total && prices.row_total.value) || 0;

    const image = (smallImage && smallImage.url) || '';

    const [isLoading, setIsLoading] = useState(false);
    const [, { removeItemFromCart }] = useCartContext();

    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [removeItem] = useMutation(removeItemMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

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
        handleRemoveItem,
        isLoading,
        image,
        name,
        options,
        customOptions: simpleCustomOptions || configCustomOptions || [],
        price,
        subtotal,
        urlKey: `${urlKey}${urlSuffix}`
    };
};
