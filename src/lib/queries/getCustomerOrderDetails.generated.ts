/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { CustomerOrderBasicInfoFragment } from '../fragments/customerOrderBasicInfo.generated';
export type GetCustomerOrdersDetailsQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetCustomerOrdersDetailsQuery = {
    customerOrders?: Types.Maybe<{
        items?: Types.Maybe<
            Array<
                Types.Maybe<
                    {
                        items?: Types.Maybe<
                            Array<
                                Types.Maybe<{
                                    name?: Types.Maybe<string>;
                                    qty?: Types.Maybe<number>;
                                    sku?: Types.Maybe<string>;
                                    price_incl_tax?: Types.Maybe<{
                                        value?: Types.Maybe<number>;
                                        currency?: Types.Maybe<
                                            Types.CurrencyEnum
                                        >;
                                    }>;
                                }>
                            >
                        >;
                        shipping_address?: Types.Maybe<{
                            firstname: string;
                            lastname: string;
                            telephone: string;
                            customer_notes?: Types.Maybe<string>;
                            street: Array<Types.Maybe<string>>;
                            city: string;
                            postcode?: Types.Maybe<string>;
                        }>;
                        billing_address?: Types.Maybe<{
                            firstname: string;
                            lastname: string;
                            telephone: string;
                            street: Array<Types.Maybe<string>>;
                            city: string;
                            postcode?: Types.Maybe<string>;
                        }>;
                        subtotal?: Types.Maybe<{
                            value?: Types.Maybe<number>;
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                        }>;
                        shipping_amount?: Types.Maybe<{
                            value?: Types.Maybe<number>;
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                        }>;
                        tax_amount?: Types.Maybe<{
                            value?: Types.Maybe<number>;
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                        }>;
                    } & CustomerOrderBasicInfoFragment
                >
            >
        >;
    }>;
};
