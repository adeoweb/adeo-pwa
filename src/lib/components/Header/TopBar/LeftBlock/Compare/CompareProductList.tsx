import React, { FunctionComponent } from 'react';

import { TProduct } from 'src/lib/types/graphql/Product';
import isObjectEmpty from 'src/lib/util/isObjectEmpty';
import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

import CompareProduct from './CompareProduct';

type TRenderListProps = {
    productData: {
        [productId: string]: TProduct;
    };
    removeProductHandler: (product: TProduct) => Promise<void>;
};

const renderList = ({
    productData,
    removeProductHandler
}: TRenderListProps): React.ReactNode => {
    return Object.keys(productData).map(productId => {
        return (
            <CompareProduct
                key={`compare-product-${productId}`}
                product={productData[productId]}
                removeHandler={removeProductHandler}
            />
        );
    });
};

const CompareProductList: FunctionComponent = () => {
    const { productData, removeProductHandler } = useProductCompare();

    if (isObjectEmpty(productData)) {
        return null;
    }

    return (
        <ul className="compare-products">
            {renderList({
                productData,
                removeProductHandler
            })}
        </ul>
    );
};

export default CompareProductList;
