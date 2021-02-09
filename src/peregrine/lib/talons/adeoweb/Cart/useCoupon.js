import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';

export const useCoupon = props => {
    const { applyCouponToCartMutation, removeCouponFromCartMutation } = props;
    const [
        {
            details: { applied_coupons: appliedCoupons, prices },
            derivedDetails
        }
    ] = useCartContext();

    const { currencyCode } = derivedDetails;
    const discount =
        prices && prices.discounts && prices.discounts.length
            ? prices.discounts[0].amount.value
            : null;
    const appliedCouponCode = (appliedCoupons || []).length
        ? appliedCoupons[0].code
        : null;
    const [
        { applyCouponError, isSubmitting },
        { applyCoupon, removeCoupon }
    ] = useCheckoutContext();
    const [couponCode, setCouponCode] = useState('');
    const [applyCouponToCart] = useMutation(applyCouponToCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });
    const [removeCouponFromCart] = useMutation(removeCouponFromCartMutation, {
        fetchPolicy: fetchPolicy.mutations.default
    });

    const submit = useCallback(() => {
        if (couponCode) {
            applyCoupon({
                couponCode,
                applyCouponToCart
            });
        }
    }, [couponCode, applyCoupon, applyCouponToCart]);

    const remove = useCallback(() => {
        removeCoupon({
            removeCouponFromCart
        });
    }, [removeCoupon, removeCouponFromCart]);

    const handleInputChange = useCallback(
        e => {
            setCouponCode(e.target.value);
        },
        [setCouponCode]
    );

    const handleKeyDown = useCallback(
        e => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                submit();
            }
        },
        [submit]
    );

    return {
        appliedCouponCode,
        discount,
        currencyCode,
        couponCode,
        error: applyCouponError,
        isSubmitting,
        handleInputChange,
        handleKeyDown,
        submit,
        remove
    };
};
