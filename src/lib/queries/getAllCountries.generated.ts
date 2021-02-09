/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetAllCountriesQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetAllCountriesQuery = {
    countries?: Types.Maybe<
        Array<
            Types.Maybe<{
                id?: Types.Maybe<string>;
                full_name_english?: Types.Maybe<string>;
                available_regions?: Types.Maybe<
                    Array<
                        Types.Maybe<{
                            code?: Types.Maybe<string>;
                            id?: Types.Maybe<number>;
                            name?: Types.Maybe<string>;
                        }>
                    >
                >;
            }>
        >
    >;
};
