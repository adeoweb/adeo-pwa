/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type RemoteItemMutationVariables = Types.Exact<{
    cartId: Types.Scalars['String'];
    itemId: Types.Scalars['Int'];
}>;

export type RemoteItemMutation = {
    removeItemFromCart?: Types.Maybe<{
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
