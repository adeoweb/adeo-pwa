import { useState } from 'react';

import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';

type TUsePageSize = {
    pageSize: number;
    setPageSize: (pageSize: number) => void;
};

export const usePageSize = (): TUsePageSize => {
    const [{ list_per_page: initialPageSize }] = useConfigContext();
    const [pageSize, setPageSize] = useState(initialPageSize);

    return {
        pageSize,
        setPageSize
    };
};
