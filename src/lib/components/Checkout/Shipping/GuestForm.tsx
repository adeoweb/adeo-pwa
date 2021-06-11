import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from 'src/lib/components/Customer/LoginForm';
import GET_ALL_COUNTRIES from 'src/lib/queries/getAllCountries.graphql';
import { TShippingAddressFormValues } from 'src/lib/components/Checkout/Shipping/ShippingAddressFormTypes';
import ShippingAddressForm from 'src/lib/components/Checkout/Shipping/ShippingAddressForm';
import { Button } from 'react-bootstrap';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useAppContext } from 'src/peregrine/lib/context/adeoweb/app';
import { getTransformedAddress } from 'src/peregrine/lib/talons/adeoweb/Checkout/utils';
import { useShippingAddressForm } from 'src/peregrine/lib/talons/adeoweb/Checkout/useShippingAddressForm';
import { TShippingCartAddress } from 'src/lib/types/graphql/Cart';
import { CustomerModalTypes } from 'src/lib/constants/customer';

type TGuestFormProps = {
    onSubmit: (values: TShippingAddressFormValues) => void;
};

const GuestForm: FunctionComponent<TGuestFormProps> = ({ onSubmit }) => {
    const { t } = useTranslation();
    const [, { setCustomerModal }] = useAppContext();
    const [
        {
            details: { email, shipping_addresses: shippingAddresses }
        }
    ] = useCartContext();
    const shippingAddress =
        shippingAddresses && shippingAddresses.length > 0
            ? shippingAddresses[0]
            : ({} as TShippingCartAddress);

    const initialValues = {
        email: email || '',
        ...getTransformedAddress({ ...shippingAddress })
    };

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        countries,
        regions,
        isValid
    } = useShippingAddressForm({
        countriesQuery: GET_ALL_COUNTRIES,
        initialValues,
        onSubmit
    });

    const onForgotPasswordClick = () => {
        setCustomerModal(CustomerModalTypes.PASSWORD_RECOVERY);
    };

    return (
        <Fragment>
            <LoginForm openForgotPassword={onForgotPasswordClick} />
            <ShippingAddressForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
                countries={countries}
                regions={regions}
                isSignedIn={false}
            />
            <Button disabled={!isValid} onClick={() => handleSubmit()}>
                {t('Submit')}
            </Button>
        </Fragment>
    );
};

export default GuestForm;
