import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { SelectedConfigurableOption } from 'src/lib/types/graphql-types.generated';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseProductProps = {
    beginEditItem: () => void;
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    item: TCartItem;
    removeItemMutation: DocumentNode;
};

export type TUseProduct = {
    handleEditItem: () => void;
    handleFavoriteItem: () => void;
    handleRemoveItem: () => void;
    isFavorite: boolean;
    isLoading: boolean;
    productImage: string;
    productName: string;
    productOptions: SelectedConfigurableOption[];
    productPrice: number;
    productQuantity: number;
    productUrlKey: string;
};

export const useProduct = (props: TUseProductProps): TUseProduct => {
    const {
        beginEditItem,
        createCartMutation,
        getCartDetailsQuery,
        item,
        removeItemMutation
    } = props;

    const {
        configurable_options,
        product: {
            small_image: image,
            name = '',
            price_range: priceRange,
            url_key: urlKey = '',
            url_suffix: urlSuffix = ''
        },
        quantity = 0
    } = item;

    const productPrice = priceRange?.minimum_price?.regular_price?.value ?? 0;

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
        beginEditItem();
    }, [beginEditItem]);

    const handleRemoveItem = useCallback(() => {
        setIsLoading(true);
        removeItemFromCart({
            item,
            fetchCartDetails,
            fetchCartId,
            removeItem
        });
    }, [fetchCartDetails, fetchCartId, item, removeItem, removeItemFromCart]);

    const options = filterOutNullableValues(configurable_options);

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
