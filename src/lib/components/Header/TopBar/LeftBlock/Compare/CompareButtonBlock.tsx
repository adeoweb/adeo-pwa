import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import RouterRoutes from 'src/lib/RouterRoutes/RouterRoutes';
import { Link } from 'src/lib/drivers';
import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

const CompareButtonBlock: FunctionComponent = () => {
    const { t } = useTranslation(['common', 'product']);
    const { removeAllProductsHandler } = useProductCompare();

    return (
        <div className="compare-actions">
            <button className="action-link" onClick={removeAllProductsHandler}>
                {t('product:Clear All')}
            </button>
            <Link to={RouterRoutes.compare.url} className="btn btn-primary">
                {t('common:Compare')}
            </Link>
        </div>
    );
};

export default CompareButtonBlock;
