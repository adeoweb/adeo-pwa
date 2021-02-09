import { TProduct } from 'src//lib/types/graphql/Product';

export type TProductData = {
    [productId: string]: TProduct;
};

export type TProductCompareState = {
    productData: TProductData;
};
