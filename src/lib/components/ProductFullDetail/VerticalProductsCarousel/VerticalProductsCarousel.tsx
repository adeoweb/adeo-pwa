import React, { FunctionComponent } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import { ProductItemLeftDetails } from 'src/lib/components/ProductItem';
import { TProduct } from 'src/lib/types/graphql/Product';

interface IVerticalProductsCarouselProps {
    items: TProduct[];
    settings: Settings;
    verticalCount?: number;
}

const VerticalProductsCarousel: FunctionComponent<IVerticalProductsCarouselProps> =
    ({ items, settings, verticalCount = 2 }) => {
        const defaultSettings: Settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        };

        let i;
        const groupedItems: TProduct[][] = [];
        for (i = 0; i < items.length; i += verticalCount) {
            groupedItems.push(items.slice(i, i + verticalCount));
        }

        return (
            <SlickSlider {...defaultSettings} {...settings}>
                {groupedItems.map((group, index) => (
                    <div className="featured-col" key={index}>
                        {group.map(item => (
                            <div
                                key={item.id}
                                className="product-default left-details product-widget"
                            >
                                <ProductItemLeftDetails product={item} />
                            </div>
                        ))}
                    </div>
                ))}
            </SlickSlider>
        );
    };

export default VerticalProductsCarousel;
