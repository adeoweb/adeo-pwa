import React, { FunctionComponent } from 'react';
import { ISimpleImageProps } from './SimpleImageTypes';

const SimpleImage: FunctionComponent<ISimpleImageProps> = ({
    alt,
    handleError,
    handleLoad,
    loading = 'lazy',
    ...rest
}) => {
    return (
        <img
            loading={loading}
            alt={alt}
            onError={handleError}
            onLoad={handleLoad}
            {...rest}
        />
    );
};

export default SimpleImage;
