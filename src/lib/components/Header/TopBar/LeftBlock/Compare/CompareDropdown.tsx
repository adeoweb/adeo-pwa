import React, { FunctionComponent } from 'react';
import CompareProductList from './CompareProductList';
import CompareButtonBlock from './CompareButtonBlock';
import { useCompareDropdown } from 'src/peregrine/lib/talons/adeoweb/Product/useCompareDropdown';

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
