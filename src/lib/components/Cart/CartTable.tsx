import React, { FunctionComponent, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import CartItem from 'src/lib/components/Cart/CartItem';
import { useCartBody } from 'src/peregrine/lib/talons/adeoweb/Cart/useCartBody';
import ApplyPromoWidget from 'src/lib/components/ApplyPromoWidget';

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
    const { t } = useTranslation();
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
                            <th className="product-col">{t('Product')}</th>
                            <th className="price-col">{t('Price')}</th>
                            <th className="qty-col">{t('Qty')}</th>
                            <th>{t('Subtotal')}</th>
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
                    {t('Continue Shopping')}
                </Link>
            </div>
        </Fragment>
    );
};

export default CartTable;
