import React, { FunctionComponent } from 'react';

import FirstLevelMenu from 'src/lib/components/Header/DesktopMenu/FirstLevelMenu';
import SimpleError from 'src/lib/components/SimpleError';
import GET_MENU_QUERY from 'src/lib/queries/getMenu.graphql';
import { useMenu } from 'src/peregrine/lib/talons/adeoweb/Menu/useMenu';

const DesktopMenu: FunctionComponent = () => {
    const { error, children: firstLevelMenu } = useMenu({
        getMenuQuery: GET_MENU_QUERY
    });

    if (error || !Array.isArray(firstLevelMenu)) {
        return <SimpleError />;
    }

    return (
        <nav className="main-nav">
            <FirstLevelMenu menuChildren={firstLevelMenu} />
        </nav>
    );
};

export default DesktopMenu;
