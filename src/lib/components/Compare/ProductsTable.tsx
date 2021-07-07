import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Product from 'src/lib/components/Compare/Product';
import { TProductData } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';

interface IProductsProps {
    productData: TProductData;
}

const ProductsTable: FunctionComponent<IProductsProps> = ({ productData }) => {
    const { t } = useTranslation('product');

    if (!productData) {
        return null;
    }

    const columnCount = Object.keys(productData).length + 1;
    const columnWidth = 100 / (columnCount || 1);
    const columnStyle = {
        width: `${columnWidth}%`
    };

    return (
        <tbody>
            <tr>
                <th
                    scope="row"
                    className="cell label product"
                    style={columnStyle}
                >
                    <span>{t('product')}</span>
                </th>
                {productData &&
                    Object.keys(productData).map(productId => {
                        const product = productData[productId];

                        return (
                            <Product
                                key={productId}
                                product={product}
                                columnStyle={columnStyle}
                            />
                        );
                    })}
            </tr>
        </tbody>
    );
};

export default ProductsTable;
