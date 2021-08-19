import { useCallback, useEffect } from 'react';

import { useCarousel } from '@magento/peregrine';

import { PREFETCH_IMAGES } from 'src/lib/constants/swMessageTypes';
import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';
import { generateUrlFromContainerWidth } from 'src/lib/util/images';
import {
    sendMessageToSW,
    VALID_SERVICE_WORKER_ENVIRONMENT
} from 'src/lib/util/swUtils';

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

export const useProductImageCarousel = (
    props: IUseProductImageCarouselProps
): TUseProductImageCarousel => {
    const { images = [], imageWidth } = props;
    const [carouselState, carouselApi] = useCarousel(images);
    const { activeItemIndex, sortedImages } = carouselState;
    const { handlePrevious, handleNext, setActiveItemIndex } = carouselApi;

    const handleThumbnailClick = useCallback(
        index => {
            setActiveItemIndex(index);
        },
        [setActiveItemIndex]
    );

    // Whenever the incoming images changes reset the active item to the first.
    useEffect(() => {
        setActiveItemIndex(0);
    }, [images, setActiveItemIndex]);

    useEffect(() => {
        if (VALID_SERVICE_WORKER_ENVIRONMENT) {
            const urls = images.map(
                // TODO: `file` does not exist on TMediaGalleryInterface. Refactor this hook later.
                // @ts-expect-error
                ({ file }) =>
                    `${location.origin}${generateUrlFromContainerWidth(
                        file,
                        imageWidth
                    )}`
            );
            sendMessageToSW(PREFETCH_IMAGES, {
                urls
            }).catch(err => {
                console.error(
                    'Unable to send PREFETCH_IMAGES message to SW',
                    err
                );
            });
        }
    }, [images, imageWidth]);

    const currentImage = sortedImages[activeItemIndex] || {};
    const altText = currentImage.label || 'image-product';

    return {
        currentImage,
        activeItemIndex,
        altText,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages
    };
};
