import React, { ChangeEvent, Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchField } from 'src/peregrine/lib/talons/adeoweb/SearchBar/useSearchField';

type TSearchFieldProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    value: string;
    setFieldValue: (field: string, value: string) => void;
};

const SearchField: FunctionComponent<TSearchFieldProps> = ({
    onChange,
    onFocus,
    value,
    setFieldValue
}) => {
    const { t } = useTranslation();
    useSearchField({ setFieldValue });

    return (
        <Fragment>
            <input
                className="form-control"
                name="search_query"
                onFocus={onFocus}
                onChange={onChange}
                value={value}
                placeholder={t('Search...')}
            />
            <button className="search-button btn">
                <i className="icon-magnifier" />
            </button>
        </Fragment>
    );
};

export default SearchField;
