import React, { FunctionComponent } from 'react';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import { Container } from 'react-bootstrap';

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
