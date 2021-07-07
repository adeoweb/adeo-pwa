import React, { FunctionComponent } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import ProductItem from 'src/lib/components/ProductItem';
import { TProductInterface } from 'src/lib/types/graphql/Product';

import defaultClasses from './HorizontalProductsCarousel.scss';

interface IHorizontalProductsCarouselProps {
    items: TProductInterface[];
    settings: Settings;
}

const HorizontalProductsCarousel: FunctionComponent<IHorizontalProductsCarouselProps> =
    ({ items, settings }) => {
        return (
            <div className={defaultClasses.root}>
                <SlickSlider className={defaultClasses.item} {...settings}>
                    {items.map(item => (
                        <div key={item.id} className="product-default">
                            <ProductItem product={item} />
                        </div>
                    ))}
                </SlickSlider>
            </div>
        );
    };

export default HorizontalProductsCarousel;
