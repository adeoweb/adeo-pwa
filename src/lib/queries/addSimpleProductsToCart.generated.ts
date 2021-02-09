/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type AddSimpleProductToCartMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    quantity: Types.Scalars['Float'];
    sku: Types.Scalars['String'];
    customOptions?: Types.Maybe<
        | Array<Types.Maybe<Types.CustomizableOptionInput>>
        | Types.Maybe<Types.CustomizableOptionInput>
    >;
}>;

export type AddSimpleProductToCartMutation = {
    addSimpleProductsToCart?: Types.Maybe<{
        cart: {
            items?: Types.Maybe<
                Array<
                    Types.Maybe<
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    }
                                  | {
                                        name?: Types.Maybe<string>;
                                        sku?: Types.Maybe<string>;
                                    };
                          }
                    >
                >
            >;
        };
    }>;
};
