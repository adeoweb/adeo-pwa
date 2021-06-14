import React, { FunctionComponent } from 'react';

import { TProductsSearch } from 'src/lib/types/ProductSearch';
import { useSuggestions } from 'src/peregrine/lib/talons/adeoweb/SearchBar/useSuggestions';

import SuggestedProducts from './SuggestedProducts';

type TSuggestionsProps = {
    products?: TProductsSearch;
    setVisible: (isVisible: boolean) => void;
    visible: boolean;
};

const Suggestions: FunctionComponent<TSuggestionsProps> = ({
    products,
    setVisible,
    visible
}) => {
    const items = products && products.items ? products.items : [];

    const { onNavigate, shouldRender } = useSuggestions({
        items,
        setVisible,
        visible
    });

    if (!shouldRender) {
        return null;
    }

    return <SuggestedProducts onNavigate={onNavigate} products={items} />;
};

export default Suggestions;
