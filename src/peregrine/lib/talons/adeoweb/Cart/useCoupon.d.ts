import { DocumentNode } from 'graphql';

type TUseCouponProps = {
    applyCouponToCartMutation: DocumentNode;
    removeCouponFromCartMutation: DocumentNode;
};

export type TUseCoupon = {
    appliedCouponCode: string | null;
    discount: number | null;
    currencyCode: string;
    couponCode: string;
    error: string | null;
    isSubmitting: boolean;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
    handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    submit: () => void;
    remove: () => void;
};

export function useCoupon(props: TUseCouponProps): TUseCoupon;
