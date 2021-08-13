import { DocumentNode } from 'graphql';

import { useMutation } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';

import { useCartContext } from 'src/peregrine/lib/context/adeoweb/cart';
import { useCheckoutContext } from 'src/peregrine/lib/context/adeoweb/checkout';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

type TUseCouponProps = {
    applyCouponToCartMutation: DocumentNode;
    removeCouponFromCartMutation: DocumentNode;
};

export type TUseCoupon = {
    appliedCouponCode?: string;
    discount?: number;
    currencyCode: string;
    couponCode: string;
    error?: string;
    isSubmitting: boolean;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
    handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    submit: () => void;
    remove: () => void;
};

export const useCoupon = (props: TUseCouponProps): TUseCoupon => {
    const { applyCouponToCartMutation, removeCouponFromCartMutation } = props;
    const [
        {
            details: { applied_coupons: appliedCoupons, prices },
            derivedDetails
        }
    ] = useCartContext();

    const { currencyCode } = derivedDetails;
    const discount = prices?.discounts?.[0]?.amount.value;
    const appliedCouponCode = appliedCoupons?.[0]?.code;
    const [{ applyCouponError, isSubmitting }, { applyCoupon, removeCoupon }] =
        useCheckoutContext();
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
        error: applyCouponError?.message,
        isSubmitting,
        handleInputChange,
        handleKeyDown,
        submit,
        remove
    };
};
