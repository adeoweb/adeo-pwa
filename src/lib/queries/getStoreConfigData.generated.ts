/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type StoreConfigDataQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type StoreConfigDataQuery = {
    storeConfig?: Types.Maybe<{
        id?: Types.Maybe<number>;
        base_currency_code?: Types.Maybe<string>;
        copyright?: Types.Maybe<string>;
        store_name?: Types.Maybe<string>;
        header_logo_src?: Types.Maybe<string>;
        list_per_page?: Types.Maybe<number>;
        logo_alt?: Types.Maybe<string>;
        logo_height?: Types.Maybe<number>;
        logo_width?: Types.Maybe<number>;
        root_category_id?: Types.Maybe<number>;
        category_url_suffix?: Types.Maybe<string>;
        website_id?: Types.Maybe<number>;
    }>;
};
