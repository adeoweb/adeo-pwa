/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type CustomerOrderBasicInfoFragment = {
    id?: Types.Maybe<number>;
    created_at?: Types.Maybe<string>;
    order_number: string;
    status?: Types.Maybe<string>;
    grand_total?: Types.Maybe<{
        value?: Types.Maybe<number>;
        currency?: Types.Maybe<Types.CurrencyEnum>;
    }>;
};
