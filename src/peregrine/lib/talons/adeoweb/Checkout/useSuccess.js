import { useEffect, useState } from 'react';

import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';

export const useSuccess = () => {
    const [
        {
            receipt: {
                order: { order_number: number }
            }
        },
        { resetReceipt }
    ] = useCheckoutContext();
    const [orderNumber, setOrderNumber] = useState(null);

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
