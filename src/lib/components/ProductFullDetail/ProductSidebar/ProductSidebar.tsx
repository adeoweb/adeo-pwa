import React, { Fragment } from 'react';

import { ProductInterface } from 'src/lib/types/graphql-types.generated';

import FeaturedProductsWidget from '../FeaturedProductsWidget';

interface IProductSidebarProps {
    items: ProductInterface[];
}

// TODO: Add data from backend when it's implemented.
const ProductSidebar = ({ items }: IProductSidebarProps): JSX.Element => {
    return (
        <Fragment>
            <div className="sidebar-overlay" />
            <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                <div className="sidebar-wrapper">
                    {/*TODO: Make InfoWidget*/}
                    <div className="widget widget-info">
                        <ul>
                            <li>
                                <i className="icon-shipping" />
                                <h4>
                                    FREE
                                    <br />
                                    SHIPPING
                                </h4>
                            </li>
                            <li>
                                <i className="icon-us-dollar" />
                                <h4>
                                    100% MONEY
                                    <br />
                                    BACK GUARANTEE
                                </h4>
                            </li>
                            <li>
                                <i className="icon-online-support" />
                                <h4>
                                    ONLINE
                                    <br />
                                    SUPPORT 24/7
                                </h4>
                            </li>
                        </ul>
                    </div>
                    {Boolean(items) && <FeaturedProductsWidget items={items} />}
                </div>
            </aside>
        </Fragment>
    );
};

export default ProductSidebar;
