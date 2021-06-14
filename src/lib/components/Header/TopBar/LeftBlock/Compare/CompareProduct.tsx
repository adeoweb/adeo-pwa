import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Link } from 'src/lib/drivers';
import { TProduct } from 'src/lib/types/graphql/Product';

type TCompareProductProps = {
    product: TProduct;
    removeHandler: (product: TProduct) => Promise<void>;
};

const CompareProduct: FunctionComponent<TCompareProductProps> = ({
    product,
    removeHandler
}) => {
    const { t } = useTranslation();
    const { name, url_key = '', url_suffix = '' } = product;
    const productUrl = `/${url_key}${url_suffix}`;

    const removeFromCompare = () => {
        removeHandler(product);
    };

    return (
        <li className="product">
            <Button
                className="btn-remove btn-link border-0"
                title={t('Remove Product')}
                onClick={removeFromCompare}
                style={{ background: 'none' }}
            >
                <i className="icon-cancel" />
            </Button>
            <h4 className="product-title">
                <Link to={productUrl}>{name}</Link>
            </h4>
        </li>
    );
};

export default CompareProduct;
