import { TUseCompareDropdown } from 'src/peregrine/lib/talons/adeoweb/Product/useCompareDropdown';

const compareDropdownTestRef = { current: null };

const mock: TUseCompareDropdown = {
    compareDropdownOpen: false,
    openCompareDropdown: () => {},
    compareDropdownRef: compareDropdownTestRef
};

export default mock;
