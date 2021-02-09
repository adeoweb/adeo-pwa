import React, { FunctionComponent } from 'react';
import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';
import { usePlaceholderImage } from 'src/peregrine/lib/talons/adeoweb/Image/usePlaceholderImage';

import SimpleImage from './SimpleImage';
import { IPlaceholderImageProps } from './PlaceholderImageTypes';

const PlaceholderImage: FunctionComponent<IPlaceholderImageProps> = ({
    alt,
    classes,
    displayPlaceholder,
    height,
    imageHasError,
    imageIsLoaded,
    width,
    src = transparentPlaceholder,
    loading = 'eager',
    ...rest
}) => {
    const { shouldRenderPlaceholder } = usePlaceholderImage({
        displayPlaceholder,
        imageHasError,
        imageIsLoaded
    });

    const placeholderClass = shouldRenderPlaceholder
        ? classes.placeholder
        : classes.placeholder_layoutOnly;

    const placeholderFullClass = `${classes.image} ${placeholderClass}`;

    return (
        <SimpleImage
            loading={loading}
            height={height}
            width={width}
            src={src}
            alt={alt}
            className={placeholderFullClass}
            {...rest}
        />
    );
};

export default PlaceholderImage;
