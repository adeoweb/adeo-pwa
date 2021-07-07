import React, { FunctionComponent, useCallback } from 'react';
import { TFuncKey, useTranslation } from 'react-i18next';

import { navIcons } from './buttonVariables';

interface INavButtonProps {
    name: string;
    label: TFuncKey<'navigation'>;
    active: boolean;
    onClick: () => void;
    url: string;
}

const NavButton: FunctionComponent<INavButtonProps> = ({
    name,
    label,
    active,
    onClick,
    url
}) => {
    const { t } = useTranslation('navigation');

    const handleClick = useCallback(
        event => {
            event.preventDefault();
            onClick();
        },
        [onClick]
    );

    return (
        <li
            className={`page-item ${active ? '' : 'disabled'}`}
            aria-label={t(label)}
        >
            <a
                className="page-link page-link-btn"
                onClick={handleClick}
                href={url}
            >
                <i className={navIcons[name]} />
            </a>
        </li>
    );
};

export default NavButton;
