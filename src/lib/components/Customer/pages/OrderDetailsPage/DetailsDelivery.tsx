import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import DetailsAccordion from 'src/lib/components/Customer/pages/OrderDetailsPage/DetailsAccordion';
import { TOrderShippingAddress } from 'src/lib/types/graphql/Customer';

interface IDetailsDeliveryProps {
    shippingAddress: TOrderShippingAddress;
}

const DetailsDelivery: FunctionComponent<IDetailsDeliveryProps> = ({
    shippingAddress
}) => {
    const { t } = useTranslation();
    const [{ currentUser }] = useUserContext();

    if (!shippingAddress) {
        return null;
    }

    const {
        firstname,
        lastname,
        telephone,
        customer_notes: customerNotes,
        street: customerStreet,
        city: customerCity,
        postcode: customerPostcode
    } = shippingAddress;

    // TODO: get customer email for order from backend
    const email = (currentUser && currentUser.email) || null;

    return (
        <DetailsAccordion
            title={t('Delivery information')}
            contentContainerClass="customer-order-delivery"
        >
            <div className="customer-order-delivery-recipient">
                <div className="customer-order-delivery-info-block">
                    <div className="customer-order-font-description">
                        {`${t('First Name')}, ${t('Last Name')}`}
                    </div>
                    <div className="customer-order-font-info">{`${firstname} ${lastname}`}</div>
                </div>
                <div className="customer-order-delivery-info-block">
                    <div className="customer-order-font-description">
                        {t('Email ')}
                    </div>
                    <div className="customer-order-font-info">{email}</div>
                </div>
                <div className="customer-order-delivery-info-block">
                    <div className="customer-order-font-description">
                        {t('Phone Number')}
                    </div>
                    <div className="customer-order-font-info">{telephone}</div>
                </div>
            </div>
            <div>
                {/* TODO: uncomment when readdy */}
                {/*<div className="customer-order-font-emphasised">*/}
                {/*    /!* TODO: add courier logo and tittle *!/*/}
                {/*    Courier title*/}
                {/*</div>*/}
                <div className="customer-order-delivery-location">
                    <div className="customer-order-delivery-info-block">
                        <div className="customer-order-font-description">
                            {t('Address')}
                        </div>
                        <div className="customer-order-font-info">
                            {`${customerStreet}, ${customerCity}, ${customerPostcode}`}
                        </div>
                    </div>
                    <div className="customer-order-delivery-info-block">
                        <div className="customer-order-font-description">
                            {t('Phone Number')}
                        </div>
                        {customerNotes && (
                            <div className="customer-order-font-info">
                                {customerNotes}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DetailsAccordion>
    );
};

export default DetailsDelivery;
