import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

const filterByWebsiteId = (data, id) => {
    return data.filter(({ website_id: websiteId }) => websiteId === id);
};

export const useStoreList = ({ query }) => {
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
