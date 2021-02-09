/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type MenuQueryVariables = Types.Exact<{
    id: Types.Scalars['String'];
}>;

export type MenuQuery = {
    categoryList?: Types.Maybe<
        Array<
            Types.Maybe<{
                children?: Types.Maybe<
                    Array<
                        Types.Maybe<{
                            include_in_menu?: Types.Maybe<number>;
                            name?: Types.Maybe<string>;
                            position?: Types.Maybe<number>;
                            url_path?: Types.Maybe<string>;
                            url_suffix?: Types.Maybe<string>;
                            children?: Types.Maybe<
                                Array<
                                    Types.Maybe<{
                                        include_in_menu?: Types.Maybe<number>;
                                        name?: Types.Maybe<string>;
                                        position?: Types.Maybe<number>;
                                        url_path?: Types.Maybe<string>;
                                        url_suffix?: Types.Maybe<string>;
                                        children?: Types.Maybe<
                                            Array<
                                                Types.Maybe<{
                                                    include_in_menu?: Types.Maybe<
                                                        number
                                                    >;
                                                    name?: Types.Maybe<string>;
                                                    position?: Types.Maybe<
                                                        number
                                                    >;
                                                    url_path?: Types.Maybe<
                                                        string
                                                    >;
                                                    url_suffix?: Types.Maybe<
                                                        string
                                                    >;
                                                }>
                                            >
                                        >;
                                    }>
                                >
                            >;
                        }>
                    >
                >;
            }>
        >
    >;
};
