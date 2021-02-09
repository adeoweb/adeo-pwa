import { DocumentNode } from 'graphql';
import { TCartItem } from 'src/lib/types/graphql/CartItem';
import { TProduct } from 'src/lib/types/graphql/Product';

type TUseCartEditItemProps = {
    item: TCartItem;
    query: DocumentNode;
};

export type TUseCartEditItem = {
    configItem: TProduct;
    hasError: boolean;
    isLoading: boolean;
    itemHasOptions: boolean;
};

export function useCartEditItem(props: TUseCartEditItemProps): TUseCartEditItem;
