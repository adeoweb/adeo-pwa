import React, { FunctionComponent } from 'react';

import MenuList from 'src/lib/components/MobileMenu/MenuList';
import SimpleError from 'src/lib/components/SimpleError';
import GET_MENU_QUERY from 'src/lib/queries/getMenu.graphql';
import { useMobileMenu } from 'src/peregrine/lib/talons/adeoweb/Header/useMobileMenu';
import { useMenu } from 'src/peregrine/lib/talons/adeoweb/Menu/useMenu';

const MobileMenu: FunctionComponent = () => {
    const { isOpen, handleClose } = useMobileMenu();
    const { error, children: firstLevelMenu } = useMenu({
        getMenuQuery: GET_MENU_QUERY
    });

    if (error || !Array.isArray(firstLevelMenu)) {
        return <SimpleError />;
    }

    return (
        <div className={isOpen ? 'mmenu-active' : ''}>
            <div
                className="mobile-menu-overlay"
                onClick={handleClose}
                onKeyDown={handleClose}
                role="button"
                tabIndex={0}
            />
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <button className="mobile-menu-close" onClick={handleClose}>
                        <i className="icon-cancel" />
                    </button>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <MenuList
                                items={firstLevelMenu}
                                handleClose={handleClose}
                            />
                        </ul>
                    </nav>

                    {/* TODO: add actual links */}
                    <div className="social-icons">
                        <a href="/" className="social-icon" target="_blank">
                            <i className="icon-facebook" />
                        </a>
                        <a href="/" className="social-icon" target="_blank">
                            <i className="icon-twitter" />
                        </a>
                        <a href="/" className="social-icon" target="_blank">
                            <i className="icon-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
