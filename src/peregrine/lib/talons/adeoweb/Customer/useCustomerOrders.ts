import { DocumentNode } from 'graphql';

import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { TCustomerOrder } from 'src/lib/types/graphql/Customer';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseCustomerOrdersProps = {
    query: DocumentNode;
};

export type TUseCustomerOrders = {
    loadingOrders: boolean;
    ordersError?: Error;
    orders: TCustomerOrder[];
};

export const useCustomerOrders = ({
    query
}: TUseCustomerOrdersProps): TUseCustomerOrders => {
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
