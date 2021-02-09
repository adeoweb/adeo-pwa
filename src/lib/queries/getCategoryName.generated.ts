/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type GetCategoryNameQueryVariables = Types.Exact<{
    id: Types.Scalars['Int'];
}>;

export type GetCategoryNameQuery = {
    category?: Types.Maybe<{ name?: Types.Maybe<string> }>;
};
