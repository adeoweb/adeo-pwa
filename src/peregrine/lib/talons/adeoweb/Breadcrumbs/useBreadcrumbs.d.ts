import { DocumentNode } from 'graphql';

type TUseBreadcrumbsProps = {
    categoryId: number | null;
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

export function useBreadcrumbs(props: TUseBreadcrumbsProps): TUseBreadcrumbs;
