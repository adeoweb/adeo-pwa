/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type NavigationMenuQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;

export type NavigationMenuQuery = {
    category?: Types.Maybe<{
        id?: Types.Maybe<number>;
        name?: Types.Maybe<string>;
        children?: Types.Maybe<
            Array<
                Types.Maybe<{
                    children_count?: Types.Maybe<string>;
                    id?: Types.Maybe<number>;
                    include_in_menu?: Types.Maybe<number>;
                    name?: Types.Maybe<string>;
                    position?: Types.Maybe<number>;
                    url_path?: Types.Maybe<string>;
                }>
            >
        >;
    }>;
};
