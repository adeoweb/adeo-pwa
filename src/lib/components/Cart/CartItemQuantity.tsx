import React, { FunctionComponent, useState } from 'react';

import ADD_CONFIGURABLE_MUTATION from 'src/lib/queries/addConfigurableProductsToCart.graphql';
import ADD_SIMPLE_MUTATION from 'src/lib/queries/addSimpleProductsToCart.graphql';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import REMOVE_ITEM_MUTATION from 'src/lib/queries/removeItem.graphql';
import UPDATE_ITEM_MUTATION from 'src/lib/queries/updateItemInCart.graphql';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TProduct } from 'src/lib/types/graphql/Product';
import { useCartOptions } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartOptions';

type CartItemQuantityProps = {
    cartItem: TCartItem;
    configItem?: Partial<TProduct>;
    currencyCode: string;
    beginEditItem: () => void;
    endEditItem: () => void;
    isDisabled: boolean;
};

const CartItemQuantity: FunctionComponent<CartItemQuantityProps> = ({
    cartItem,
    configItem,
    beginEditItem,
    endEditItem,
    isDisabled
}) => {
    const { quantity, handleUpdateQuantity } = useCartOptions({
        addConfigurableProductToCartMutation: ADD_CONFIGURABLE_MUTATION,
        addSimpleProductToCartMutation: ADD_SIMPLE_MUTATION,
        cartItem,
        configItem,
        createCartMutation: CREATE_CART_MUTATION,
        endEditItem,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        removeItemMutation: REMOVE_ITEM_MUTATION,
        updateItemMutation: UPDATE_ITEM_MUTATION
    });
    const [value, setValue] = useState<string>(quantity.toString());

    const incrementQuantity = () => {
        beginEditItem();
        handleUpdateQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            beginEditItem();
            handleUpdateQuantity(quantity - 1);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const parsedValue = parseInt(value, 10);
            const qty = parsedValue > 0 ? parsedValue : quantity;
            setValue(qty.toString(10));
            if (qty !== quantity) {
                handleUpdateQuantity(qty);
            }
        }
    };

    return (
        <div className="input-group  bootstrap-touchspin bootstrap-touchspin-injected">
            <input
                className="vertical-quantity form-control"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={isDisabled}
            />
            <span className="input-group-btn-vertical">
                <button
                    className="btn btn-outline bootstrap-touchspin-up icon-up-dir"
                    type="button"
                    onClick={incrementQuantity}
                    disabled={isDisabled}
                />
                <button
                    className="btn btn-outline bootstrap-touchspin-down icon-down-dir"
                    type="button"
                    onClick={decrementQuantity}
                    disabled={isDisabled || quantity <= 1}
                />
            </span>
        </div>
    );
};

export default CartItemQuantity;
