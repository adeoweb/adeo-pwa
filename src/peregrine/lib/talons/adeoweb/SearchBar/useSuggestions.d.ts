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

export function useSuggestions(props: TUseSuggestionsProps): TUseSuggestions;
