/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetCmsPageQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
    onServer: Types.Scalars['Boolean'];
}>;

export type GetCmsPageQuery = {
    cmsPage?: Types.Maybe<{
        url_key?: Types.Maybe<string>;
        content?: Types.Maybe<string>;
        content_heading?: Types.Maybe<string>;
        title?: Types.Maybe<string>;
        page_layout?: Types.Maybe<string>;
        meta_title?: Types.Maybe<string>;
        meta_keywords?: Types.Maybe<string>;
        meta_description?: Types.Maybe<string>;
    }>;
};
