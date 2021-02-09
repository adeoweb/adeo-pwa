/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import { WishlistFragment } from './wishlist.generated';
export type CustomerDetailsFragment = {
    email?: Types.Maybe<string>;
    firstname?: Types.Maybe<string>;
    lastname?: Types.Maybe<string>;
    is_subscribed?: Types.Maybe<boolean>;
    addresses?: Types.Maybe<
        Array<
            Types.Maybe<{
                city?: Types.Maybe<string>;
                company?: Types.Maybe<string>;
                country_code?: Types.Maybe<Types.CountryCodeEnum>;
                default_billing?: Types.Maybe<boolean>;
                default_shipping?: Types.Maybe<boolean>;
                fax?: Types.Maybe<string>;
                firstname?: Types.Maybe<string>;
                id?: Types.Maybe<number>;
                lastname?: Types.Maybe<string>;
                middlename?: Types.Maybe<string>;
                postcode?: Types.Maybe<string>;
                prefix?: Types.Maybe<string>;
                street?: Types.Maybe<Array<Types.Maybe<string>>>;
                suffix?: Types.Maybe<string>;
                telephone?: Types.Maybe<string>;
                vat_id?: Types.Maybe<string>;
                address_name: string;
                region?: Types.Maybe<{
                    region?: Types.Maybe<string>;
                    region_code?: Types.Maybe<string>;
                }>;
            }>
        >
    >;
    wishlist: WishlistFragment;
};
