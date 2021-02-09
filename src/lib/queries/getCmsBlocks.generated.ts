/* eslint-disable */
import * as Types from '../types/graphql-types.d';

export type CmsBlocksQueryVariables = Types.Exact<{
    identifiers:
        | Array<Types.Maybe<Types.Scalars['String']>>
        | Types.Maybe<Types.Scalars['String']>;
}>;

export type CmsBlocksQuery = {
    cmsBlocks?: Types.Maybe<{
        items?: Types.Maybe<
            Array<
                Types.Maybe<{
                    content?: Types.Maybe<string>;
                    identifier?: Types.Maybe<string>;
                }>
            >
        >;
    }>;
};
