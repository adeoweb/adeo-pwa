import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

import CompareDropdown from './CompareDropdown';

const Compare: FunctionComponent = () => {
    const { t } = useTranslation('common');
    const { productData } = useProductCompare();
    const productQuantity = Object.keys(productData).length;
    const isActive = productQuantity > 0;

    return (
        <div
            className={`dropdown compare-dropdown ${isActive ? 'active' : ''}`}
        >
            <div
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
            >
                <i className="icon-retweet" />
                {`${t('Compare')} (${productQuantity})`}
            </div>
            <CompareDropdown />
        </div>
    );
};

export default Compare;
