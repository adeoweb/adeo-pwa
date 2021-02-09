/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetStoreListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetStoreListQuery = {
    storeList?: Types.Maybe<
        Array<
            Types.Maybe<{
                base_url?: Types.Maybe<string>;
                code?: Types.Maybe<string>;
                id?: Types.Maybe<number>;
                locale?: Types.Maybe<string>;
                store_name?: Types.Maybe<string>;
                website_id?: Types.Maybe<number>;
            }>
        >
    >;
};
