import { TBaseImgProps } from './ImageTypes';

export interface IPlaceholderImageProps extends TBaseImgProps {
    alt: string;
    classes: {
        image: string;
        placeholder: string;
        placeholder_layoutOnly: string;
    };
    displayPlaceholder: boolean;
    imageHasError: boolean;
    imageIsLoaded: boolean;
}
