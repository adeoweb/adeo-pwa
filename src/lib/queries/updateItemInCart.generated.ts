/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type UpdateItemInCartMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    itemId: Types.Scalars['Int'];
    quantity: Types.Scalars['Float'];
}>;

export type UpdateItemInCartMutation = {
    updateCartItems?: Types.Maybe<{
        cart: {
            items?: Types.Maybe<
                Array<
                    Types.Maybe<
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> };
                          }
                        | {
                              id: string;
                              quantity: number;
                              product:
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> }
                                  | { name?: Types.Maybe<string> };
                          }
                    >
                >
            >;
        };
    }>;
};
