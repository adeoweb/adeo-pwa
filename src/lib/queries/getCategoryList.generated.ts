/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetCategoryListQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;

export type GetCategoryListQuery = {
    category?: Types.Maybe<{
        id?: Types.Maybe<number>;
        children?: Types.Maybe<
            Array<
                Types.Maybe<{
                    id?: Types.Maybe<number>;
                    name?: Types.Maybe<string>;
                    url_key?: Types.Maybe<string>;
                    url_path?: Types.Maybe<string>;
                    children_count?: Types.Maybe<string>;
                    path?: Types.Maybe<string>;
                    image?: Types.Maybe<string>;
                    productImagePreview?: Types.Maybe<{
                        items?: Types.Maybe<
                            Array<
                                Types.Maybe<
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                    | {
                                          small_image?: Types.Maybe<{
                                              url?: Types.Maybe<string>;
                                          }>;
                                      }
                                >
                            >
                        >;
                    }>;
                }>
            >
        >;
    }>;
};
