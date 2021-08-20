import { DocumentNode } from 'graphql';

import { useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useConfigContext } from '../../../context/adeoweb/config';

type TUseLoadConfigProps = {
    getConfigQuery: DocumentNode;
};

type TUseLoadConfig = {
    error: null | Error;
    loaded: boolean;
};

export const useLoadConfig = ({
    getConfigQuery
}: TUseLoadConfigProps): TUseLoadConfig => {
    const fetchConfig = useAwaitQuery(getConfigQuery);
    const [loader, { getConfig }] = useConfigContext();

    useEffect(() => {
        getConfig({
            fetchConfig
        });
    }, [getConfig, fetchConfig]);

    return {
        error: loader?.loadingError,
        loaded: loader?.loaded
    };
};
