import { DocumentNode } from 'graphql';

import { useLazyQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { TStore } from 'src/lib/types/graphql/Store';
import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseStoreListProps = {
    query: DocumentNode;
};

export type TUseStoreList = {
    error?: Error;
    loading: boolean;
    data: TStore[];
};

const filterByWebsiteId = (data, id) => {
    return data.filter(({ website_id: websiteId }) => websiteId === id);
};

export const useStoreList = ({ query }: TUseStoreListProps): TUseStoreList => {
    const [{ website_id: websiteId }] = useConfigContext();
    const [runQuery, queryResponse] = useLazyQuery(query, {
        fetchPolicy: fetchPolicy.queries.default
    });
    const { loading, error, data } = queryResponse;

    useEffect(() => {
        runQuery();
    }, [runQuery]);

    return {
        loading,
        error,
        data: filterByWebsiteId((data && data.storeList) || [], websiteId)
    };
};
