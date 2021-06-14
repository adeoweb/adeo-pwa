import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import DetailsAccordion from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsAccordion';
// import swedbankLogo from 'src/lib/assets/images/swedbank_logo.png';
import { TOrderBillingAddress } from 'src/lib/types/graphql/Customer';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';

interface IDetailsPaymentProps {
    billingAddress: TOrderBillingAddress;
}

const DetailsPayment: FunctionComponent<IDetailsPaymentProps> = ({
    billingAddress
}) => {
    const { t } = useTranslation();
    const [{ currentUser }] = useUserContext();

    const { firstname, lastname, telephone, street, city, postcode } =
        billingAddress;

    // TODO: get customer email for order from backend
    const email = (currentUser && currentUser.email) || null;

    return (
        <DetailsAccordion
            title={t('Payment information')}
            contentContainerClass="customer-order-payment"
        >
            <div className="customer-order-font-emphasised">
                {t('Electronic banking and other methods')}
            </div>
            {/* TODO: uncomment when ready */}
            {/*<img*/}
            {/*    // TODO: get logo based on backend data*/}
            {/*    src={swedbankLogo}*/}
            {/*    // TODO: add logo title*/}
            {/*    alt=""*/}
            {/*    className="customer-order-payment-logo"*/}
            {/*/>*/}
            <div className="customer-order-payment-customer">
                <div className="customer-order-payment-info-block">
                    <div className="customer-order-font-description">
                        {`${t('First Name')}, ${t('Last Name')}`}
                    </div>
                    <div className="customer-order-font-info">{`${firstname} ${lastname}`}</div>
                </div>
                <div className="customer-order-payment-info-block">
                    <div className="customer-order-font-description">
                        {t('Email ')}
                    </div>
                    <div className="customer-order-font-info">{email}</div>
                </div>
                <div className="customer-order-payment-info-block">
                    <div className="customer-order-font-description">
                        {t('Phone Number')}
                    </div>
                    <div className="customer-order-font-info">{telephone}</div>
                </div>
                <div className="customer-order-payment-info-block">
                    <div className="customer-order-font-description">
                        {t('Address')}
                    </div>
                    <div className="customer-order-font-info">
                        {`${street}, ${city}, ${postcode}`}
                    </div>
                </div>
            </div>
        </DetailsAccordion>
    );
};

export default DetailsPayment;
