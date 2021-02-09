import React, { FunctionComponent } from 'react';
import SimpleError from 'src/lib/components/SimpleError';
import { TCategoryTree } from 'src/lib/types/graphql/Category';
import { Link } from 'src/lib/drivers';

interface IMenuProps {
    menuChildren: TCategoryTree[];
}

const ThirdLevelMenu: FunctionComponent<IMenuProps> = ({ menuChildren }) => {
    if (!Array.isArray(menuChildren)) {
        return <SimpleError />;
    }

    if (!menuChildren) {
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
