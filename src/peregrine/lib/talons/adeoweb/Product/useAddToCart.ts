import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import MessageType from 'src/lib/constants/message';
import { TProduct } from 'src/lib/types/graphql/Product';
import scrollTo from 'src/lib/util/scrollTo';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

const defaultQuantity = 1;
const supportedProductTypes = ['SimpleProduct'];

type TUseAddToCart = {
    handleAddToCart: () => void;
    isAddToCartDisabled: boolean;
};

type TUseAddToCartProps = {
    getCartDetailsQuery: DocumentNode;
    createCartMutation: DocumentNode;
    addSimpleProductToCartMutation: DocumentNode;
    product: TProduct;
};

export const useAddToCart = ({
    addSimpleProductToCartMutation,
    createCartMutation,
    getCartDetailsQuery,
    product
}: TUseAddToCartProps): TUseAddToCart => {
    const productType = product.__typename;

    const isSupportedProductType = supportedProductTypes.includes(productType);

    const [, { toggleDrawer }] = useAppContext();
    const [{ isAddingItem }, { addItemToCart }] = useCartContext();
    const [, { addMessage }] = useMessageCardContext();

    const [addSimpleProductToCart] = useMutation(
        addSimpleProductToCartMutation,
        { fetchPolicy: fetchPolicy.mutations.default }
    );

    const [fetchCartId] = useMutation(createCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    const handleAddToCart = useCallback(async () => {
        if (isSupportedProductType) {
            let addItemMutation;
            // Use the proper mutation for the type.
            if (productType === 'SimpleProduct') {
                addItemMutation = addSimpleProductToCart;
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
                item: product,
                quantity: defaultQuantity,
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
        addItemToCart,
        addSimpleProductToCart,
        fetchCartDetails,
        fetchCartId,
        isSupportedProductType,
        product,
        toggleDrawer,
        productType,
        addMessage
    ]);

    return {
        handleAddToCart,
        isAddToCartDisabled: !isSupportedProductType || isAddingItem
    };
};
