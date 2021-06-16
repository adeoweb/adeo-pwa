import React, { FunctionComponent } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type TInternalErrorProps = {
    goBack: () => void;
    goHome: () => void;
};

const InternalError: FunctionComponent<TInternalErrorProps> = ({
    goBack,
    goHome
}) => {
    const { t } = useTranslation('navigation');

    return (
        <Container className="error-page-wrapper">
            <Row>
                <Col>
                    <div className="error-type">500</div>
                    <div className="error-title">
                        {t('Internal server error')}
                    </div>
                    <div className="error-subtitle">
                        {t(
                            'Sorry, there were some technical issues while processing your request.'
                        )}
                    </div>
                    <div className="error-subtitle">
                        {t('We will try to fix this as fast as possible.')}
                    </div>
                    <div className="error-actions">
                        <Button variant="outline-primary" onClick={goBack}>
                            {t('Previous page')}
                        </Button>
                        <Button variant="primary" onClick={goHome}>
                            {t('Take me home')}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default InternalError;
