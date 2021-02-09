import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings } from 'react-slick';
import { TProductInterface } from 'src/lib/types/graphql/Product';
import VerticalProductsCarousel from 'src/lib/components/ProductFullDetail/VerticalProductsCarousel';

interface IFeaturedProductsWidgetProps {
    items: TProductInterface[];
}

const FeaturedProductsWidget: FunctionComponent<
    IFeaturedProductsWidgetProps
> = ({ items }) => {
    const { t } = useTranslation();
    const carouselSettings: Settings = {
        autoplay: true,
        arrows: true
    };

    if (!items.length) {
        return null;
    }

    return (
        <div className="widget widget-featured">
            <h3 className="widget-title">{t('Featured Products')}</h3>
            <div className="widget-body">
                <VerticalProductsCarousel
                    items={items}
                    settings={carouselSettings}
                />
            </div>
        </div>
    );
};

export default FeaturedProductsWidget;
