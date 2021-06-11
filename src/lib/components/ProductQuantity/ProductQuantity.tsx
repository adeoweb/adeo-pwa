import React, { FunctionComponent } from 'react';
import { useProductQuantity } from 'src/peregrine/lib/talons/adeoweb/ProductQuantity/useProductQuantity';
import { quantityIsValid } from 'src/lib/util/quantityIsValid';
import { useTranslation } from 'react-i18next';
import { PRODUCT_MINIMUM_QUANTITY } from 'src/lib/constants/product';

interface IQuantityProps {
    initialValue: number;
    onValueChange: (value: number) => void;
}

const ProductQuantity: FunctionComponent<IQuantityProps> = ({
    initialValue,
    onValueChange
}) => {
    const { t } = useTranslation();

    const { quantity, setQuantity, incrementQuantity, decrementQuantity } =
        useProductQuantity({
            initialValue,
            onValueChange,
            validateQuantity: quantityIsValid,
            minimumQuantity: PRODUCT_MINIMUM_QUANTITY
        });

    const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(event.target.value);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 38) {
            incrementQuantity();
        }
        if (keyCode === 40) {
            decrementQuantity();
        }
    };

    return (
        <div className="product-single-qty">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected hide-input-arrows">
                <span className="input-group-btn input-group-prepend">
                    <button
                        className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                        type="button"
                        onClick={decrementQuantity}
                    />
                </span>
                <input
                    className="horizontal-quantity form-control"
                    type="string"
                    value={quantity}
                    onChange={onQuantityChange}
                    onKeyDown={onKeyDown}
                    aria-label={t("product's quantity")}
                />
                <span className="input-group-btn input-group-append">
                    <button
                        className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                        type="button"
                        onClick={incrementQuantity}
                    />
                </span>
            </div>
        </div>
    );
};

export default ProductQuantity;
