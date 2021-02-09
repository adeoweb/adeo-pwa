import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export type TBaseImgProps = DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

export interface IImageProps extends TBaseImgProps {
    alt: string;
    classes?: {
        container?: string;
        loaded?: string;
        notLoaded?: string;
        root?: string;
        image?: string;
    };
    displayPlaceholder?: boolean;
    onError?: () => void;
    onLoad?: () => void;
    placeholder?: string;
    resource?: string;
    src?: string;
    type?: string;
    widths?: Map<number | string, number>;
}
