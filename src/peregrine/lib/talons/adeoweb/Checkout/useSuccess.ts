import { useEffect, useState } from 'react';

import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';

type TUseSuccess = {
    orderNumber: string | null;
};

export const useSuccess = (): TUseSuccess => {
    const [
        {
            receipt: {
                order: { order_number: number }
            }
        },
        { resetReceipt }
    ] = useCheckoutContext();
    const [orderNumber, setOrderNumber] = useState<string | null>(null);

    useEffect(() => {
        if (number) {
            setOrderNumber(number);
            resetReceipt();
        }
    }, [number, resetReceipt]);

    return {
        orderNumber
    };
};
