import React, { Fragment, FunctionComponent } from 'react';

import { TProductSearch } from 'src/lib/types/ProductSearch';

import SuggestedProduct from './SuggestedProduct';

export type TSuggestedProductsProps = {
    products: TProductSearch[];
    onNavigate: () => void;
    limit?: number;
};

const SuggestedProducts: FunctionComponent<TSuggestedProductsProps> = ({
    limit = 3,
    onNavigate,
    products
}) => {
    const items = products.slice(0, limit).map(product => (
        <div key={product?.id} className="autocomplete-suggestion">
            <SuggestedProduct {...product} onNavigate={onNavigate} />
        </div>
    ));

    return <Fragment>{items}</Fragment>;
};

export default SuggestedProducts;
