/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type ProductDetailBySkuQueryVariables = Types.Exact<{
    sku?: Types.Maybe<Types.Scalars['String']>;
}>;

export type ProductDetailBySkuQuery = {
    products?: Types.Maybe<{
        items?: Types.Maybe<
            Array<
                Types.Maybe<
                    | {
                          __typename: 'VirtualProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                      }
                    | {
                          __typename: 'SimpleProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                      }
                    | {
                          __typename: 'DownloadableProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                      }
                    | {
                          __typename: 'BundleProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                      }
                    | {
                          __typename: 'GroupedProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                      }
                    | {
                          __typename: 'ConfigurableProduct';
                          id?: Types.Maybe<number>;
                          name?: Types.Maybe<string>;
                          sku?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          configurable_options?: Types.Maybe<
                              Array<
                                  Types.Maybe<{
                                      attribute_code?: Types.Maybe<string>;
                                      attribute_id?: Types.Maybe<string>;
                                      id?: Types.Maybe<number>;
                                      label?: Types.Maybe<string>;
                                      values?: Types.Maybe<
                                          Array<
                                              Types.Maybe<{
                                                  default_label?: Types.Maybe<
                                                      string
                                                  >;
                                                  label?: Types.Maybe<string>;
                                                  store_label?: Types.Maybe<
                                                      string
                                                  >;
                                                  use_default_value?: Types.Maybe<
                                                      boolean
                                                  >;
                                                  value_index?: Types.Maybe<
                                                      number
                                                  >;
                                              }>
                                          >
                                      >;
                                  }>
                              >
                          >;
                          variants?: Types.Maybe<
                              Array<
                                  Types.Maybe<{
                                      attributes?: Types.Maybe<
                                          Array<
                                              Types.Maybe<{
                                                  code?: Types.Maybe<string>;
                                                  value_index?: Types.Maybe<
                                                      number
                                                  >;
                                              }>
                                          >
                                      >;
                                      product?: Types.Maybe<{
                                          id?: Types.Maybe<number>;
                                          sku?: Types.Maybe<string>;
                                          stock_status?: Types.Maybe<
                                              Types.ProductStockStatus
                                          >;
                                          media_gallery?: Types.Maybe<
                                              Array<
                                                  Types.Maybe<
                                                      | {
                                                            url?: Types.Maybe<
                                                                string
                                                            >;
                                                            label?: Types.Maybe<
                                                                string
                                                            >;
                                                        }
                                                      | {
                                                            url?: Types.Maybe<
                                                                string
                                                            >;
                                                            label?: Types.Maybe<
                                                                string
                                                            >;
                                                        }
                                                  >
                                              >
                                          >;
                                      }>;
                                  }>
                              >
                          >;
                      }
                >
            >
        >;
    }>;
};
