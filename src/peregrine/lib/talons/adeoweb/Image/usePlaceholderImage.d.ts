type TUsePlaceholderImageProps = {
    displayPlaceholder: boolean;
    imageHasError: boolean;
    imageIsLoaded: boolean;
};

type TUsePlaceholderImage = {
    shouldRenderPlaceholder: boolean;
};

export function usePlaceholderImage(
    props: TUsePlaceholderImageProps
): TUsePlaceholderImage;
