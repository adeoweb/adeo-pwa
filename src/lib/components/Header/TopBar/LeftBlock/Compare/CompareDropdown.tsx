import React, { FunctionComponent } from 'react';

import { useCompareDropdown } from 'src/peregrine/lib/talons/adeoweb/Product/useCompareDropdown';

import CompareButtonBlock from './CompareButtonBlock';
import CompareProductList from './CompareProductList';

const CompareDropdown: FunctionComponent = () => {
    const { compareDropdownOpen, compareDropdownRef } = useCompareDropdown();

    return (
        <div
            className={`dropdown-menu${compareDropdownOpen ? ` show` : ``}`}
            ref={compareDropdownRef}
        >
            <div className="dropdownmenu-wrapper">
                <CompareProductList />
                <CompareButtonBlock />
            </div>
        </div>
    );
};

export default CompareDropdown;
