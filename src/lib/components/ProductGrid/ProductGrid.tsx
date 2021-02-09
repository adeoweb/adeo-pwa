import React, { FunctionComponent } from 'react';
import { TProduct } from 'src/lib/types/graphql/Product';
import { Row, Col } from 'react-bootstrap';
import ProductItem from 'src/lib/components/ProductItem';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';

type TProductGridProps = {
    items: TProduct[];
    category?: TCategoryInterface;
};

const ProductGrid: FunctionComponent<TProductGridProps> = ({
    items,
    category
}) => {
    return (
        <Row className={'row-sm'}>
            {items.map((product, index) => {
                const itemKey = `${product.sku}-${index}`;

                return (
                    <Col key={itemKey} xs={6} md={4} xl={3}>
                        <div className="product-default mb-4">
                            <ProductItem
                                product={product}
                                category={category}
                            />
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductGrid;
