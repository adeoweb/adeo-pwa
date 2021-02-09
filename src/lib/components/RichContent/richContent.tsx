import React, { FunctionComponent, useEffect } from 'react';
import detectPageBuilder from './PageBuilder/detectPageBuilder';
import PageBuilder from './PageBuilder';
import { mergeClasses } from '../../classify';
import defaultClasses from './richContent.css';
import {
    HomeSliders,
    PartnersSlider
} from 'src/lib/components/RichContent/utils/slider';
import RichText from 'src/lib/components/RichText';

type TRichContentProps = {
    classes: {
        root: string;
    };
    html: string;
};

/**
 * RichContent component.
 *
 * This component serves as the pool to determine which type of content is being rendered
 * and pass the data off to the correct system.
 *
 * @typedef RichContent
 * @kind functional component
 *
 * @param {Object} props React component props
 *
 * @returns {React.Element} A React component that renders Heading with optional styling properties.
 */
const RichContent: FunctionComponent<TRichContentProps> = props => {
    const { html } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    useEffect(() => {
        init();
    }, [html]);

    const init = () => {
        HomeSliders();
        PartnersSlider();
    };

    if (detectPageBuilder(html)) {
        return (
            <div className={classes.root}>
                {/* @ts-ignore */}
                <PageBuilder masterFormat={html} />
            </div>
        );
    }

    return <RichText content={html} />;
};

export default RichContent;
