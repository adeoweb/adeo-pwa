import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerRouting from 'src/lib/components/Customer/CustomerRouting';
import Menu from 'src/lib/components/Customer/Menu';
import NotAuthUserToLogin from 'src/lib/components/NotAuthUserToLogin';

const Customer: FunctionComponent = () => {
    return (
        <NotAuthUserToLogin>
            <Container>
                <div className="mb-3" />
                <Row>
                    <Col
                        lg={9}
                        className="order-lg-last dashboard-content customer-content-wrapper"
                    >
                        <CustomerRouting />
                    </Col>
                    <Col lg={3} className="sidebar">
                        <Menu />
                    </Col>
                </Row>
            </Container>
        </NotAuthUserToLogin>
    );
};

export default Customer;
