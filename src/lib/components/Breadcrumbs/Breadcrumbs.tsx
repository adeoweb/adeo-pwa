import React, { FunctionComponent, useMemo } from 'react';
import { useBreadcrumbs } from 'src/peregrine/lib/talons/adeoweb/Breadcrumbs/useBreadcrumbs';
import GET_BREADCRUMB_DATA from '../../queries/getBreadcrumbData.graphql';
import BreadcrumbsWrapper from 'src/lib/components/Breadcrumbs/BreadcrumbsWrapper';
import BreadcrumbsLink from 'src/lib/components/Breadcrumbs/BreadcrumbLink';

type TBreadcrumbsProps = {
    categoryId: number | null;
    currentProduct?: string;
};

const Breadcrumbs: FunctionComponent<TBreadcrumbsProps> = ({
    categoryId,
    currentProduct
}) => {
    const {
        currentCategory,
        currentCategoryPath,
        hasError,
        isLoading,
        normalizedData
    } = useBreadcrumbs({
        categoryId,
        query: GET_BREADCRUMB_DATA
    });

    const links = useMemo(() => {
        return normalizedData.map(({ text, path }) => {
            return (
                <li className="breadcrumb-item" key={path}>
                    <BreadcrumbsLink text={text} path={path} />
                </li>
            );
        });
    }, [normalizedData]);

    if (isLoading || hasError) {
        return <div />;
    }

    const currentCategoryLink = currentCategory ? (
        <li className={`breadcrumb-item${!currentProduct ? ' active' : ''}`}>
            {currentProduct ? (
                <BreadcrumbsLink
                    text={currentCategory}
                    path={currentCategoryPath}
                />
            ) : (
                currentCategory
            )}
        </li>
    ) : null;

    const currentProductNode = currentProduct ? (
        <li className="breadcrumb-item">{currentProduct}</li>
    ) : null;

    return (
        <BreadcrumbsWrapper>
            {links}
            {currentCategoryLink}
            {currentProductNode}
        </BreadcrumbsWrapper>
    );
};

export default Breadcrumbs;
