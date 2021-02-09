import React, { FunctionComponent, useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import ChevronIcon from 'src/lib/assets/icons/ChevronIcon';

interface IDetailsAccordionProps {
    startExpanded?: boolean;
    title: string;
    contentContainerClass?: string;
    lockToggle?: boolean;
}

const DetailsAccordion: FunctionComponent<IDetailsAccordionProps> = ({
    startExpanded = false,
    children,
    title,
    contentContainerClass = '',
    lockToggle
}) => {
    const [toggleStatus, setToggleStatus] = useState(startExpanded);

    const handleToggleClick = () => {
        if (!lockToggle) {
            setToggleStatus(!toggleStatus);
        }
    };

    return (
        <Accordion
            activeKey={toggleStatus ? 'details' : undefined}
            className={`customer-order-accordion ${
                toggleStatus ? 'customer-order-accordion-open' : ''
            }`}
        >
            <Card>
                <Accordion.Toggle
                    onClick={handleToggleClick}
                    eventKey={'details'}
                    className="customer-order-accordion-toggle"
                >
                    <div>{title}</div>
                    {!lockToggle && (
                        <ChevronIcon svgClass="customer-order-accordion-chevron" />
                    )}
                </Accordion.Toggle>
                <Accordion.Collapse
                    eventKey={'details'}
                    className="customer-order-accordion-collapse"
                >
                    <div
                        className={`customer-order-accordion-content ${contentContainerClass}`}
                    >
                        {children}
                    </div>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default DetailsAccordion;
