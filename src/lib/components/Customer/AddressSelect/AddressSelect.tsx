import { useMutation } from '@apollo/react-hooks';
import React, {
    Fragment,
    FunctionComponent,
    useCallback,
    useEffect,
    useState
} from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { OperationVariables } from '@apollo/client';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import {
    CustomerAddressForm,
    CustomerAddressList
} from 'src/lib/components/Customer';
import CREATE_CUSTOMER_ADDRESS_MUTATION from 'src/lib/queries/createCustomerAddress.graphql';
import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import GET_CUSTOMER_QUERY from 'src/lib/queries/getCustomer.graphql';
import { TCustomer } from 'src/lib/types/graphql/Customer';
import { useUserContext } from 'src/peregrine/lib/context/adeoweb/user';
import { useCustomerAddressForm } from 'src/peregrine/lib/talons/adeoweb/Customer/useCustomerAddressForm';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

type TAddressSelectProps = {
    selectedAddressId?: number | null;
    onAddressSelect: (id: number) => void;
    isForBilling?: boolean;
    isForShipping?: boolean;
};

const AddressSelect: FunctionComponent<TAddressSelectProps> = ({
    selectedAddressId,
    onAddressSelect,
    isForBilling = false,
    isForShipping = false
}) => {
    const { t } = useTranslation(['common', 'address']);
    const [showAddAddress, setShowAddAddress] = useState(false);
    const fetchUserDetails = useAwaitQuery<TCustomer, OperationVariables>(
        GET_CUSTOMER_QUERY
    );
    const [createCustomerAddressQuery] = useMutation(
        CREATE_CUSTOMER_ADDRESS_MUTATION,
        {
            fetchPolicy: fetchPolicy.mutations.default
        }
    );

    const [
        {
            currentUser: { addresses: customerAddresses },
            isCreatingAddress
        },
        { createCustomerAddress }
    ] = useUserContext();

    const addresses = filterOutNullableValues(customerAddresses);

    const hideAddAddressForm = useCallback(() => {
        setShowAddAddress(false);
    }, [setShowAddAddress]);

    const handleSubmitNewAddress = useCallback(
        async values => {
            await createCustomerAddress({
                address: values,
                // @ts-ignore
                createCustomerAddress: createCustomerAddressQuery,
                fetchUserDetails
            });
            hideAddAddressForm();
        },
        [
            createCustomerAddress,
            createCustomerAddressQuery,
            fetchUserDetails,
            hideAddAddressForm
        ]
    );

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        resetForm,
        values,
        errors,
        touched,
        countries,
        regions,
        isValid,
        isDirty
    } = useCustomerAddressForm({
        countriesQuery: GET_ALL_COUNTRIES,
        onSubmit: handleSubmitNewAddress
    });

    const showAddAddressForm = useCallback(() => {
        setShowAddAddress(true);
        resetForm();
    }, [setShowAddAddress, resetForm]);

    const handleAddressSelect = useCallback(
        e => {
            if (e.target.value) {
                onAddressSelect(parseInt(e.target.value, 10));
            }
        },
        [onAddressSelect]
    );

    useEffect(() => {
        if (addresses.length === 0 && !showAddAddress) {
            showAddAddressForm();
        }
    }, [addresses.length, showAddAddress, showAddAddressForm]);

    return (
        <Fragment>
            {!showAddAddress && (
                <Fragment>
                    <div className="mt-2" />
                    <CustomerAddressList
                        addresses={addresses}
                        onChange={handleAddressSelect}
                        selectedAddressId={selectedAddressId}
                    />
                    <Button onClick={showAddAddressForm}>
                        {t('address:Add new address')}
                    </Button>
                </Fragment>
            )}
            {showAddAddress && (
                <Fragment>
                    <CustomerAddressForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                        countries={countries}
                        regions={regions}
                        isForBilling={isForBilling}
                        isForShipping={isForShipping}
                    />
                    <div className="form-footer">
                        <Button
                            variant="primary"
                            disabled={!isValid || !isDirty || isCreatingAddress}
                            onClick={() => handleSubmit()}
                        >
                            {t('common:Submit')}
                        </Button>
                        {addresses.length > 0 && (
                            <Button
                                variant="secondary"
                                onClick={hideAddAddressForm}
                            >
                                {t('common:Cancel')}
                            </Button>
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default AddressSelect;
