import React, { FunctionComponent, useState } from 'react';
import { Link } from 'src/lib/drivers';
import SecondLevelMenu from 'src/lib/components/Header/DesktopMenu/SecondLevelMenu';
import SimpleError from 'src/lib/components/SimpleError';
import { TCategoryTree } from 'src/lib/types/graphql/Category';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

interface IFirstLevelMenuProps {
    menuChildren: TCategoryTree[];
}

let hoverTimer: any;

const FirstLevelMenu: FunctionComponent<IFirstLevelMenuProps> = ({
    menuChildren
}) => {
    const [active, setActive] = useState(0);
    const hoverDelay = 200;

    const toggleMenu = ({ index }: { index: number }) => {
        clearTimeout(hoverTimer);

        hoverTimer = setTimeout(() => {
            setActive(index);
        }, hoverDelay);
    };

    if (!Array.isArray(menuChildren)) {
        return <SimpleError />;
    }

    return (
        <nav className="main-nav">
            <ul
                className="menu sf-arrows sf-js-enabled"
                style={{ touchAction: 'pan-y' }}
            >
                {menuChildren.map(
                    (
                        { name, url_path: urlPath, children: secondLevelMenu },
                        index
                    ) => {
                        const currentIndex = index + 1;
                        const itemKey = `${name}-${index}`;
                        const isActive = active === currentIndex;
                        const secondLevelChildren = filterOutNullableValues(
                            secondLevelMenu
                        );
                        const haveChilds = secondLevelChildren.length > 0;
                        const showSecondLevel = isActive ? 'show' : '';

                        if (!name || !urlPath) {
                            return;
                        }

                        return (
                            <li
                                key={itemKey}
                                className={`megamenu-container ${showSecondLevel}`}
                                onMouseEnter={() => {
                                    toggleMenu({ index: currentIndex });
                                }}
                                onMouseLeave={() => toggleMenu({ index: 0 })}
                            >
                                <Link
                                    className={haveChilds ? 'sf-with-ul' : ''}
                                    to={urlPath}
                                >
                                    {name}
                                </Link>
                                {haveChilds &&
                                    Array.isArray(secondLevelMenu) && (
                                        <SecondLevelMenu
                                            menuChildren={secondLevelChildren}
                                            isActive={isActive}
                                        />
                                    )}
                            </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
};

export default FirstLevelMenu;
