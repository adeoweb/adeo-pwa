import React from 'react';
import { useTranslation } from 'react-i18next';

interface IAddToCartButtonProps {
    isAddToCartDisabled: boolean;
    handleAddToCart: () => void;
}

const AddToCartButton = ({
    handleAddToCart,
    isAddToCartDisabled
}: IAddToCartButtonProps): JSX.Element => {
    const { t } = useTranslation('product');

    return (
        <button
            className={'paction add-cart'}
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled}
            title={t('Add to cart')}
        >
            <span>{t('Add to cart')}</span>
        </button>
    );
};

export default AddToCartButton;
