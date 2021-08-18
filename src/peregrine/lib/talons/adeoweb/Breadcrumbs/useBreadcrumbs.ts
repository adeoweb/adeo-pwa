import { DocumentNode } from 'graphql';

import { useQuery } from '@apollo/react-hooks';
import { useMemo } from 'react';

import {
    GetBreadcrumbDataQueryVariables,
    GetBreadcrumbDataQuery
} from 'src/lib/queries/getBreadcrumbData.generated';
import { TCategoryInterface } from 'src/lib/types/graphql/Category';
import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';
import filterOutNullableValues from 'src/peregrine/lib/util/adeoweb/filterOutNullableValues';

// Generates the path for the category.
const getPath = (path, suffix) => {
    if (path) {
        return `/${path}${suffix}`;
    }

    // If there is no path this is just a dead link.
    return '#';
};

type TUseBreadcrumbsProps = {
    categoryId: number;
    query: DocumentNode;
};

type TNormalizedBreadcrumb = {
    text: string;
    path: string;
};

type TUseBreadcrumbs = {
    currentCategory: string;
    currentCategoryPath: string;
    isLoading: boolean;
    hasError: boolean;
    normalizedData: TNormalizedBreadcrumb[];
};

export const useBreadcrumbs = (
    props: TUseBreadcrumbsProps
): TUseBreadcrumbs => {
    const { categoryId, query } = props;

    const [{ category_url_suffix: categoryUrlSuffix }] = useConfigContext();
    const categorySuffix = categoryUrlSuffix || '.html';

    const { data, loading, error } = useQuery<
        GetBreadcrumbDataQuery,
        GetBreadcrumbDataQueryVariables
    >(query, {
        variables: { category_id: categoryId.toString() },
        skip: categoryId === null,
        fetchPolicy: fetchPolicy.queries.default
    });

    let category: TCategoryInterface = {};
    if (!loading && data?.categoryList?.[0]) {
        category = data.categoryList[0];
    }

    // When we have breadcrumb data sort and normalize it for easy rendering.
    const normalizedData = useMemo((): TNormalizedBreadcrumb[] => {
        if (category.breadcrumbs) {
            const breadcrumbData = filterOutNullableValues(
                category.breadcrumbs
            );

            return breadcrumbData.sort().map(category => ({
                text: category?.category_name ?? '',
                path: getPath(category?.category_url_path, categorySuffix)
            }));
        }

        return [];
    }, [categorySuffix, category]);

    return {
        currentCategory: category.name || '',
        currentCategoryPath:
            (category.url_path && `/${category.url_path}${categorySuffix}`) ||
            '#',
        isLoading: loading,
        hasError: !!error,
        normalizedData: normalizedData
    };
};
