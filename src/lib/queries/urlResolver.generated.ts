/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type ResolveUrlQueryVariables = Types.Exact<{
    urlKey: Types.Scalars['String'];
}>;

export type ResolveUrlQuery = {
    urlResolver?: Types.Maybe<{
        type?: Types.Maybe<Types.UrlRewriteEntityTypeEnum>;
        id?: Types.Maybe<number>;
    }>;
};
