import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

export const useCustomerOrders = ({ query }) => {
    const [runQuery, queryResponse] = useLazyQuery(query, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const { loading, error, data } = queryResponse;

    useEffect(() => {
        runQuery();
    }, [runQuery]);

    const ordersAreValid =
        data &&
        data.customerOrders &&
        data.customerOrders.items &&
        Array.isArray(data.customerOrders.items);

    const orders = ordersAreValid ? data.customerOrders.items : [];

    return {
        loadingOrders: loading,
        ordersError: error,
        orders
    };
};
