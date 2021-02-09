import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'src/lib/drivers';
import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';
import RouterRoutes from 'src/lib/RouterRoutes/RouterRoutes';

const CompareButtonBlock: FunctionComponent = () => {
    const { t } = useTranslation();
    const { removeAllProductsHandler } = useProductCompare();

    return (
        <div className="compare-actions">
            <button className="action-link" onClick={removeAllProductsHandler}>
                {t('Clear All')}
            </button>
            <Link to={RouterRoutes.compare.url} className="btn btn-primary">
                {t('Compare')}
            </Link>
        </div>
    );
};

export default CompareButtonBlock;
