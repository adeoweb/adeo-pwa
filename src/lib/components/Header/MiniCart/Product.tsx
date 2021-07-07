import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import Image from 'src/lib/components/Image';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useProduct } from 'src/peregrine/lib/talons/adeoweb/MiniCart/useProduct';

import CREATE_CART_MUTATION from '../../../queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from '../../../queries/getCartDetails.graphql';
import REMOVE_ITEM_MUTATION from '../../../queries/removeItem.graphql';

interface ProductProps {
    item: TCartItem;
    handleBeginEditItem: () => void;
    currencyCode: string;
}

const Product: FunctionComponent<ProductProps> = ({
    item,
    handleBeginEditItem,
    currencyCode
}) => {
    const {
        handleRemoveItem,
        productImage,
        productName,
        productPrice,
        productQuantity,
        productUrlKey
    } = useProduct({
        beginEditItem: handleBeginEditItem,
        createCartMutation: CREATE_CART_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        item,
        removeItemMutation: REMOVE_ITEM_MUTATION
    });
    const { t } = useTranslation('product');

    return (
        <div className="product">
            <div className="product-details">
                <h4 className="product-title">
                    <Link to={productUrlKey}>{productName}</Link>
                </h4>

                <span className="cart-product-info">
                    <span className="cart-product-qty">{productQuantity}</span>
                    x <Price currencyCode={currencyCode} value={productPrice} />
                </span>
            </div>

            <figure className="product-image-container">
                <Link to={productUrlKey} className="product-image">
                    <Image
                        src={productImage}
                        alt={productName}
                        width={80}
                        height={67}
                    />
                </Link>
                <button
                    className="btn-remove btn btn-link"
                    title={t('Remove Product')}
                    onClick={handleRemoveItem}
                >
                    <i className="icon-cancel" />
                </button>
            </figure>
        </div>
    );
};

export default Product;
