import { DocumentNode } from 'graphql';

import { useEffect } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { TCategoryTree } from 'src/lib/types/graphql/Category';
import { useMenuContext } from 'src/peregrine/lib/context/adeoweb/menu';

type TUseMenuProps = {
    getMenuQuery: DocumentNode;
};

export type TUseMenu = {
    error: null | Error;
    children: TCategoryTree[];
};

export const useMenu = ({ getMenuQuery }: TUseMenuProps): TUseMenu => {
    const [{ loadingError, children }, { getMenu }] = useMenuContext();

    const fetchMenu = useAwaitQuery(getMenuQuery);

    useEffect(() => {
        getMenu({
            fetchMenu
        });
    }, [getMenu, fetchMenu]);

    return {
        error: loadingError,
        children
    };
};
