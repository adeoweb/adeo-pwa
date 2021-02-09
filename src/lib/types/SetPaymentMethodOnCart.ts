type TAuthorizenetInput = {
    cc_last_4: number;
    opaque_data_descriptor: string;
    opaque_data_value: string;
};

type TBraintreeInput = {
    device_data?: string;
    is_active_payment_token_enabler: boolean;
    payment_method_nonce: string;
};

type TBraintreeCcVaultInput = {
    device_data?: string;
    public_hash: string;
};

type THostedProInput = {
    cancel_url: string;
    return_url: string;
};

type TPayflowExpressInput = {
    payer_id: string;
    token: string;
};

type TPayflowLinkInput = {
    cancel_url: string;
    error_url: string;
    return_url: string;
};

type TPayflowProInput = {
    cc_details: {
        cc_exp_month: number;
        cc_exp_year: number;
        cc_last_4: number;
        cc_type: string;
    };
};

type TPaypalExpressInput = {
    payer_id: string;
    token: string;
};

export type TPaymentMethodInput = {
    code: string;
    authorizenet_acceptjs?: TAuthorizenetInput;
    braintree?: TBraintreeInput;
    braintree_cc_vault?: TBraintreeCcVaultInput;
    hosted_pro?: THostedProInput;
    payflow_express?: TPayflowExpressInput;
    payflow_link?: TPayflowLinkInput;
    payflowpro?: TPayflowProInput;
    paypal_express?: TPaypalExpressInput;
    purchase_order_number?: string;
};
