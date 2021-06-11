import React, { FunctionComponent } from 'react';
import { Form, FormCheck } from 'react-bootstrap';

import SET_PAYMENT_METHOD_ON_CART_MUTATION from 'src/lib/queries/setPaymentMethodOnCart.graphql';
import { usePaymentMethodSelect } from 'src/peregrine/lib/talons/adeoweb/Checkout/usePaymentMethodSelect';

const PaymentMethodSelect: FunctionComponent = () => {
    const {
        availablePaymentMethods: methods,
        handlePaymentMethodSelect: onSelect,
        selectedPaymentMethodCode: selectedCode,
        isDisabled
    } = usePaymentMethodSelect({
        setPaymentMethodOnCartMutation: SET_PAYMENT_METHOD_ON_CART_MUTATION
    });

    return (
        <ul>
            {methods.map(({ code, title }) => (
                <li key={code}>
                    <Form.Check id={code}>
                        <FormCheck.Input
                            type="radio"
                            name="paymentMethod"
                            checked={selectedCode === code}
                            onChange={() => onSelect({ code })}
                            disabled={isDisabled}
                        />
                        <FormCheck.Label>{title}</FormCheck.Label>
                    </Form.Check>
                </li>
            ))}
        </ul>
    );
};

export default PaymentMethodSelect;
