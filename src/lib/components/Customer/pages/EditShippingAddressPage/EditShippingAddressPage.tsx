import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CustomerAddressForm } from 'src/lib/components/Customer';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import { useHistory } from 'src/lib/drivers';
import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import UPDATE_CUSTOMER_ADDRESS_MUTATION from 'src/lib/queries/updateCustomerAddress.graphql';
import { useEditCustomerAddress } from 'src/peregrine/lib/talons/adeoweb/Customer/useEditCustomerAddress';

const EditShippingAddressPage: FunctionComponent = () => {
    const { t } = useTranslation(['common', 'address']);
    const history = useHistory();

    const goBack = useCallback(() => {
        history.push(CustomerRoutes.shipping.url);
    }, [history]);

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isValid,
        isSubmitted,
        isUpdatingAddress,
        updateAddressError
    } = useEditCustomerAddress({
        countriesQuery: GET_ALL_COUNTRIES,
        getCustomerQuery: GET_CUSTOMER_QUERY,
        updateCustomerAddressMutation: UPDATE_CUSTOMER_ADDRESS_MUTATION
    });

    useEffect(() => {
        if (isSubmitted && !isUpdatingAddress && !updateAddressError) {
            goBack();
        }
    }, [isSubmitted, isUpdatingAddress, updateAddressError, goBack]);

    return (
        <div>
            <Button variant="link" className="px-0 mb-2" onClick={goBack}>
                <i className="fas fa-arrow-left mr-2" />
                {t('common:Back')}
            </Button>
            <h3>{t('address:Edit shipping info')}</h3>
            <CustomerAddressForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
                countries={countries}
                regions={regions}
                isForShipping={true}
            />
            <Button
                variant="outline-secondary"
                className="mr-4"
                onClick={goBack}
            >
                {t('common:Cancel')}
            </Button>
            <Button
                variant="primary"
                disabled={!isValid || isUpdatingAddress}
                onClick={() => handleSubmit()}
            >
                {t('common:Save')}
            </Button>
        </div>
    );
};

export default EditShippingAddressPage;
