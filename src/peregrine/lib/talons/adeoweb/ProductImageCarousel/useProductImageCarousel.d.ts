import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';

type TUseProductImageCarousel = {
    currentImage: TMediaGalleryInterface;
    activeItemIndex: number;
    altText: string;
    handleNext: () => void;
    handlePrevious: () => void;
    handleThumbnailClick: (index: number) => void;
    sortedImages: TMediaGalleryInterface[];
};

interface IUseProductImageCarouselProps {
    images: TMediaGalleryInterface[];
    imageWidth: number;
}

export function useProductImageCarousel(
    props: IUseProductImageCarouselProps
): TUseProductImageCarousel;
