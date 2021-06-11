import React, { FunctionComponent } from 'react';

import Image from 'src/lib/components/Image';
import { TMediaGalleryInterface } from 'src/lib/types/graphql/MediaGalleryInterface';
import { useThumbnail } from 'src/peregrine/lib/talons/adeoweb/ProductImageCarousel/useThumbnail';

type TThumbnailProps = {
    isActive: boolean;
    item: TMediaGalleryInterface;
    onClickHandler: (index: number) => void;
    itemIndex: number;
};

const Thumbnail: FunctionComponent<TThumbnailProps> = ({
    isActive,
    item,
    onClickHandler,
    itemIndex
}) => {
    const { handleClick } = useThumbnail({
        onClickHandler,
        itemIndex
    });

    const { label, url } = item;

    if (!label || !url) {
        return null;
    }

    return (
        <button onClick={handleClick} className={isActive ? 'active' : ''}>
            <Image alt={label} resource={url} />
        </button>
    );
};

export default Thumbnail;
