import React, { FunctionComponent } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import { mergeClasses } from 'src/lib/util/mergeClasses';
import { useImage } from 'src/peregrine/lib/talons/adeoweb/Image/useImage';

import { IImageProps } from './ImageTypes';
import PlaceholderImage from './PlaceholderImage';
import ResourceImage from './ResourceImage';
import SimpleImage from './SimpleImage';

import defaultClasses from './Image.scss';

const Image: FunctionComponent<IImageProps> = ({
    alt,
    classes: propsClasses,
    displayPlaceholder = true,
    onError,
    onLoad,
    placeholder,
    resource,
    src,
    type,
    height,
    useZoomIn,
    width,
    widths,
    ...rest
}) => {
    const {
        handleError,
        handleImageLoad,
        hasError,
        isLoaded,
        resourceWidth: talonResourceWidth
    } = useImage({
        onError,
        onLoad,
        width,
        widths
    });

    const classes = mergeClasses(defaultClasses, propsClasses);
    const containerClass = `${classes.root} ${classes.container}`;
    const isLoadedClass = isLoaded ? classes.loaded : classes.notLoaded;
    const imageClass = `${classes.image} ${isLoadedClass}`;
    const style = {
        height: height ? `${height}px` : 'auto',
        width: width ? `${width}px` : '100%'
    };

    let actualImage: JSX.Element | null = null;

    if (src) {
        actualImage = (
            <SimpleImage
                alt={alt}
                className={imageClass}
                handleError={handleError}
                handleLoad={handleImageLoad}
                src={src}
                width={width}
                height={height}
                style={style}
                {...rest}
            />
        );
    } else if (resource) {
        if (useZoomIn) {
            actualImage = (
                <InnerImageZoom
                    src={resource}
                    alt={alt}
                    className={defaultClasses.innerImageZoom}
                />
            );
        } else {
            actualImage = (
                <ResourceImage
                    alt={alt}
                    className={imageClass}
                    handleError={handleError}
                    handleLoad={handleImageLoad}
                    resource={resource}
                    type={type}
                    width={talonResourceWidth}
                    height={height}
                    widths={widths}
                    style={style}
                    {...rest}
                />
            );
        }
    }

    return (
        <div className={containerClass}>
            <PlaceholderImage
                alt={alt}
                classes={classes}
                displayPlaceholder={Boolean(displayPlaceholder)}
                imageHasError={hasError}
                imageIsLoaded={isLoaded}
                src={placeholder}
                width={talonResourceWidth}
                height={height}
                style={style}
                {...rest}
            />
            {actualImage}
        </div>
    );
};

export default Image;
