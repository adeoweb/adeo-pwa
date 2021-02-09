import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

const PageHeader: FunctionComponent = ({ children }) => {
    return (
        <div className="page-header">
            <Container>
                <h1>{children}</h1>
            </Container>
        </div>
    );
};

export default PageHeader;
