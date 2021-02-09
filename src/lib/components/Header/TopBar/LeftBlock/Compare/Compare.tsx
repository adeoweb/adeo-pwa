import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import CompareDropdown from './CompareDropdown';
import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

const Compare: FunctionComponent = () => {
    const { t } = useTranslation();
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
