import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

import ShoppingBagIcon from 'src/lib/assets/icons/ShoppingBagIcon';
import { Link } from 'src/lib/drivers';
import ADD_SIMPLE_MUTATION from 'src/lib/queries/addSimpleProductsToCart.graphql';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import { TProduct } from 'src/lib/types/graphql/Product';
import getItemUrl from 'src/lib/util/getItemUrl';
import { useAddToCart } from 'src/peregrine/lib/talons/adeoweb/Product/useAddToCart';
import { isProductCustomizable } from 'src/peregrine/lib/util/adeoweb/isProductCustomizable';

interface IAddToCartProps {
    product: TProduct;
}

const AddToCart: FunctionComponent<IAddToCartProps> = ({ product }) => {
    const { t } = useTranslation();
    const talonProps = useAddToCart({
        addSimpleProductToCartMutation: ADD_SIMPLE_MUTATION,
        createCartMutation: CREATE_CART_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        product
    });

    const { handleAddToCart, isAddToCartDisabled } = talonProps;
    const isConfigurable = isProductConfigurable(product);
    const isCustomizable = isProductCustomizable(product);
    const itemUrl = getItemUrl(product);

    return (
        <Fragment>
            {isConfigurable || isCustomizable ? (
                <Link className="btn-icon btn-add-cart" to={itemUrl}>
                    <div className="add-to-cart-content">
                        {t('Choose options')}
                    </div>
                </Link>
            ) : (
                <button
                    className="btn-icon btn-add-cart"
                    onClick={handleAddToCart}
                    disabled={isAddToCartDisabled}
                >
                    <div className="add-to-cart-content">
                        <ShoppingBagIcon />
                        {t('Add to cart')}
                    </div>
                </button>
            )}
        </Fragment>
    );
};

export default AddToCart;
