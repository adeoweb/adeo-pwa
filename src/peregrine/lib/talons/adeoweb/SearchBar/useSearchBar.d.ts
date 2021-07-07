import { MutableRefObject } from 'react';

import { FormikProps } from 'src/lib/drivers';

export type TUseSearchBarValues = {
    search_query: string;
};

type TUseSearchBar = {
    containerRef: MutableRefObject<null>;
    initialValues: TUseSearchBarValues;
    expanded: boolean;
    setExpanded: (isExpanded: boolean) => void;
    handleFocus: () => void;
    form: FormikProps<TUseSearchBarValues>;
};

export function useSearchBar(): TUseSearchBar;
