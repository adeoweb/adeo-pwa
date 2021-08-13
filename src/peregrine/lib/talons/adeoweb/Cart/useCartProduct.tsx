import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import {
    TCartItem,
    TSelectedConfigurableOption,
    TSelectedCustomizableOption
} from 'src/lib/types/graphql/CartItem';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TUseCartProductProps = {
    createCartMutation: DocumentNode;
    getCartDetailsQuery: DocumentNode;
    item: TCartItem;
    removeItemMutation: DocumentNode;
};

export type TUseCartProduct = {
    handleRemoveItem: () => void;
    isLoading: boolean;
    image: string;
    name: string;
    options: TSelectedConfigurableOption[];
    customOptions: TSelectedCustomizableOption[];
    price: number;
    subtotal: number;
    urlKey: string;
    quantity: number;
};

export const useCartProduct = (
    props: TUseCartProductProps
): TUseCartProduct => {
    const {
        createCartMutation,
        getCartDetailsQuery,
        item,
        removeItemMutation
    } = props;

    const {
        configurable_options,
        customizable_options,
        product: {
            small_image: smallImage,
            name = '',
            url_key: urlKey = '',
            url_suffix: urlSuffix = ''
        },
        prices,
        quantity
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
    const options = filterOutNullableValues(configurable_options);
    const configCustomOptions = filterOutNullableValues(customizable_options);

    return {
        handleRemoveItem,
        isLoading,
        image,
        name,
        options,
        customOptions: configCustomOptions || [],
        price,
        subtotal,
        urlKey: `${urlKey}${urlSuffix}`,
        quantity
    };
};
