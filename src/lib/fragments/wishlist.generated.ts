/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type WishlistFragment = {
    id?: Types.Maybe<string>;
    items_count?: Types.Maybe<number>;
    sharing_code?: Types.Maybe<string>;
    updated_at?: Types.Maybe<string>;
    items?: Types.Maybe<
        Array<
            Types.Maybe<{
                added_at?: Types.Maybe<string>;
                description?: Types.Maybe<string>;
                id?: Types.Maybe<number>;
                qty?: Types.Maybe<number>;
                product?: Types.Maybe<
                    | {
                          __typename: 'VirtualProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                    | {
                          __typename: 'SimpleProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                    | {
                          __typename: 'DownloadableProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                    | {
                          __typename: 'BundleProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                    | {
                          __typename: 'GroupedProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                    | {
                          __typename: 'ConfigurableProduct';
                          id?: Types.Maybe<number>;
                          sku?: Types.Maybe<string>;
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          url_suffix?: Types.Maybe<string>;
                          small_image?: Types.Maybe<{
                              label?: Types.Maybe<string>;
                              url?: Types.Maybe<string>;
                          }>;
                          price_range: {
                              minimum_price: {
                                  final_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  regular_price: {
                                      currency?: Types.Maybe<
                                          Types.CurrencyEnum
                                      >;
                                      value?: Types.Maybe<number>;
                                  };
                                  discount?: Types.Maybe<{
                                      amount_off?: Types.Maybe<number>;
                                  }>;
                              };
                          };
                      }
                >;
            }>
        >
    >;
};
