import { DocumentNode } from 'graphql';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseProductProps = {
    cachePrefix: string;
    fragment: DocumentNode;
    query: DocumentNode;
    urlKey: string;
};

type TUseProduct = {
    error: boolean;
    loading: boolean;
    product: TProduct | null;
};

export function useProduct(props: TUseProductProps): TUseProduct;
