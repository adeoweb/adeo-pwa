import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import PdfIcons from 'src/lib/assets/icons/PdfIcons';
import DetailsAccordion from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsAccordion';
import { TCustomerOrder } from 'src/lib/types/graphql/Customer';

interface IDetailsGeneralProps {
    order: TCustomerOrder;
}

const DetailsGeneral: FunctionComponent<IDetailsGeneralProps> = ({ order }) => {
    const { t } = useTranslation('order');

    const { created_at: createdAt, order_number: orderNumber, status } = order;

    return (
        <DetailsAccordion
            title={t('Order information')}
            startExpanded={true}
            contentContainerClass="customer-order-general"
            lockToggle={true}
        >
            <div className="customer-order-general-block">
                <div className="customer-order-font-description">
                    {t('Order No.')}
                </div>
                <div className="customer-order-font-info">{orderNumber}</div>
            </div>
            <div className="customer-order-general-block">
                <div className="customer-order-font-description">
                    {t('Status')}
                </div>
                <div className="customer-order-font-info">{status}</div>
            </div>
            <div className="customer-order-general-block">
                <div className="customer-order-font-description">
                    {t('Invoice')}
                </div>
                {/* TODO: add link to invoice when backend is done */}
                {/*<Link to="/" className="customer-order-font-info">*/}
                {/*    <PdfIcons />*/}
                {/*    {orderNumber}.pdf*/}
                {/*</Link>*/}
                <div className="customer-order-font-info">
                    <PdfIcons />
                    {orderNumber}.pdf
                </div>
            </div>
            <div className="customer-order-general-block">
                <div className="customer-order-font-description">
                    {t('Date of order')}
                </div>
                <div className="customer-order-font-info">{createdAt}</div>
            </div>
        </DetailsAccordion>
    );
};

export default DetailsGeneral;
