import React, { FunctionComponent } from 'react';

import {
    TProductsSidebarProps,
    ProductsSidebarPlacement
} from './ProductsSidebarTypes';

const ProductsSidebar: FunctionComponent<TProductsSidebarProps> = ({
    placement = ProductsSidebarPlacement.Left,
    children
}) => {
    const className =
        placement === ProductsSidebarPlacement.Left ? 'order-lg-first' : '';

    return (
        <aside className={`sidebar-shop col-lg-3 ${className}`}>
            <div className="pin-wrapper">
                <div
                    className="sidebar-wrapper"
                    style={{
                        borderBottom: '0px none rgb(118, 127, 132)'
                    }}
                >
                    {children}
                </div>
            </div>
        </aside>
    );
};

export default ProductsSidebar;
