type TUseProductQuantity = {
    quantity: string;
    setQuantity: (quantity: string) => void;
    incrementQuantity: () => void;
    decrementQuantity: () => void;
};

interface IUseProductQuantityProps {
    initialValue?: number;
    onValueChange?: (value: number) => void;
    validateQuantity: (quantity: number) => boolean;
    minimumQuantity: number;
    stepSize?: number;
}

export function useProductQuantity(
    props: IUseProductQuantityProps
): TUseProductQuantity;
