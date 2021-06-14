import React, { FunctionComponent } from 'react';

import LinkList from './LinkList';
import WelcomeMessage from './WelcomeMessage';

const RightBlock: FunctionComponent = () => {
    return (
        <div className="header-right">
            <WelcomeMessage />
            <div className="header-dropdown dropdown-expanded">
                <div className="links-button">Links</div>
                <LinkList />
            </div>
        </div>
    );
};

export default RightBlock;
