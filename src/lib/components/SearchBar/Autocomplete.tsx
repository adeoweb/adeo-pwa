import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import PRODUCT_SEARCH from '../../queries/productSearch.graphql';
import { useAutocomplete } from 'src/peregrine/lib/talons/adeoweb/SearchBar/useAutocomplete';
import Suggestions from 'src/lib/components/SearchBar/Suggestions';

type TAutocompleteProps = {
    setVisible: (isVisible: boolean) => void;
    visible: boolean;
    searchValue: string;
};

const MESSAGES = new Map()
    .set('ERROR', 'An error occurred while fetching results.')
    .set('LOADING', 'Fetching results...')
    .set('PROMPT', 'Search for a product')
    .set('EMPTY_RESULT', 'No results were found.');

const Autocomplete: FunctionComponent<TAutocompleteProps> = ({
    setVisible,
    visible,
    searchValue
}) => {
    const { t } = useTranslation();
    const { messageType, products } = useAutocomplete({
        query: PRODUCT_SEARCH,
        visible,
        value: searchValue
    });
    const wrapperClass = `autocomplete-suggestions${visible ? ' show' : ''}`;
    const message = t(MESSAGES.get(messageType));

    return (
        <div className={wrapperClass}>
            {message && <div className="autocomplete-title">{message}</div>}
            <Suggestions
                products={products}
                setVisible={setVisible}
                visible={visible}
            />
        </div>
    );
};

export default Autocomplete;
