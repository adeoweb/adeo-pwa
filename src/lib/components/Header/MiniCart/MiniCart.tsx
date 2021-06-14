import React, {
    FunctionComponent,
    useEffect,
    useCallback,
    useRef
} from 'react';

import RouterRoutes from 'src/lib/RouterRoutes';
import Dropdown from 'src/lib/components/Header/MiniCart/Dropdown';
import { Link } from 'src/lib/drivers';
import { useMiniCart } from 'src/peregrine/lib/talons/adeoweb/MiniCart/useMiniCart';

import defaultClasses from './MiniCart.scss';

const MiniCart: FunctionComponent = () => {
    const {
        numItems,
        cartItems,
        handleBeginEditItem,
        handleClose,
        handleToggleCart,
        currencyCode,
        subtotal,
        isOpen
    } = useMiniCart();

    const miniCartContainer = useRef<HTMLDivElement>(null);

    const handleCloseCart = useCallback(() => {
        if (isOpen) {
            handleClose();
        }
    }, [handleClose, isOpen]);

    useEffect(() => {
        const handleCloseCart = ({ target }: MouseEvent) => {
            if (
                isOpen &&
                miniCartContainer.current &&
                !miniCartContainer.current.contains(target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleCloseCart);
        return () => {
            document.removeEventListener('mousedown', handleCloseCart);
        };
    }, [isOpen, handleClose]);

    if (numItems <= 0) {
        return (
            <div className="dropdown cart-dropdown">
                <i
                    className={`dropdown-toggle ${defaultClasses.hideDropdownArrow} ${defaultClasses.icon}`}
                />
            </div>
        );
    }

    return (
        <div
            role="button"
            tabIndex={0}
            className="dropdown cart-dropdown"
            onMouseEnter={handleCloseCart}
            onKeyPress={handleToggleCart}
            ref={miniCartContainer}
        >
            <Link
                to={RouterRoutes.cart.url}
                className={`dropdown-toggle ${
                    numItems ? '' : defaultClasses.hideDropdownArrow
                }`}
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
            >
                {!!numItems && <span className="cart-count">{numItems}</span>}
            </Link>
            <Dropdown
                numItems={numItems}
                cartItems={cartItems}
                handleBeginEditItem={handleBeginEditItem}
                currencyCode={currencyCode}
                subtotal={subtotal}
                isOpen={isOpen}
            />
        </div>
    );
};

export default MiniCart;
