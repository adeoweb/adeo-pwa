import { useQuery } from '@apollo/react-hooks';
import { useMemo } from 'react';

import { useConfigContext } from 'src/peregrine/lib/context/adeoweb/config';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

// Just in case the data is unsorted, lets sort it.
const sortCrumbs = (a, b) => a.category_level > b.category_level;

// Generates the path for the category.
const getPath = (path, suffix) => {
    if (path) {
        return `/${path}${suffix}`;
    }

    // If there is no path this is just a dead link.
    return '#';
};

/**
 * Returns props necessary to render a Breadcrumbs component.
 *
 * @param {object} props
 * @param {object} props.query - the breadcrumb query
 * @param {string} props.categoryId - the id of the category for which to generate breadcrumbs
 * @return {{
 *   currentCategory: string,
 *   currentCategoryPath: string,
 *   isLoading: boolean,
 *   normalizedData: array
 * }}
 */
export const useBreadcrumbs = props => {
    const { categoryId, query } = props;

    const [{ category_url_suffix: categoryUrlSuffix }] = useConfigContext();
    const categorySuffix = categoryUrlSuffix || '.html';

    const { data, loading, error } = useQuery(query, {
        variables: { category_id: categoryId },
        skip: categoryId === null,
        fetchPolicy: fetchPolicy.queries.default
    });

    let category = {};
    if (!loading && data && data.categoryList && data.categoryList[0]) {
        category = data.categoryList[0];
    }

    // When we have breadcrumb data sort and normalize it for easy rendering.
    const normalizedData = useMemo(() => {
        if (category.breadcrumbs) {
            const breadcrumbData = category.breadcrumbs;

            return breadcrumbData.sort(sortCrumbs).map(category => ({
                text: category.category_name,
                path: getPath(category.category_url_path, categorySuffix)
            }));
        }
    }, [categorySuffix, category]);

    return {
        currentCategory: category.name || '',
        currentCategoryPath:
            (category.url_path && `/${category.url_path}${categorySuffix}`) ||
            '#',
        isLoading: loading,
        hasError: !!error,
        normalizedData: normalizedData || []
    };
};
