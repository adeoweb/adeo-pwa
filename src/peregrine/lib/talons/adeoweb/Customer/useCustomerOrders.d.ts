import { DocumentNode } from 'graphql';
import { TCustomerOrder } from 'src/lib/types/graphql/Customer';

type TUseCustomerOrdersProps = {
    query: DocumentNode;
};

export type TUseCustomerOrders = {
    loadingOrders: boolean;
    ordersError: null | Error;
    orders: TCustomerOrder[] | [];
};

export function useCustomerOrders(
    props: TUseCustomerOrdersProps
): TUseCustomerOrders;
