import { SyntheticEvent } from 'react';
import { TBaseImgProps } from './ImageTypes';

export interface ISimpleImageProps extends TBaseImgProps {
    alt: string;
    handleError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
    handleLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}
