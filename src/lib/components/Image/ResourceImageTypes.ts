import { SyntheticEvent } from 'react';
import { TBaseImgProps } from './ImageTypes';

export interface IResourceImageProps extends TBaseImgProps {
    resource?: string;
    type?: string;
    alt: string;
    widths?: Map<number | string, number>;
    handleError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
    handleLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}
