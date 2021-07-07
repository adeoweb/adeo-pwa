import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import RouterRoutes from 'src/lib/RouterRoutes';
import { rootCheckoutRoute } from 'src/lib/components/Checkout';
import ProductList from 'src/lib/components/Header/MiniCart/ProductList';
import { Link } from 'src/lib/drivers';
import { TCartItem } from 'src/lib/types/graphql/CartItem';

interface IDropdownProps {
    numItems: number;
    cartItems: TCartItem[];
    handleBeginEditItem: () => void;
    currencyCode: string;
    subtotal: number;
    isOpen: boolean;
}

const Dropdown: FunctionComponent<IDropdownProps> = ({
    numItems,
    cartItems,
    handleBeginEditItem,
    currencyCode,
    subtotal,
    isOpen
}) => {
    const { t } = useTranslation(['product', 'order']);

    if (numItems <= 0) {
        return null;
    }

    return (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <div className="dropdownmenu-wrapper">
                <div className="dropdown-cart-header">
                    <span>
                        {numItems} {t('product:Items')}
                    </span>

                    <Link to={RouterRoutes.cart.url}>
                        {t('order:View Cart')}
                    </Link>
                </div>
                <ProductList
                    cartItems={cartItems}
                    handleBeginEditItem={handleBeginEditItem}
                    currencyCode={currencyCode}
                />
                <div className="dropdown-cart-total">
                    <span>{t('order:Total')}</span>

                    <span className="cart-total-price">
                        {currencyCode && (
                            <Price
                                value={subtotal}
                                currencyCode={currencyCode}
                            />
                        )}
                    </span>
                </div>

                <div className="dropdown-cart-action">
                    <Link to={rootCheckoutRoute} className="btn btn-block">
                        {t('order:Checkout')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
