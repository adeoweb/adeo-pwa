export const filterSortMenu = categories => {
    let filterSortedCategories = [];

    if (!categories || !Array.isArray(categories)) {
        return filterSortedCategories;
    }

    filterSortedCategories = categories
        .filter(category => category.include_in_menu)
        .sort((a, b) => {
            return a.position - b.position;
        })
        .map(item => {
            const { url_suffix: urlSuffix, url_path: urlPath } = item;
            const suffix = urlSuffix ? urlSuffix : '';
            const completeUrlPath = `/${urlPath}${suffix}`;

            return {
                ...item,
                url_path: completeUrlPath
            };
        });

    return filterSortedCategories;
};
