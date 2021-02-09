import React, { FunctionComponent, useState } from 'react';
import { Link, useLocation } from 'src/lib/drivers';
import { TCategoryTree } from 'src/lib/types/graphql/Category';
import MenuList from 'src/lib/components/MobileMenu/MenuList';

type TMenuItemProps = {
    item: TCategoryTree;
    handleClose: () => void;
};

const MenuItem: FunctionComponent<TMenuItemProps> = ({ item, handleClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { name, url_path: urlPath, children } = item;
    const hasChildren =
        Boolean(children) && Array.isArray(children) && children.length > 0;
    const isActive = location.pathname === urlPath;
    const classes: string[] = [];

    if (!name || !urlPath) {
        return null;
    }

    if (isActive) {
        classes.push('active');
    }

    if (isOpen) {
        classes.push('open');
    }

    const toggleOpen = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setIsOpen(!isOpen);
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <li className={classes.join(' ')}>
            <Link to={urlPath} onClick={handleClose}>
                {name}
                {hasChildren && children && (
                    <button onClick={toggleOpen} className="mmenu-btn" />
                )}
            </Link>
            {hasChildren && children && (
                <ul>
                    <MenuList items={children} handleClose={handleClose} />
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
