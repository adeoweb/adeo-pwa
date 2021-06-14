import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

import AdeoWebSignature from 'src/lib/components/Footer/FooterBottom/AdeoWebSignature';

import Copyright from './Copyright';

const FooterBottom: FunctionComponent = () => {
    return (
        <Container>
            <div className="footer-bottom">
                <Copyright />
                <AdeoWebSignature />
            </div>
        </Container>
    );
};

export default FooterBottom;
