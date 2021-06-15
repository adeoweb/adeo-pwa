import React, { FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import classes from './styles/ContactDetails.scss';

const ContactDetails: FunctionComponent = () => {
    const { t } = useTranslation('common');

    return (
        <Col md={4}>
            <h2 className="light-title">
                <strong>{t('Contact Details')}</strong>
            </h2>
            <section className={classes.contactInfo}>
                <article>
                    <a className={classes.contactLine} href="tel:+37067647849">
                        +370 676 47 849
                    </a>
                    <a className={classes.contactLine} href="tel:+13122248950">
                        +1.312.224.8950
                    </a>
                    <a className={classes.contactLine} href="tel:+460709946900">
                        +46 (0) 709 946900
                    </a>
                </article>
                <article>
                    <a
                        className={classes.contactLine}
                        href="mailto:info@adeoweb.biz"
                    >
                        info@adeoweb.biz
                    </a>
                    <a
                        className={classes.contactLine}
                        href="mailto:sales@adeoweb.biz"
                    >
                        sales@adeoweb.biz
                    </a>
                    <a
                        className={classes.contactLine}
                        href="mailto:info@adeoweb.se"
                    >
                        info@adeoweb.se
                    </a>
                </article>
            </section>
        </Col>
    );
};

export default ContactDetails;
