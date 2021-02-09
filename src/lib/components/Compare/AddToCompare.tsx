import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { TProduct } from 'src/lib/types/graphql/Product';
import { useProductCompare } from 'src/peregrine/lib/talons/adeoweb/Product/useProductCompare';

type TAddToCompareProps = {
    product: TProduct;
};

const AddToCompare: FunctionComponent<TAddToCompareProps> = ({ product }) => {
    const { t } = useTranslation();
    const { setProductHandler, isProductBeingCompared } = useProductCompare();

    const addProductToCompare = () => {
        setProductHandler(product);
    };

    return (
        <button
            className={`paction add-compare${
                isProductBeingCompared(product) ? ` is-being-compared` : ``
            }`}
            title={t('Add to Compare')}
            onClick={addProductToCompare}
        >
            <span>{t('Add to Compare')}</span>
        </button>
    );
};

export default AddToCompare;
