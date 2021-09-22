import { TProduct } from 'src/lib/types/graphql/Product';

export const isProductCustomizable = (product: TProduct): boolean =>
    Boolean(product.options);
