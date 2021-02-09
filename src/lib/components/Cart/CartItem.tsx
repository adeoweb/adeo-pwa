import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useCartProduct } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartProduct';
import CREATE_CART_MUTATION from 'src/lib/queries/createCart.graphql';
import GET_CART_DETAILS_QUERY from 'src/lib/queries/getCartDetails.graphql';
import REMOVE_ITEM_MUTATION from 'src/lib/queries/removeItem.graphql';
import PRODUCT_DETAILS from 'src/lib/queries/getProductDetailBySku.graphql';
import Image from 'src/lib/components/Image';
import Price from '@magento/peregrine/lib/Price';
import { useCartEditItem } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartEditItem';
import CartItemQuantity from 'src/lib/components/Cart/CartItemQuantity';
import SelectedConfigOptions from 'src/lib/components/Cart/SelectedConfigOptions';
import SelectedCustomOptions from 'src/lib/components/Cart/SelectedCustomOptions';

type TCartItemProps = {
    item: TCartItem;
    currencyCode: string;
    beginEditItem: () => void;
    endEditItem: () => void;
    isUpdatingItem: boolean;
};

const CartItem: FunctionComponent<TCartItemProps> = ({
    item,
    currencyCode,
    beginEditItem,
    endEditItem,
    isUpdatingItem
}) => {
    const { t } = useTranslation();
    const {
        handleRemoveItem,
        isLoading: isRemovingItem,
        image,
        name,
        options,
        customOptions,
        price,
        subtotal,
        urlKey
    } = useCartProduct({
        createCartMutation: CREATE_CART_MUTATION,
        getCartDetailsQuery: GET_CART_DETAILS_QUERY,
        item,
        removeItemMutation: REMOVE_ITEM_MUTATION
    });

    const { configItem } = useCartEditItem({
        item,
        query: PRODUCT_DETAILS
    });

    const isDisabled = isRemovingItem || isUpdatingItem;

    return (
        <Fragment>
            <tr className="product-row">
                <td className="product-col">
                    <figure className="product-image-container">
                        <Link to={urlKey} className="product-image">
                            <Image
                                src={image}
                                alt={name}
                                width={180}
                                height={180}
                            />
                        </Link>
                    </figure>
                    <div>
                        <h2 className="product-title">
                            <Link to={urlKey}>{name}</Link>
                        </h2>
                        <SelectedConfigOptions options={options} />
                        <SelectedCustomOptions options={customOptions} />
                    </div>
                </td>
                <td>
                    <Price value={price} currencyCode={currencyCode} />
                </td>
                <td>
                    <CartItemQuantity
                        cartItem={item}
                        configItem={configItem}
                        currencyCode={currencyCode}
                        beginEditItem={beginEditItem}
                        endEditItem={endEditItem}
                        isDisabled={isDisabled}
                    />
                </td>
                <td>
                    <Price value={subtotal} currencyCode={currencyCode} />
                </td>
            </tr>
            <tr className="product-action-row">
                <td colSpan={4} className="clearfix">
                    <div className="float-left">
                        {/* TODO: redo to button */}
                        {/* TODO: implement actual Move to Wishlist button */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        {/*<a href="#" className="btn-move">*/}
                        {/*    Move to Wishlist*/}
                        {/*</a>*/}
                    </div>

                    <div className="float-right">
                        {/* TODO: redo to button */}
                        {/* TODO: skipping this for MVP */}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    title="Edit product"*/}
                        {/*    className="btn-edit"*/}
                        {/*>*/}
                        {/*    <span className="sr-only">Edit</span>*/}
                        {/*    <i className="icon-pencil" />*/}
                        {/*</a>*/}
                        <button
                            className="btn-remove btn btn-link"
                            title={t('Remove Product')}
                            onClick={handleRemoveItem}
                            disabled={isDisabled}
                        >
                            <span className="sr-only">{t('Remove')}</span>
                        </button>
                    </div>
                </td>
            </tr>
        </Fragment>
    );
};

export default CartItem;
