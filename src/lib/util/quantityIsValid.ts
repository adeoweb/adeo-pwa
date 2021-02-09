export const quantityIsValid = (quantity: number): boolean =>
    !!quantity && !isNaN(quantity) && quantity > 0;
