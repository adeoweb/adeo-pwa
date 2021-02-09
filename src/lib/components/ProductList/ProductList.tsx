import React, { FunctionComponent } from 'react';
import { TProduct } from 'src/lib/types/graphql/Product';
import { Row, Col } from 'react-bootstrap';
import ProductItem from 'src/lib/components/ProductItem';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';

type TProductListProps = {
    items: TProduct[];
    category?: TCategoryInterface;
};

const ProductList: FunctionComponent<TProductListProps> = ({
    items,
    category
}) => {
    return (
        <Row className="product-intro row-sm">
            {items.map((product, index) => {
                const itemKey = `${product.sku}-${index}`;

                return (
                    <Col
                        key={itemKey}
                        sm={12}
                        className="col-6 product-default left-details product-list mb-4"
                    >
                        <ProductItem product={product} category={category} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductList;
