import { DocumentNode } from 'graphql';

import { TCategoryTree } from 'src/lib/types/graphql/Category';

type TUseMenuProps = {
    getMenuQuery: DocumentNode;
};

export type TUseMenu = {
    error: null | Error;
    children: TCategoryTree[];
};

export function useMenu(props: TUseMenuProps): TUseMenu;
