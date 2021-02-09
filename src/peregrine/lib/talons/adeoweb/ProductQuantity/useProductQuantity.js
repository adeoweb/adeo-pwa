import { useState, useCallback } from 'react';

export const useProductQuantity = props => {
    const {
        validateQuantity,
        minimumQuantity,
        onValueChange,
        stepSize = 1
    } = props;

    const initialValue =
        props.initialValue && validateQuantity(props.initialValue)
            ? props.initialValue
            : minimumQuantity;

    const [quantity, setQuantity] = useState(initialValue);

    const handleValueChange = useCallback(
        value => {
            if (onValueChange && typeof onValueChange === 'function') {
                onValueChange(value);
            }
        },
        [onValueChange]
    );

    const setQuantityWithValidation = useCallback(
        value => {
            const parsedQuantity = parseInt(value);
            if (validateQuantity(parsedQuantity)) {
                handleValueChange(parsedQuantity);
                setQuantity(parsedQuantity);
            } else {
                handleValueChange(0);
                setQuantity(0);
            }
        },
        [validateQuantity, handleValueChange, setQuantity]
    );

    const incrementQuantity = useCallback(() => {
        setQuantityWithValidation(quantity + stepSize);
    }, [setQuantityWithValidation, quantity, stepSize]);

    const decrementQuantity = useCallback(() => {
        setQuantityWithValidation(quantity - stepSize);
    }, [setQuantityWithValidation, quantity, stepSize]);

    return {
        quantity,
        setQuantity: setQuantityWithValidation,
        incrementQuantity,
        decrementQuantity
    };
};
