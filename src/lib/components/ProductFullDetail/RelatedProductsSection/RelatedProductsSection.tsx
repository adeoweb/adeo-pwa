import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Settings } from 'react-slick';
import { TProductInterface } from 'src/lib/types/graphql/Product';
import { Container } from 'react-bootstrap';
import HorizontalProductsCarousel from 'src/lib/components/ProductFullDetail/HorizontalProductsCarousel';
import ChevronCircleIcon from 'src/lib/assets/icons/ChevronCircleIcon';

interface IRelatedProductsSectionProps {
    items: TProductInterface[];
}

const RelatedProductsSection: FunctionComponent<IRelatedProductsSectionProps> =
    ({ items }) => {
        const { t } = useTranslation();

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
