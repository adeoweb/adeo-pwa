/* eslint-disable */
import * as Types from '../types/graphql-types.d';

import {
    ProductDetails_VirtualProduct_Fragment,
    ProductDetails_SimpleProduct_Fragment,
    ProductDetails_DownloadableProduct_Fragment,
    ProductDetails_BundleProduct_Fragment,
    ProductDetails_GroupedProduct_Fragment,
    ProductDetails_ConfigurableProduct_Fragment
} from '../fragments/productDetails.generated';
export type ProductDetailQueryVariables = Types.Exact<{
    urlKey?: Types.Maybe<Types.Scalars['String']>;
    onServer: Types.Scalars['Boolean'];
}>;

export type ProductDetailQuery = {
    productDetail?: Types.Maybe<{
        items?: Types.Maybe<
            Array<
                Types.Maybe<
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          options?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            areaValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            dropDownValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            fieldValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            radioValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            checkboxValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                  >
                              >
                          >;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_VirtualProduct_Fragment)
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          options?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            areaValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            dropDownValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            fieldValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            radioValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            checkboxValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                  >
                              >
                          >;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_SimpleProduct_Fragment)
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          options?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            areaValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            dropDownValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            fieldValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            radioValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            checkboxValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                  >
                              >
                          >;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_DownloadableProduct_Fragment)
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          options?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            areaValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            dropDownValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            fieldValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            radioValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            checkboxValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                  >
                              >
                          >;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_BundleProduct_Fragment)
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_GroupedProduct_Fragment)
                    | ({
                          name?: Types.Maybe<string>;
                          url_key?: Types.Maybe<string>;
                          options?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            areaValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            dropDownValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            product_sku?: Types.Maybe<string>;
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            fieldValue?: Types.Maybe<{
                                                max_characters?: Types.Maybe<
                                                    number
                                                >;
                                                price?: Types.Maybe<number>;
                                                price_type?: Types.Maybe<
                                                    Types.PriceTypeEnum
                                                >;
                                                sku?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            radioValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                      | {
                                            option_id?: Types.Maybe<number>;
                                            required?: Types.Maybe<boolean>;
                                            sort_order?: Types.Maybe<number>;
                                            title?: Types.Maybe<string>;
                                            checkboxValue?: Types.Maybe<
                                                Array<
                                                    Types.Maybe<{
                                                        option_type_id?: Types.Maybe<
                                                            number
                                                        >;
                                                        price?: Types.Maybe<
                                                            number
                                                        >;
                                                        price_type?: Types.Maybe<
                                                            Types.PriceTypeEnum
                                                        >;
                                                        sku?: Types.Maybe<
                                                            string
                                                        >;
                                                        sort_order?: Types.Maybe<
                                                            number
                                                        >;
                                                        title?: Types.Maybe<
                                                            string
                                                        >;
                                                    }>
                                                >
                                            >;
                                        }
                                  >
                              >
                          >;
                          description?: Types.Maybe<{ html: string }>;
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
                          media_gallery?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                      | {
                                            label?: Types.Maybe<string>;
                                            url?: Types.Maybe<string>;
                                        }
                                  >
                              >
                          >;
                          crosssell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          related_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                          upsell_products?: Types.Maybe<
                              Array<
                                  Types.Maybe<
                                      | {
                                            __typename: 'VirtualProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'SimpleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'DownloadableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'BundleProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'GroupedProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                      | {
                                            __typename: 'ConfigurableProduct';
                                            id?: Types.Maybe<number>;
                                            name?: Types.Maybe<string>;
                                            sku?: Types.Maybe<string>;
                                            url_key?: Types.Maybe<string>;
                                            url_suffix?: Types.Maybe<string>;
                                            price_range: {
                                                minimum_price: {
                                                    final_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    regular_price: {
                                                        currency?: Types.Maybe<
                                                            Types.CurrencyEnum
                                                        >;
                                                        value?: Types.Maybe<
                                                            number
                                                        >;
                                                    };
                                                    discount?: Types.Maybe<{
                                                        amount_off?: Types.Maybe<
                                                            number
                                                        >;
                                                    }>;
                                                };
                                            };
                                            small_image?: Types.Maybe<{
                                                label?: Types.Maybe<string>;
                                                url?: Types.Maybe<string>;
                                            }>;
                                        }
                                  >
                              >
                          >;
                      } & ProductDetails_ConfigurableProduct_Fragment)
                >
            >
        >;
    }>;
};
