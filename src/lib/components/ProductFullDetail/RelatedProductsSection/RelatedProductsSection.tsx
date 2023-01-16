import React, { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Settings } from 'react-slick';

import ChevronCircleIcon from 'src/lib/assets/icons/ChevronCircleIcon';
import HorizontalProductsCarousel from 'src/lib/components/ProductFullDetail/HorizontalProductsCarousel';
import { TProduct } from 'src/lib/types/graphql/Product';

interface IRelatedProductsSectionProps {
    items: TProduct[];
}

const RelatedProductsSection: FunctionComponent<IRelatedProductsSectionProps> =
    ({ items }) => {
        const { t } = useTranslation('product');

        if (!items.length) {
            return null;
        }

        const navigationButton = (
            <button>
                <ChevronCircleIcon />
            </button>
        );

        const baseSettings: Settings = {
            autoplay: true,
            dots: false,
            arrows: true,
            variableWidth: true,
            swipeToSlide: true,
            prevArrow: navigationButton,
            nextArrow: navigationButton
        };

        const carouselSettings = {
            ...baseSettings,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        ...baseSettings,
                        arrows: false
                    }
                }
            ]
        };

        return (
            <div className="featured-section">
                <Container>
                    <h2 className="carousel-title">{t('Featured Products')}</h2>
                    <HorizontalProductsCarousel
                        items={items}
                        settings={carouselSettings}
                    />
                </Container>
            </div>
        );
    };

export default RelatedProductsSection;
