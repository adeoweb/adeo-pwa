import React, { FunctionComponent } from 'react';

import paymentsImage from './payments.png';

const PaymentMethods: FunctionComponent = () => {
    return (
        <img
            src={paymentsImage}
            alt="payment methods"
            className="footer-payments"
        />
    );
};

export default PaymentMethods;
