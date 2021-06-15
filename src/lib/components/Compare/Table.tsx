import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Attributes from 'src/lib/components/Compare/Attributes';
import ProductsTable from 'src/lib/components/Compare/ProductsTable';
import { TProductData } from 'src/peregrine/lib/store/reducers/adeoweb/productCompare';

interface ITableProps {
    productData: TProductData;
}

const Table: FunctionComponent<ITableProps> = ({ productData }) => {
    const { t } = useTranslation('product');

    return (
        <div className="columns">
            <div className="column main">
                <div className="table-wrapper comparison">
                    <table className="data table table-comparison scroll">
                        <caption className="table-caption">
                            {t('Compare Products')}
                        </caption>
                        <ProductsTable productData={productData} />
                        <Attributes productData={productData} />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
