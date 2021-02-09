import React, { FunctionComponent } from 'react';

import { useResourceImage } from 'src/peregrine/lib/talons/adeoweb/Image/useResourceImage';
import { generateSrcset, generateUrl } from '../../util/images';
import { IResourceImageProps } from './ResourceImageTypes';
import SimpleImage from './SimpleImage';

const ResourceImage: FunctionComponent<IResourceImageProps> = ({
    resource,
    type = 'image-product',
    loading = 'lazy',
    alt,
    widths,
    height,
    width,
    ...rest
}) => {
    const { sizes, src, srcSet } = useResourceImage({
        generateSrcset,
        generateUrl,
        height,
        resource,
        type,
        width,
        widths
    });

    return (
        <SimpleImage
            loading={loading}
            alt={alt}
            height={height}
            width={width}
            sizes={sizes}
            src={src}
            srcSet={srcSet}
            {...rest}
        />
    );
};

export default ResourceImage;
