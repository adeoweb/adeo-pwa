import { useMutation } from '@apollo/react-hooks';
import { useCallback, useMemo, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';
import { appendOptionsToPayload } from '@magento/peregrine/lib/util/appendOptionsToPayload';
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import isItemMissingOptions from 'src/peregrine/lib/util/adeoweb/isItemMissingOptions';

export const useCartOptions = props => {
    const {
        addConfigurableProductToCartMutation,
        addSimpleProductToCartMutation,
        cartItem,
        configItem,
        createCartMutation,
        endEditItem,
        getCartDetailsQuery,
        removeItemMutation,
        updateItemMutation
    } = props;

    const { configurable_options: cartItemOptions, quantity: initialQuantity } =
        cartItem;

    const [, { updateItemInCart }] = useCartContext();

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
    const [removeItem] = useMutation(removeItemMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [updateItem] = useMutation(updateItemMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    const initialOptionSelections = useMemo(() => {
        const result = new Map();

        if (cartItemOptions) {
            cartItemOptions.forEach(cartItemOption => {
                result.set(cartItemOption.id, cartItemOption.value_id);
            });
        }

        return result;
    }, [cartItemOptions]);

    const [optionSelections, setOptionSelections] = useState(
        initialOptionSelections
    );

    const [quantity, setQuantity] = useState(initialQuantity);

    const handleCancel = useCallback(() => {
        endEditItem();
    }, [endEditItem]);

    const handleSelectionChange = useCallback(
        (optionId, selection) => {
            // We must create a new Map here so that React knows that the value
            // of optionSelections has changed.
            const nextOptionSelections = new Map([...optionSelections]);
            // There's a type difference in configurable option queries between
            // cart and product, casting to number is required. Can remove
            // cast once MC-29839 is resolved.
            nextOptionSelections.set(Number(optionId), selection);
            setOptionSelections(nextOptionSelections);
        },
        [optionSelections]
    );

    const updateCartItem = async ({
        configItem,
        cartItem,
        quantity,
        optionSelections,
        updateItemInCart,
        fetchCartDetails,
        fetchCartId,
        removeItem,
        updateItem,
        addConfigurableProductToCart,
        addSimpleProductToCart
    }) => {
        // configItem is the updated item with new option selections
        // cartItem is the item currently in cart
        const payload = {
            item: configItem,
            productType: configItem.__typename,
            quantity,
            cartItemId: cartItem.id
        };

        if (isProductConfigurable(configItem)) {
            appendOptionsToPayload(payload, optionSelections);
        }

        // Provide the proper addItemMutation for the product type.
        let addItemMutation;
        if (payload.productType === 'ConfigurableProduct') {
            addItemMutation = addConfigurableProductToCart;
        } else {
            addItemMutation = addSimpleProductToCart;
        }

        await updateItemInCart({
            ...payload,
            addItemMutation,
            fetchCartDetails,
            fetchCartId,
            removeItem,
            updateItem
        });
    };

    const handleUpdate = useCallback(async () => {
        await updateCartItem({
            configItem,
            cartItem,
            quantity,
            optionSelections,
            updateItemInCart,
            fetchCartDetails,
            fetchCartId,
            removeItem,
            updateItem,
            addConfigurableProductToCart,
            addSimpleProductToCart
        });
        endEditItem();
    }, [
        configItem,
        quantity,
        cartItem,
        updateItemInCart,
        fetchCartDetails,
        fetchCartId,
        removeItem,
        updateItem,
        endEditItem,
        optionSelections,
        addConfigurableProductToCart,
        addSimpleProductToCart
    ]);

    const handleUpdateQuantity = useCallback(
        async quantity => {
            await updateCartItem({
                configItem,
                cartItem,
                quantity,
                optionSelections,
                updateItemInCart,
                fetchCartDetails,
                fetchCartId,
                removeItem,
                updateItem,
                addConfigurableProductToCart,
                addSimpleProductToCart
            });
            endEditItem();
        },
        [
            configItem,
            cartItem,
            updateItemInCart,
            fetchCartDetails,
            fetchCartId,
            removeItem,
            updateItem,
            endEditItem,
            optionSelections,
            addConfigurableProductToCart,
            addSimpleProductToCart
        ]
    );

    const handleValueChange = useCallback(
        value => {
            // Ensure that quantity remains an int.
            if (parseInt(value) > 0) {
                setQuantity(parseInt(value));
            }
        },
        [setQuantity]
    );

    const isMissingOptions = isItemMissingOptions(
        cartItem,
        configItem,
        optionSelections.size
    );

    const optionsChanged = useMemo(() => {
        for (const [key, val] of initialOptionSelections) {
            const testVal = optionSelections.get(key);
            if (testVal !== val) {
                return true;
            }
        }
        return false;
    }, [initialOptionSelections, optionSelections]);

    const touched = useMemo(() => {
        return quantity !== initialQuantity || optionsChanged;
    }, [quantity, initialQuantity, optionsChanged]);

    return {
        initialQuantity,
        quantity,
        handleCancel,
        handleSelectionChange,
        handleUpdate,
        handleUpdateQuantity,
        handleValueChange,
        isUpdateDisabled: isMissingOptions || !touched
    };
};
