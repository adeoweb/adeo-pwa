import React from 'react';
import { number } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { FullPageLoadingIndicator } from '../../components/LoadingIndicator';
import cmsPageQuery from '../../queries/getCmsPage.graphql';
import RichContent from '../../components/RichContent';
import CategoryList from '../../components/CategoryList';
import { Meta } from '../../components/Head';
import { BreadcrumbsWrapper } from 'src/lib/components/Breadcrumbs';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

const CMSPage = props => {
    const { id } = props;
    const { loading, error, data } = useQuery(cmsPageQuery, {
        variables: {
            id: Number(id),
            onServer: false
        },
        fetchPolicy: fetchPolicy.queries.default
    });

    if (error) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        return <div>Page Fetch Error</div>;
    }

    if (loading) {
        return <FullPageLoadingIndicator />;
    }

    if (data) {
        let content;
        // Only render <RichContent /> if the page isn't empty and doesn't contain the default CMS Page text.
        if (
            data.cmsPage.content &&
            data.cmsPage.content.length > 0 &&
            !data.cmsPage.content.includes('CMS homepage content goes here.')
        ) {
            content = <RichContent html={data.cmsPage.content} />;
        } else {
            content = <CategoryList title="Shop by category" id={2} />;
        }
        const title = data.cmsPage.title;
        const isRootPage = window.location.pathname === '/';

        return (
            <>
                <Meta
                    name="description"
                    content={data.cmsPage.meta_description}
                />
                {!isRootPage && (
                    <BreadcrumbsWrapper>
                        {title && (
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {title}
                            </li>
                        )}
                    </BreadcrumbsWrapper>
                )}
                {content}
            </>
        );
    }
    return null;
};

CMSPage.propTypes = {
    id: number
};

export default CMSPage;
