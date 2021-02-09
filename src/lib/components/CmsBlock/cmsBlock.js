import React from 'react';
import { array, func, oneOfType, shape, string } from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { mergeClasses } from '../../classify';
import Block from './block';
import defaultClasses from './cmsBlock.css';
import { FullPageLoadingIndicator } from '../../components/LoadingIndicator';
import GET_CMS_BLOCKS from '../../queries/getCmsBlocks.graphql';
import { fetchPolicy } from 'src/peregrine/lib/util/adeoweb/fetchPolicy';

const CmsBlockGroup = props => {
    const { identifiers } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const { loading, error, data } = useQuery(GET_CMS_BLOCKS, {
        variables: { identifiers },
        fetchPolicy: fetchPolicy.queries.default
    });

    if (loading) {
        return <FullPageLoadingIndicator />;
    }

    if (error) {
        return <div>Data Fetch Error</div>;
    }

    const { items } = data.cmsBlocks;

    if (!Array.isArray(items) || !items.length) {
        return <div>There are no blocks to display</div>;
    }

    const BlockChild = typeof children === 'function' ? children : Block;
    const blocks = items.map((item, index) => (
        <BlockChild
            key={item.identifier}
            className={classes.block}
            index={index}
            {...item}
        />
    ));

    return (
        <div className={classes.root}>
            <div className={classes.content}>{blocks}</div>
        </div>
    );
};

CmsBlockGroup.propTypes = {
    children: func,
    classes: shape({
        block: string,
        content: string,
        root: string
    }),
    identifiers: oneOfType([string, array])
};

export default CmsBlockGroup;
