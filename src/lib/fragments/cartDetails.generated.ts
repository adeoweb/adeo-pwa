/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type CartDetailsFragment = {
    id: string;
    email?: Types.Maybe<string>;
    applied_coupons?: Types.Maybe<Array<Types.Maybe<{ code: string }>>>;
    available_payment_methods?: Types.Maybe<
        Array<Types.Maybe<{ code: string; title: string }>>
    >;
    billing_address?: Types.Maybe<{
        customer_address_id?: Types.Maybe<number>;
        city: string;
        company?: Types.Maybe<string>;
        firstname: string;
        lastname: string;
        postcode?: Types.Maybe<string>;
        street: Array<Types.Maybe<string>>;
        telephone: string;
        country: { code: string; label: string };
        region?: Types.Maybe<{ code: string; label: string }>;
    }>;
    items?: Types.Maybe<
        Array<
            Types.Maybe<
                | {
                      id: string;
                      quantity: number;
                      custom_options?: Types.Maybe<
                          Array<
                              Types.Maybe<{
                                  id: number;
                                  label: string;
                                  sort_order: number;
                                  values: Array<
                                      Types.Maybe<{
                                          id: number;
                                          label: string;
                                          value: string;
                                      }>
                                  >;
                              }>
                          >
                      >;
                      product:
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            };
                      prices?: Types.Maybe<{
                          price: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                          row_total: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                      }>;
                  }
                | {
                      id: string;
                      quantity: number;
                      product:
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            };
                      prices?: Types.Maybe<{
                          price: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                          row_total: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                      }>;
                  }
                | {
                      id: string;
                      quantity: number;
                      product:
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            };
                      prices?: Types.Maybe<{
                          price: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                          row_total: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                      }>;
                  }
                | {
                      id: string;
                      quantity: number;
                      product:
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            };
                      prices?: Types.Maybe<{
                          price: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                          row_total: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                      }>;
                  }
                | {
                      id: string;
                      quantity: number;
                      configurable_options: Array<
                          Types.Maybe<{
                              id: number;
                              option_label: string;
                              value_id: number;
                              value_label: string;
                          }>
                      >;
                      customizable_options: Array<
                          Types.Maybe<{
                              id: number;
                              label: string;
                              sort_order: number;
                              values: Array<
                                  Types.Maybe<{
                                      id: number;
                                      label: string;
                                      value: string;
                                  }>
                              >;
                          }>
                      >;
                      product:
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            }
                          | {
                                name?: Types.Maybe<string>;
                                sku?: Types.Maybe<string>;
                                url_key?: Types.Maybe<string>;
                                url_suffix?: Types.Maybe<string>;
                                small_image?: Types.Maybe<{
                                    url?: Types.Maybe<string>;
                                    label?: Types.Maybe<string>;
                                }>;
                                price_range: {
                                    minimum_price: {
                                        regular_price: {
                                            value?: Types.Maybe<number>;
                                            currency?: Types.Maybe<
                                                Types.CurrencyEnum
                                            >;
                                        };
                                    };
                                };
                            };
                      prices?: Types.Maybe<{
                          price: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                          row_total: {
                              currency?: Types.Maybe<Types.CurrencyEnum>;
                              value?: Types.Maybe<number>;
                          };
                      }>;
                  }
            >
        >
    >;
    prices?: Types.Maybe<{
        applied_taxes?: Types.Maybe<
            Array<
                Types.Maybe<{
                    label: string;
                    amount: {
                        value?: Types.Maybe<number>;
                        currency?: Types.Maybe<Types.CurrencyEnum>;
                    };
                }>
            >
        >;
        grand_total?: Types.Maybe<{
            value?: Types.Maybe<number>;
            currency?: Types.Maybe<Types.CurrencyEnum>;
        }>;
        subtotal_excluding_tax?: Types.Maybe<{
            value?: Types.Maybe<number>;
            currency?: Types.Maybe<Types.CurrencyEnum>;
        }>;
        discounts?: Types.Maybe<
            Array<
                Types.Maybe<{
                    label: string;
                    amount: {
                        value?: Types.Maybe<number>;
                        currency?: Types.Maybe<Types.CurrencyEnum>;
                    };
                }>
            >
        >;
    }>;
    selected_payment_method?: Types.Maybe<{
        code: string;
        purchase_order_number?: Types.Maybe<string>;
        title: string;
    }>;
    shipping_addresses: Array<
        Types.Maybe<{
            customer_address_id?: Types.Maybe<number>;
            city: string;
            company?: Types.Maybe<string>;
            firstname: string;
            lastname: string;
            postcode?: Types.Maybe<string>;
            street: Array<Types.Maybe<string>>;
            telephone: string;
            available_shipping_methods?: Types.Maybe<
                Array<
                    Types.Maybe<{
                        available: boolean;
                        carrier_code: string;
                        carrier_title: string;
                        method_code?: Types.Maybe<string>;
                        method_title?: Types.Maybe<string>;
                        error_message?: Types.Maybe<string>;
                        amount: {
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                            value?: Types.Maybe<number>;
                        };
                        price_excl_tax: {
                            value?: Types.Maybe<number>;
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                        };
                        price_incl_tax: {
                            value?: Types.Maybe<number>;
                            currency?: Types.Maybe<Types.CurrencyEnum>;
                        };
                    }>
                >
            >;
            country: { code: string; label: string };
            region?: Types.Maybe<{ code: string; label: string }>;
            selected_shipping_method?: Types.Maybe<{
                carrier_code: string;
                carrier_title: string;
                method_code: string;
                method_title: string;
                amount: {
                    value?: Types.Maybe<number>;
                    currency?: Types.Maybe<Types.CurrencyEnum>;
                };
            }>;
        }>
    >;
};
