import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductResults } from 'src/peregrine/lib/talons/adeoweb/Product/useProductResults';

type TProductResultsProps = {
    totalProducts: number;
    pageSize: number;
    currentPage: number;
};

const ProductResults: FunctionComponent<TProductResultsProps> = ({
    totalProducts,
    pageSize,
    currentPage
}) => {
    const { t } = useTranslation('product');
    const { fromProducts, toProducts } = useProductResults({
        totalProducts,
        pageSize,
        currentPage
    });

    return (
        <div className="toolbox-item toolbox-show">
            <label>
                {t('Showing')} {fromProducts}–{toProducts} {t('of')}{' '}
                {totalProducts} {t('results')}
            </label>
        </div>
    );
};

export default ProductResults;
