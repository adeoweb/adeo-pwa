import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomerRoutes } from 'src/lib/components/Customer/CustomerRoutes';
import { useHistory } from 'src/lib/drivers';
import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import { CustomerAddressForm } from 'src/lib/components/Customer';
import { Button } from 'react-bootstrap';
import CREATE_CUSTOMER_ADDRESS_MUTATION from 'src/lib/queries/createCustomerAddress.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import { useCreateCustomerAddress } from 'src/peregrine/lib/talons/adeoweb/Customer/useCreateCustomerAddress';

const AddShippingAddressPage: FunctionComponent = () => {
    const { t } = useTranslation();
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
        isDirty,
        isValid,
        isSubmitted,
        isCreatingAddress,
        createAddressError
    } = useCreateCustomerAddress({
        countriesQuery: GET_ALL_COUNTRIES,
        getCustomerQuery: GET_CUSTOMER_QUERY,
        createCustomerAddressMutation: CREATE_CUSTOMER_ADDRESS_MUTATION
    });

    useEffect(() => {
        if (isSubmitted && !isCreatingAddress && !createAddressError) {
            goBack();
        }
    }, [isSubmitted, isCreatingAddress, createAddressError, goBack]);

    return (
        <div>
            <Button variant="link" className="px-0 mb-2" onClick={goBack}>
                <i className="fas fa-arrow-left mr-2" />
                {t('Back')}
            </Button>
            <h3>{t('Add shipping info')}</h3>
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
                {t('Cancel')}
            </Button>
            <Button
                variant="primary"
                disabled={!isDirty || !isValid || isCreatingAddress}
                onClick={() => handleSubmit()}
            >
                {t('Save')}
            </Button>
        </div>
    );
};

export default AddShippingAddressPage;
