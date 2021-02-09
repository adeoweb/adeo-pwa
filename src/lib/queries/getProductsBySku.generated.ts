/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetProductsBySkuQueryVariables = Types.Exact<{
    skus?: Types.Maybe<
        | Array<Types.Maybe<Types.Scalars['String']>>
        | Types.Maybe<Types.Scalars['String']>
    >;
    pageSize: Types.Scalars['Int'];
}>;

export type GetProductsBySkuQuery = {
    products?: Types.Maybe<{
        total_count?: Types.Maybe<number>;
        items?: Types.Maybe<
            Array<
                Types.Maybe<
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                    | {
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              url?: Types.Maybe<string>;
                          }>;
                          price?: Types.Maybe<{
                              regularPrice?: Types.Maybe<{
                                  amount?: Types.Maybe<{
                                      value?: Types.Maybe<number>;
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                  }>;
                              }>;
                          }>;
                      }
                >
            >
        >;
        filters?: Types.Maybe<
            Array<
                Types.Maybe<{
                    name?: Types.Maybe<string>;
                    filter_items_count?: Types.Maybe<number>;
                    request_var?: Types.Maybe<string>;
                    filter_items?: Types.Maybe<
                        Array<
                            Types.Maybe<
                                | {
                                      label?: Types.Maybe<string>;
                                      value_string?: Types.Maybe<string>;
                                  }
                                | {
                                      label?: Types.Maybe<string>;
                                      value_string?: Types.Maybe<string>;
                                  }
                            >
                        >
                    >;
                }>
            >
        >;
    }>;
};
