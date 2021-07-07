import React, { FunctionComponent } from 'react';

import Product from 'src/lib/components/Header/MiniCart/Product';
import { TCartItem } from 'src/lib/types/graphql/CartItem';

interface IProductListProps {
    cartItems: TCartItem[];
    handleBeginEditItem: () => void;
    currencyCode: string;
}

const ProductList: FunctionComponent<IProductListProps> = ({
    cartItems,
    handleBeginEditItem,
    currencyCode
}) => {
    if (!cartItems || !cartItems.length) {
        return null;
    }

    const renderItems = () =>
        cartItems.map(item => (
            <Product
                key={item.id}
                item={item}
                handleBeginEditItem={handleBeginEditItem}
                currencyCode={currencyCode}
            />
        ));

    return <div className="dropdown-cart-products">{renderItems()}</div>;
};

export default ProductList;
