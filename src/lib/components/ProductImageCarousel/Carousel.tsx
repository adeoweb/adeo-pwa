import React, { Fragment, FunctionComponent, useMemo } from 'react';

import { transparentPlaceholder } from '@magento/peregrine/lib/util/images';

import Image from 'src/lib/components/Image';
import Thumbnail from 'src/lib/components/ProductImageCarousel/Thumbnail';
import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';
import { useProductImageCarousel } from 'src/peregrine/lib/talons/adeoweb/ProductImageCarousel/useProductImageCarousel';

type TCarouselProps = {
    images: TMediaGalleryInterface[];
};

const IMAGE_WIDTH = 640;

const ProductImageCarousel: FunctionComponent<TCarouselProps> = ({
    images
}) => {
    const {
        currentImage,
        activeItemIndex,
        altText,
        handleNext,
        handlePrevious,
        handleThumbnailClick,
        sortedImages
    } = useProductImageCarousel({
        images,
        imageWidth: IMAGE_WIDTH
    });

    const thumbnails = useMemo(
        () => (
            <div className="prod-thumbnail row">
                {sortedImages.map((item, index) => (
                    <div key={`${item.url}-${item.label}`} className="col-3">
                        <Thumbnail
                            item={item}
                            itemIndex={index}
                            isActive={activeItemIndex === index}
                            onClickHandler={handleThumbnailClick}
                        />
                    </div>
                ))}
            </div>
        ),
        [activeItemIndex, handleThumbnailClick, sortedImages]
    );

    let image;
    if (currentImage.url) {
        image = (
            <Image alt={altText} resource={currentImage.url} useZoomIn={true} />
        );
    } else {
        image = <Image alt={altText} src={transparentPlaceholder} />;
    }

    return (
        <Fragment>
            <div className="product-slider-container product-item">
                <div className="product-item">{image}</div>
                <div className="carousel-nav">
                    <button
                        type="button"
                        className="carousel-prev"
                        onClick={handlePrevious}
                    >
                        <i className="icon-angle-left" />
                    </button>
                    <button
                        type="button"
                        className="carousel-next"
                        onClick={handleNext}
                    >
                        <i className="icon-angle-right" />
                    </button>
                </div>
                {/* TODO: this will open full image modal */}
                {/*<span className="prod-full-screen">*/}
                {/*    <i className="icon-plus" />*/}
                {/*</span>*/}
            </div>
            {thumbnails}
        </Fragment>
    );
};

export default ProductImageCarousel;
