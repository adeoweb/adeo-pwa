import { useState } from 'react';
import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';

export const usePageSize = () => {
    const [{ list_per_page: initialPageSize }] = useConfigContext();
    const [pageSize, setPageSize] = useState(initialPageSize);

    return {
        pageSize,
        setPageSize
    };
};
