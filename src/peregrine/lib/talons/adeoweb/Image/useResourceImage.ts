import { useMemo } from 'react';

import { UNCONSTRAINED_SIZE_KEY } from './useImage';

type TUseResourceImageProps = {
    generateSrcset: (imageURL: string, type: string) => string;
    generateUrl: (
        imageURL: string,
        mediaBase: string
    ) => (width: number, height: number) => string;
    height?: number | string;
    resource?: string;
    type?: string;
    width?: number | string;
    widths?: Map<number | string, number>;
};

type TUseResourceImage = {
    sizes: string;
    src: string;
    srcSet: string;
};

export const useResourceImage = (
    props: TUseResourceImageProps
): TUseResourceImage => {
    const {
        generateSrcset,
        generateUrl,
        height,
        resource = '',
        type = '',
        width = '',
        widths
    } = props;

    const src = useMemo(() => {
        return generateUrl(resource, type)(Number(width), Number(height));
    }, [generateUrl, height, resource, type, width]);

    const srcSet = useMemo(() => {
        return generateSrcset(resource, type);
    }, [generateSrcset, resource, type]);

    // Example: 100px
    // Example: (max-width: 640px) 50px, 100px
    const sizes = useMemo(() => {
        if (!widths) {
            return width ? `${width}px` : '';
        }

        const result: string[] = [];
        for (const [breakpoint, width] of widths) {
            if (breakpoint !== UNCONSTRAINED_SIZE_KEY) {
                result.push(`(max-width: ${breakpoint}px) ${width}px`);
            }
        }

        // Add the unconstrained size at the end.
        result.push(`${widths.get(UNCONSTRAINED_SIZE_KEY)}px`);

        return result.join(', ');
    }, [width, widths]);

    return {
        sizes,
        src,
        srcSet
    };
};
