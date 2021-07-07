import React, { FunctionComponent, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import ApplyPromoWidget from 'src/lib/components/ApplyPromoWidget';
import CartItem from 'src/lib/components/Cart/CartItem';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { useCartBody } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartBody';

type TCartTableProps = {
    items: TCartItem[];
    currencyCode: string;
    beginEditItem: () => void;
    endEditItem: () => void;
    isUpdatingItem: boolean;
};

const CartTable: FunctionComponent<TCartTableProps> = ({
    items = [],
    currencyCode,
    beginEditItem,
    endEditItem,
    isUpdatingItem
}) => {
    const { t } = useTranslation(['order', 'product']);
    const { handleBeginEditItem, handleEndEditItem } = useCartBody({
        beginEditItem,
        endEditItem
    });

    return (
        <Fragment>
            {items.length > 0 && (
                <table className="table table-cart">
                    <thead>
                        <tr>
                            <th className="product-col">
                                {t('product:Product')}
                            </th>
                            <th className="price-col">{t('product:Price')}</th>
                            <th className="qty-col">{t('product:Qty')}</th>
                            <th>{t('order:Subtotal')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                currencyCode={currencyCode}
                                beginEditItem={handleBeginEditItem}
                                endEditItem={handleEndEditItem}
                                isUpdatingItem={isUpdatingItem}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <ApplyPromoWidget />
            <div className="cart-toolbar">
                <Link
                    to={'/'}
                    className="btn btn-outline-secondary continue-shopping"
                >
                    {t('product:Continue Shopping')}
                </Link>
            </div>
        </Fragment>
    );
};

export default CartTable;
