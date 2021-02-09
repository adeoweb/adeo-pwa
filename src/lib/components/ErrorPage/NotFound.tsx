import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Container, Row } from 'react-bootstrap';

type TNotFoundProps = {
    goHome: () => void;
};

const NotFound: FunctionComponent<TNotFoundProps> = ({ goHome }) => {
    const { t } = useTranslation();

    return (
        <Container className="error-page-wrapper">
            <Row>
                <Col>
                    <div className="error-type">404</div>
                    <div className="error-title">
                        {t('The page you are looking for could not be found')}
                    </div>
                    <div className="error-subtitle">
                        {t('This page does not exist or has been removed.')}
                    </div>
                    <div className="error-actions">
                        <Button variant="primary" onClick={goHome}>
                            {t('Take me home')}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
