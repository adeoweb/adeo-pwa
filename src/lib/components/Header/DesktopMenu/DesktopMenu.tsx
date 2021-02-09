import React, { FunctionComponent } from 'react';
import { useMenu } from 'src/peregrine/lib/talons/adeoweb/Menu/useMenu';
import GET_MENU_QUERY from 'src/lib/queries/getMenu.graphql';
import FirstLevelMenu from 'src/lib/components/Header/DesktopMenu/FirstLevelMenu';
import SimpleError from 'src/lib/components/SimpleError';

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
