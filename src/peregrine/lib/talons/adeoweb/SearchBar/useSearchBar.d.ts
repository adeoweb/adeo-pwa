import * as H from 'history';
import { MutableRefObject } from 'react';
import { FormikProps } from 'src/lib/drivers';

type TUseSearchBarProps = {
    history: H.History;
};

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

export function useSearchBar(props: TUseSearchBarProps): TUseSearchBar;
