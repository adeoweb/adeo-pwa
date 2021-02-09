import { TCustomerOrder } from 'src/lib/types/graphql/Customer';

export interface IOrdersListProps {
    orders: TCustomerOrder[];
    createDetailsUrl: (id: number) => string;
}
