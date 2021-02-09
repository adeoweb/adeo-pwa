/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetBreadcrumbDataQueryVariables = Types.Exact<{
    category_id: Types.Scalars['String'];
}>;

export type GetBreadcrumbDataQuery = {
    categoryList?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<number>;
                name?: Types.Maybe<string>;
                url_path?: Types.Maybe<string>;
                breadcrumbs?: Types.Maybe<
                    Array<
                        Types.Maybe<{
                            category_level?: Types.Maybe<number>;
                            category_name?: Types.Maybe<string>;
                            category_url_path?: Types.Maybe<string>;
                        }>
                    >
                >;
            }>
        >
    >;
};
