import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import Copyright from './Copyright';
import AdeoWebSignature from 'src/lib/components/Footer/FooterBottom/AdeoWebSignature';

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
