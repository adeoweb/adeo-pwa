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

export function useResourceImage(
    props: TUseResourceImageProps
): TUseResourceImage;
