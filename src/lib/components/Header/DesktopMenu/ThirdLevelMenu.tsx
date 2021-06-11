import React, { FunctionComponent } from 'react';

import { Link } from 'src/lib/drivers';
import { TCategoryTree } from 'src/lib/types/graphql/Category';

interface IMenuProps {
    menuChildren: TCategoryTree[];
}

const ThirdLevelMenu: FunctionComponent<IMenuProps> = ({ menuChildren }) => {
    if (!menuChildren.length) {
        return null;
    }

    return (
        <ul>
            {menuChildren.map(({ name, url_path: urlPath }, index) => {
                const itemKey = `${name}-${index}`;

                if (!name || !urlPath) {
                    return null;
                }

                return (
                    <li key={itemKey}>
                        <Link to={urlPath}>{name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ThirdLevelMenu;
