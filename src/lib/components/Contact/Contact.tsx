import React, { FunctionComponent } from 'react';
import Map from './Map';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import { Container, Row } from 'react-bootstrap';
import { mapSrc } from './mapSrc';

const Contact: FunctionComponent = () => {
    return (
        <div className="page-main">
            <div className="page-title-wrapper">
                <Container>
                    <Map
                        src={mapSrc}
                        width={'100%'}
                        height={'460px'}
                        allowFullScreen={true}
                    />
                    <div className="mb-4" />
                    <Row>
                        <ContactForm />
                        <ContactDetails />
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
