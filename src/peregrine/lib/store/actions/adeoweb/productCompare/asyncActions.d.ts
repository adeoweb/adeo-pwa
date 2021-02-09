import { TProduct } from 'src//lib/types/graphql/Product';

export type TProductCompareAsyncActions = {
    setProduct(payload: TProduct): Promise<void>;
    removeProduct(payload: TProduct): Promise<void>;
    removeAllProducts(): Promise<void>;
};
