import { useCallback } from 'react';

import { TProductSearch } from 'src/lib/types/ProductSearch';

type TUseSuggestionsProps = {
    items: TProductSearch[];
    setVisible: (isVisible: boolean) => void;
    visible: boolean;
};

type TUseSuggestions = {
    onNavigate: () => void;
    shouldRender: boolean;
};

export const useSuggestions = (
    props: TUseSuggestionsProps
): TUseSuggestions => {
    const { items, setVisible, visible } = props;

    // hide after navigating to a suggested product
    const onNavigate = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    // avoid rendering if data is empty
    const shouldRender = !!(visible && items?.length);

    return {
        onNavigate,
        shouldRender
    };
};
