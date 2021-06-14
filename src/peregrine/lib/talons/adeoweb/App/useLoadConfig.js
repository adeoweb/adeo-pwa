import { useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { useConfigContext } from '../../../context/adeoweb/config';

export const useLoadConfig = ({ getConfigQuery }) => {
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
