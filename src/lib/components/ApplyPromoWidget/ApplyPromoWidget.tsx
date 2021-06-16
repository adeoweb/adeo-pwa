import React, { Fragment, useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Price from '@magento/peregrine/lib/Price';

import APPLY_COUPON_TO_CART_MUTATION from 'src/lib/queries/applyCouponToCart.graphql';
import REMOVE_COUPON_FROM_CART_MUTATION from 'src/lib/queries/removeCouponFromCart.graphql';
import { useCoupon } from 'src/peregrine/lib/talons/adeoweb/Cart/useCoupon';

const ApplyPromoWidget: React.FunctionComponent = () => {
    const { t } = useTranslation('order');
    const [isOpen, setIsOpen] = useState(false);
    const {
        appliedCouponCode,
        discount,
        currencyCode,
        couponCode,
        error,
        isSubmitting,
        handleInputChange,
        handleKeyDown,
        submit,
        remove
    } = useCoupon({
        applyCouponToCartMutation: APPLY_COUPON_TO_CART_MUTATION,
        removeCouponFromCartMutation: REMOVE_COUPON_FROM_CART_MUTATION
    });

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="promo-wrapper">
            <Button variant="link" className="promo-trigger" onClick={toggle}>
                {t('Got a promo code or voucher?')}
                {isOpen ? (
                    <i className="fas fa-angle-up" />
                ) : (
                    <i className="fas fa-angle-down" />
                )}
            </Button>
            <Card
                className={`promo-card${
                    appliedCouponCode ? ' promo-card-applied' : ''
                }${isOpen ? ' open' : ''}`}
            >
                <Card.Title>
                    {appliedCouponCode
                        ? t('Promo/voucher code')
                        : t('Add a promo/voucher code')}
                </Card.Title>
                {appliedCouponCode ? (
                    <Fragment>
                        <div>
                            <span className="promo-text">
                                {appliedCouponCode}
                            </span>
                            {discount && (
                                <span>
                                    {t('Saving')}{' '}
                                    <Price
                                        value={discount}
                                        currencyCode={currencyCode}
                                    />
                                </span>
                            )}
                        </div>

                        <button
                            onClick={remove}
                            className="btn btn-promo-remove"
                            disabled={isSubmitting}
                        >
                            <i className="fas fa-times " />
                        </button>
                    </Fragment>
                ) : (
                    <InputGroup className="promo-input">
                        <Form.Control
                            type="text"
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            value={couponCode}
                            isInvalid={Boolean(error)}
                        />
                        <InputGroup.Append
                            as={Button}
                            disabled={!couponCode || isSubmitting}
                            variant="secondary"
                            onClick={submit}
                        >
                            {t('Apply code')}
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">
                            {error && error.toString()}
                        </Form.Control.Feedback>
                    </InputGroup>
                )}
            </Card>
        </div>
    );
};

export default ApplyPromoWidget;
