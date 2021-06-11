import React, { FunctionComponent } from 'react';
import SearchField from './SearchField';
import SearchTrigger from './SearchTrigger';
import { Form } from 'react-bootstrap';
import Autocomplete from './Autocomplete';
import { useSearchBar } from 'src/peregrine/lib/talons/adeoweb/SearchBar/useSearchBar';

type TSearchBarProps = {
    handleTriggerClick: () => void;
    isOpen: boolean;
};

const SearchBar: FunctionComponent<TSearchBarProps> = ({
    handleTriggerClick,
    isOpen
}) => {
    const { containerRef, handleFocus, setExpanded, expanded, form } =
        useSearchBar();
    const { values, handleSubmit, handleChange, setFieldValue } = form;
    const { search_query: searchQuery } = values;
    const wrapperClass = `header-search-wrapper${isOpen ? ' show' : ''}`;

    return (
        <div className="header-search" ref={containerRef}>
            <SearchTrigger onClick={handleTriggerClick} />
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <div className={wrapperClass}>
                    <SearchField
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={searchQuery}
                        setFieldValue={setFieldValue}
                    />
                    <Autocomplete
                        setVisible={setExpanded}
                        visible={expanded}
                        searchValue={searchQuery}
                    />
                </div>
            </Form>
        </div>
    );
};

export default SearchBar;
