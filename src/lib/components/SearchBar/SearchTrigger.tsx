import React, { FunctionComponent } from 'react';

import { useSearchTrigger } from '@magento/peregrine/lib/talons/Header/useSearchTrigger';

type TSearchTriggerProps = {
    onClick: () => void;
};

const SearchTrigger: FunctionComponent<TSearchTriggerProps> = ({ onClick }) => {
    const { handleClick } = useSearchTrigger({
        onClick
    });

    return (
        <button className="search-toggle btn" onClick={handleClick}>
            <i className="icon-magnifier" />
        </button>
    );
};

export default SearchTrigger;
