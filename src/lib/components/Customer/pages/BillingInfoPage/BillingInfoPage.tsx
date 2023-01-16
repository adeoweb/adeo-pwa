import React, { FunctionComponent, useCallback } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AddressCard from 'src/lib/components/Customer/AddressCard';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import LoadingIndicator from 'src/lib/components/LoadingIndicator';
import { useHistory } from 'src/lib/drivers';
import DELETE_CUSTOMER_ADDRESS_MUTATION from 'src/lib/queries/deleteCustomerAddress.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import UPDATE_CUSTOMER_ADDRESS_MUTATION from 'src/lib/queries/updateCustomerAddress.graphql';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useDeleteCustomerAddress } from 'src/peregrine/lib/talons/adeoweb/Customer/useDeleteCustomerAddress';
import { useSetDefaultCustomerAddress } from 'src/peregrine/lib/talons/adeoweb/Customer/useSetDefaultCustomerAddress';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

const BillingInfoPage: FunctionComponent = () => {
    const { t } = useTranslation(['common', 'address']);
    const history = useHistory();
    const { isDeletingAddress, deleteCustomerAddress } =
        useDeleteCustomerAddress({
            deleteCustomerAddressMutation: DELETE_CUSTOMER_ADDRESS_MUTATION
        });
    const { isUpdatingAddress, setCustomerDefaultAddress } =
        useSetDefaultCustomerAddress({
            updateCustomerAddressMutation: UPDATE_CUSTOMER_ADDRESS_MUTATION,
            getCustomerQuery: GET_CUSTOMER_QUERY,
            billing: true
        });
    const [
        {
            currentUser: { addresses }
        }
    ] = useUserContext();

    const customerAddresses = filterOutNullableValues(addresses);

    const handleAdd = useCallback(() => {
        history.push(CustomerRoutes.addBilling.url);
    }, [history]);

    const handleEdit = useCallback(
        (id: number) => {
            history.push(CustomerRoutes.editBilling.url + `?id=${id}`);
        },
        [history]
    );

    return (
        <div>
            {(isUpdatingAddress || isDeletingAddress) && <LoadingIndicator />}
            <h3>{t('address:Billing Information')}</h3>
            <Button
                variant="primary"
                size="sm"
                onClick={handleAdd}
                className="mb-2"
            >
                <i className="fas fa-plus" />
                {t('common:Add')}
            </Button>

            <Row>
                {customerAddresses.length ? (
                    customerAddresses.map(address => {
                        const {
                            id,
                            default_shipping: defaultShipping,
                            default_billing: defaultBilling
                        } = address;

                        return (
                            <Col key={id} sm={12} lg={6}>
                                <AddressCard
                                    address={address}
                                    isDefault={Boolean(defaultBilling)}
                                    onEdit={handleEdit}
                                    onDelete={deleteCustomerAddress}
                                    onDefaultChange={setCustomerDefaultAddress}
                                    isDeleteAllowed={
                                        !defaultShipping && !defaultBilling
                                    }
                                />
                            </Col>
                        );
                    })
                ) : (
                    <p className="text-center">
                        {t('address:No billing information')}
                    </p>
                )}
            </Row>
        </div>
    );
};

export default BillingInfoPage;
