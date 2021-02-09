import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useMessageCardContext } from 'src/peregrine/lib/context/adeoweb/messageCard';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import MessageType from 'src/lib/constants/message';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import scrollTo from 'src/lib/util/scrollTo';

const defaultQuantity = 1;
const supportedProductTypes = ['SimpleProduct'];

export const useAddToCart = ({
    addSimpleProductToCartMutation,
    createCartMutation,
    getCartDetailsQuery,
    product
}) => {
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
        const payload = {
            item: product,
            productType,
            quantity: defaultQuantity
        };

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
