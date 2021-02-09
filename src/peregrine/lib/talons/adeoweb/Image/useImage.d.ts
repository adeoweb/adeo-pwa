export const UNCONSTRAINED_SIZE_KEY: string;

type TUseImageProps = {
    onError?: () => void;
    onLoad?: () => void;
    width?: number | string;
    widths?: Map<number | string, number>;
};

type TUseImage = {
    handleError: () => void;
    handleImageLoad: () => void;
    hasError: boolean;
    isLoaded: boolean;
    resourceWidth?: number | string;
};

export function useImage(props: TUseImageProps): TUseImage;
