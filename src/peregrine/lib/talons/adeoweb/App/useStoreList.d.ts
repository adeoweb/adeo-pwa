import { DocumentNode } from 'graphql';
import { TStore } from 'src/lib/types/graphql/Store';

type TUseStoreListProps = {
    query: DocumentNode;
};

type TUseStoreList = {
    error: null | Error;
    loading: boolean;
    data: TStore[];
};

export function useStoreList(props: TUseStoreListProps): TUseStoreList;
