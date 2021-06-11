import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

const TopBar: FunctionComponent = () => {
    return (
        <div className="header-top">
            <Container>
                <LeftBlock />
                <RightBlock />
            </Container>
        </div>
    );
};

export default TopBar;
