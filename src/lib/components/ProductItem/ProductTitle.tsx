import React, { FunctionComponent } from 'react';
import { Link } from 'src/lib/drivers';

interface IProductTitleProps {
    name: string;
    itemUrl: string;
}

const ProductTitle: FunctionComponent<IProductTitleProps> = ({
    name,
    itemUrl
}) => {
    return (
        <h2 className="product-title">
            <Link to={itemUrl}>{name}</Link>
        </h2>
    );
};

export default ProductTitle;
